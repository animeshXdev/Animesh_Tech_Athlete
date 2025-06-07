import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero: React.FC = () => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1508780709619-79562169bc64')",
      }}
      data-theme="dark"
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-content text-center text-neutral-content z-10"
      >
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-primary mb-4">
            <Typewriter
              options={{
                strings: ["Parkour Athlete", "Fitness Trainer", "React Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="mb-6 text-base-content text-gray-300">
            Unlock your potential — train harder, move better, build faster.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
