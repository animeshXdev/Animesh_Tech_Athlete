import React, { useRef } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import backgroundImg from "../assets/pic2mod.png"


const Home: React.FC = () => {
  // Ref for About section
  const aboutRef = useRef<HTMLDivElement>(null);

  // Scroll function
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full" data-theme="dark">
      {/* Hero Section */}
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-75"></div>

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
                  strings: ["Parkour Athlete", "Fitness Trainer", "Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <p className="mb-6 text-base-content text-gray-300">
              Unlock your potential — train harder, move better, build smarter.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
              onClick={scrollToAbout}
            >
              Explore More
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="py-24 px-6 bg-base-200 text-center"
      >
        <motion.h2
          className="text-4xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          I’m a passionate athlete and developer committed to mastering both physical and digital worlds.
          My journey spans from conquering urban landscapes with parkour to designing powerful, responsive
          web experiences. With a focus on discipline, design, and innovation — I build momentum in every move.
        </motion.div>
        <button className="btn btn-outline btn-primary mt-6" onClick={() => window.location.href = "/about"}>
          Dive Deeper
        </button>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 bg-base-100 text-center">
        <motion.h2
          className="text-4xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Toolbox
        </motion.h2>

        <motion.p
          className="text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          I blend frontend mastery, motion design, and fitness coaching to deliver results that move fast
          and look smooth — from code to calisthenics.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-gray-300">
          {["React", "TypeScript", "Tailwind CSS", "Framer Motion", "JavaScript", "Node.js", "Fitness Coaching", "Parkour Training"].map(
            (skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.08 }}
                className="bg-base-300 p-5 rounded-2xl shadow-lg text-lg font-medium"
              >
                {skill}
              </motion.div>
            )
          )}
        </div>
        <button className="btn btn-outline btn-primary mt-10" onClick={() => window.location.href = "/skills"}>
          View Full Stack
        </button>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-base-200 text-center">
        <motion.h2
          className="text-4xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Collaborate
        </motion.h2>
        <motion.p
          className="text-gray-300 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Whether you're building a brand, launching an app, or leveling up your body — I’d love to help
          you achieve your next breakthrough. Let’s talk goals and growth.
        </motion.p>
        <button className="btn btn-primary" onClick={() => window.location.href = "/contact"}>
          Contact Me Now
        </button>
        
      </section>
      {/* Footer */}
      
    </div>
  );
};

export default Home;
