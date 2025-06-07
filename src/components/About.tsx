import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import profilePic from "../assets/animesh-removebg-preview.jpg"

const StatCard = ({ number, label }: { number: number; label: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, number, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [count, number]);

  return (
    <motion.div
      className="p-6 text-center bg-base-300 rounded-xl shadow hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-3xl font-bold text-primary mb-2">
        <motion.span>{rounded}</motion.span>
        {label === "Energy & Passion" && "+"}
      </h3>
      <p className="text-gray-400">{label}</p>
    </motion.div>
  );
};

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-200 py-20 px-6 text-neutral" data-theme="dark">
      {/* Header */}
      <motion.h1
        className="text-5xl font-bold text-center text-primary mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>

      {/* Profile Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto">
        <motion.img
          src={profilePic}
          alt="Animesh profile"
          className="w-72 h-72 object-cover rounded-full border-4 border-primary shadow-lg"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="flex-1 space-y-6 text-lg text-gray-300"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Hi, I’m <span className="text-primary font-semibold">Animesh</span> — a passionate Parkour athlete,
            fitness trainer, and front-end developer. I combine physical discipline with digital creativity to help
            people move better — both online and offline.
          </p>

          <p>
            Whether I’m scaling buildings or building UIs, I believe in balance, agility, and precision. Every
            jump, every line of code, every session — it’s all about momentum, flow, and pushing limits.
          </p>

          <p>
            My mission? To inspire others through action and aesthetics. If you’re looking for someone who can leap
            across rooftops and design pixel-perfect interfaces — you’re in the right place.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline btn-primary"
              onClick={() => navigate("/skills")}
            >
              View My Skills
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <StatCard number={10} label="Years of Movement" />
        <StatCard number={20} label="Web Projects" />
        <StatCard number={500} label="Training Sessions" />
        <StatCard number={999} label="Energy & Passion" />
      </motion.div>
    </div>
  );
};

export default About;
