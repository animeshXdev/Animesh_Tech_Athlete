import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Dumbbell, Code2, Layers3 } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";

type Skill = {
  name: string;
  level: number;
  category: "Fitness" | "Code";
  icon: React.ReactNode;
};

const skills: Skill[] = [
  { name: "Parkour", level: 95, category: "Fitness", icon: <Dumbbell /> },
  { name: "Calisthenics", level: 90, category: "Fitness", icon: <Dumbbell /> },
  { name: "React", level: 85, category: "Code", icon: <Code2 /> },
  { name: "Tailwind", level: 80, category: "Code", icon: <Layers3 /> },
  { name: "TypeScript", level: 75, category: "Code", icon: <Code2 /> },
  { name: "Next.js", level: 75, category: "Code", icon: <Code2 /> },
];

const filterOptions = ["All", "Fitness", "Code"];

const RotatingCube: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0.5, 1, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#8b5cf6" />
    </mesh>
  );
};

const SkillsSection: React.FC = () => {
  const [selected, setSelected] = useState<string>("All");

  const filteredSkills =
    selected === "All" ? skills : skills.filter((s) => s.category === selected);

  return (
    <div
      className="min-h-screen bg-gray-900 py-20 px-6 text-gray-100"
      // Using a dark gray background with light gray text for clarity
    >
      <motion.h1
        className="text-5xl font-bold text-center text-indigo-400 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h1>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        {filterOptions.map((option) => (
          <motion.button
            key={option}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected(option)}
            className={`btn btn-sm md:btn-md ${
              selected === option ? "btn-indigo-500 text-white" : "btn-outline text-indigo-300"
            }`}
          >
            {option}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredSkills.map((skill, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 text-indigo-400 mb-4">
              <span className="text-2xl">{skill.icon}</span>
              <h2 className="text-xl font-semibold text-white">{skill.name}</h2>
            </div>

            <div className="w-full bg-gray-700 h-4 rounded">
              <motion.div
                className="bg-indigo-500 h-4 rounded"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
            </div>
            <p className="text-sm mt-2 text-gray-300">{skill.level}%</p>
          </motion.div>
        ))}
      </div>

      {/* 3D Rotating Cube */}
      <div className="mt-20 max-w-xl mx-auto h-64">
        <Canvas>
          <ambientLight intensity={0.7} />
          <directionalLight position={[1, 1, 1]} intensity={0.8} />
          <RotatingCube />
        </Canvas>
      </div>
    </div>
  );
};

export default SkillsSection;
