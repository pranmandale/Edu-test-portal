import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Quiz } from "../models/quiz.model.js";
import { Attempt} from "../models/attempt.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";


const createQuiz = asyncHandler(async (req, res) => {
    const { title, description, questions, timeLimit } = req.body;

    if (!title || !questions || questions.length === 0) {
        throw new ApiError(400, "Title and at least one question are required");
    }

    const quiz = await Quiz.create({
        title,
        description,
        questions,
        timeLimit,
        createdBy: req.user._id, // Assumes req.user is populated via middleware
    });

    const shareableLink = `${req.protocol}://${req.get('host')}/api/quizzes/${quiz._id}/attempt`;

    return res
        .status(201)
        .json(new ApiResponse(201, {quiz,shareableLink}, "Quiz created successfully"));
});


const getUserQuizzes = asyncHandler(async (req, res) => {
    // Get the user ID from the JWT (which is available in req.user due to the verifyJWT middleware)
    const userId = req.user._id;

    // Fetch all quizzes created by this user
    const quizzes = await Quiz.find({ createdBy: userId })
        .sort({ createdAt: -1 }) // Optional: Sort by creation date (newest first)
        .populate('createdBy', 'username') // Optional: Populate the creator's username (if you want it in the response)
        .select('title description createdAt'); // Optional: Select specific fields to return (e.g., title, description, createdAt)

    // If no quizzes found, return a message
    if (!quizzes || quizzes.length === 0) {
        return res.status(404).json(new ApiResponse(404, [], 'No quizzes found'));
    }

    // Return the quizzes data
    return res.status(200).json(new ApiResponse(200, quizzes, 'Quizzes fetched successfully'));
});


// Get a single quiz by ID
const getQuizById = asyncHandler(async (req, res) => {
    const { quizId } = req.params;
    
    
    const quiz = await Quiz.findById(quizId).populate("createdBy", "username");
    if (!quiz) {
        throw new ApiError(404, "Quiz not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, quiz, "Quiz fetched successfully"));
});


const updateQuiz = asyncHandler(async (req, res) => {
    const { title, description, timeLimit, questions } = req.body;

    const quiz = await Quiz.findOneAndUpdate(
        { _id: req.params.quizId, createdBy: req.user._id },
        { title, description, timeLimit, questions },
        { new: true, runValidators: true }
    );

    if (!quiz) {
        throw new ApiError(404, "Quiz not found or unauthorized");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, quiz, "Quiz updated successfully"));
});






/**
 * Delete a quiz
 */
const deleteQuiz = asyncHandler(async (req, res) => {
    const quiz = await Quiz.findOneAndDelete({
        _id: req.params.quizId,
        createdBy: req.user._id,
    });

    if (!quiz) {
        throw new ApiError(404, "Quiz not found or unauthorized");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Quiz deleted successfully"));
});

/**
 * Get leaderboard for a quiz
 */
const getLeaderboard = asyncHandler(async (req, res) => {
    const leaderboard = await Quiz.aggregate([
        { 
            $match: {
                _id: new mongoose.Types.ObjectId(String(req.params.quizId))
            }
        },
        {
            $lookup: {
                from: "attempts",
                localField: "_id",
                foreignField: "quizId",
                as: "attempts"
            }
        },
        { $unwind: "$attempts" },
        {
            $lookup: {
                from: "users",
                localField: "attempts.userId",
                foreignField: "_id",
                as: "userDetails"
            }
        },
        { $unwind: "$userDetails" },
        // Group by username to get latest attempt
        {
            $group: {
                _id: "$userDetails.username",
                username: { $first: "$userDetails.username" },
                score: { $first: "$attempts.score" },
                completedAt: { $first: "$attempts.completedAt" },
                // Use this to sort within group
                latestAttempt: { $max: "$attempts.completedAt" }
            }
        },
        // Sort by score (highest first)
        { $sort: { score: -1, latestAttempt: -1 } },
        // Remove the temporary latestAttempt field
        {
            $project: {
                username: 1,
                score: 1,
                completedAt: 1
            }
        }
    ]);

    if (leaderboard.length === 0) {
        throw new ApiError(404, "No attempts found for this quiz");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, leaderboard, "Leaderboard fetched successfully"));
});


const attemptQuiz = asyncHandler(async (req, res) => {
    const { answers } = req.body;
    const { quizId } = req.params;
    const userId = req.user._id;

    // Find the quiz by ID
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
        throw new ApiError(404, "Quiz not found");
    }

    // Calculate score and prepare answers with the `isCorrect` field
    let score = 0;
    const updatedAnswers = answers.map(answer => {
        const question = quiz.questions.id(answer.questionId);
        if (!question) {
            throw new ApiError(400, "Invalid question ID provided");
        }
        const isCorrect = question.correctAnswerIndex === answer.selectedOptionIndex;
        if (isCorrect) {
            score++; // Increment score for correct answers
        }
        return { ...answer, isCorrect };
    });

    // Create attempt record with calculated score and answers
    const attempt = new Attempt({
        userId,
        quizId,
        score,
        answers: updatedAnswers
    });

    // Save attempt record to the database
    await attempt.save();

    return res
        .status(200)
        .json(new ApiResponse(200, {
            attemptId: attempt._id,
            score,
            totalQuestions: quiz.questions.length,
            correctAnswers: updatedAnswers.filter(answer => answer.isCorrect).length
        }, "Quiz attempted successfully"));
});

const getAttempts = asyncHandler(async (req, res) => {
    // Get user ID from authenticated user
    const userId = req.user._id;

    // Find all attempts by this user and populate quiz details
    const attempts = await Attempt.find({ userId })
        .populate({
            path: 'quizId',
            select: 'title description' // Select the fields you want from quiz
        })
        .sort({ createdAt: -1 }) // Sort by newest first
        .select('score createdAt completedAt'); // Select fields you want from attempt

    if (!attempts) {
        throw new ApiError(404, "No attempts found");
    }

    // Return attempts with quiz information
    return res
        .status(200)
        .json(new ApiResponse(
            200, 
            attempts,
            "Attempts fetched successfully"
        ));
});

const getQuizResults = asyncHandler(async (req, res) => {
    const { attemptId } = req.params;
    const userId = req.user._id;

    // Find the attempt
    const attempt = await Attempt.findOne({
        _id: attemptId,
        userId: userId
    });

    if (!attempt) {
        throw new ApiError(404, "Attempt not found");
    }

    // Find the quiz with questions
    const quiz = await Quiz.findById(attempt.quizId);

    if (!quiz) {
        throw new ApiError(404, "Quiz not found");
    }

    // Prepare detailed results
    const detailedResults = quiz.questions.map(question => {
        const userAnswer = attempt.answers.find(
            ans => ans.questionId.toString() === question._id.toString()
        );

        return {
            questionId: question._id,
            questionText: question.questionText,
            options: question.options,
            correctAnswerIndex: question.correctAnswerIndex,
            explanation: question.explanation,
            userSelectedOption: userAnswer ? userAnswer.selectedOptionIndex : null,
            isCorrect: userAnswer ? userAnswer.isCorrect : false
        };
    });

    return res.status(200).json(
        new ApiResponse(200, {
            quizTitle: quiz.title,
            score: attempt.score,
            totalQuestions: quiz.questions.length,
            results: detailedResults,
            attemptedAt: attempt.createdAt
        }, "Quiz results fetched successfully")
    );
});



export {
    createQuiz,
    getUserQuizzes,
    getQuizById,
    updateQuiz,
    deleteQuiz,
    getLeaderboard,
    attemptQuiz,
    getAttempts,
    getQuizResults
};


// leaderbaord test 