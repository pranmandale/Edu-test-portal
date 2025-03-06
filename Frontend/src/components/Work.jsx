import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaCog, FaMobileAlt, FaChartBar, FaAward } from "react-icons/fa";

const steps = [
    {
        icon: <FaFileAlt className="text-white text-4xl" />,
        title: "Create",
        description: "Add questions, reuse them, and randomize the order."
    },
    {
        icon: <FaCog className="text-white text-4xl" />,
        title: "Setup",
        description: "Choose private/public access, set timers, and limit attempts."
    },
    {
        icon: <FaMobileAlt className="text-white text-4xl" />,
        title: "Give Exam",
        description: "Seamless on mobile, desktop, with instant feedback."
    },
    {
        icon: <FaChartBar className="text-white text-4xl" />,
        title: "Analyze Results",
        description: "Instant grading and real-time results with export options."
    },
    {
        icon: <FaAward className="text-white text-4xl" />,
        title: "Certification",
        description: "Automatic certification and custom certificates."
    }
];

function Work() {
    return (

        <>
            
            <div className="w-full py-16 bg-gradient-to-r from-[#dff4f8] to-[#b0e3f7] flex flex-col items-center text-center px-4">
                <h2 className="font-extrabold text-4xl text-gray-800">Edu Test Portal</h2>
                <p className="max-w-3xl text-gray-700 text-xl mt-8 font-semibold">
                    This is the last online examination system you will ever need! With our easy online exam builder,
                    you will set up your own engaging exams that fit any kind of difficulty level. Build and create your
                    online exams & tests with great ease and provide your users with appropriate feedback, so they will have
                    a rich learning experience.
                </p>
            </div>

        <div className="w-full py-20 bg-gradient-to-r from-[#dff4f8] to-[#b0e3f7] flex flex-col items-center text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-10">How It Works</h2>
            <div className="flex flex-wrap justify-center gap-10 px-10">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="w-64 bg-white p-6 rounded-2xl shadow-xl text-center border-t-4 border-blue-500"
                    >
                        <div className="w-16 h-16 bg-blue-500 flex items-center justify-center rounded-full mx-auto mb-4">
                            {step.icon}
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800">{step.title}</h3>
                        <p className="text-gray-600 mt-2">{step.description}</p>
                    </motion.div>
                ))}
            </div>
            </div>
        </>
    );
}

export default Work;
