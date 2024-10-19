import React from "react";
import { motion } from "framer-motion";

const Startup = () => {
    const bounceVariants = {
        initial: {
            y: -50,
            opacity: 0,
        },
        animate: {
            y: [0, -20, 0],
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.5,
                times: [0, 0.5, 1],
            },
        },
    };

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ opacity: { delay: 4.5, duration: 1 } }}
            className="absolute h-full w-full flex justify-center items-center bg-StartupBackground" // Use your navy blue background class
        >
            <div className="flex flex-col items-center">
                <motion.div
                    variants={bounceVariants}
                    initial="initial"
                    animate="animate"
                    className="h-24 w-24 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center mb-4 shadow-lg"
                >
                    <span className="text-white font-bold text-3xl">Sonita</span>
                </motion.div>

                <motion.h1
                    variants={bounceVariants}
                    initial="initial"
                    animate="animate"
                    className="text-gradient text-5xl font-bold"
                >
                    Welcome to My Personal Website
                </motion.h1>

                <motion.p
                    variants={bounceVariants}
                    initial="initial"
                    animate="animate"
                    className="mt-4 text-white text-lg text-center"
                >
                    Exploring creativity and technology
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Startup;
