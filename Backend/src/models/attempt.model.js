// models/attempt.model.js
import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    selectedOptionIndex: {
        type: Number,
        required: true
    },
    isCorrect: {
        type: Boolean,
        required: true
    }
});

const attemptSchema = new mongoose.Schema({
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    completedAt: {
        type: Date,
        default: Date.now
    },
    timeTaken: {
        type: Number // Time taken in minutes
    },
    answers: [answerSchema]
}, {
    timestamps: true
});

export const Attempt = mongoose.model('Attempt', attemptSchema);
