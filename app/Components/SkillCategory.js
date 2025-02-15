"use client";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const SkillCategory = ({ title, icon, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="border-4 border-teal-600  hover:text-orange-300  text-white hover:border-green-500 rounded-xl p-6 ml-8 hover:ml-10 hover:bg-teal-950 transition-all duration-700 m-4 bg-teal-900 shadow-lg  hover:shadow-2xl"
    >
      <h3 className="text-xl font-bold flex items-center ">
        <span className="mr-2 text-2xl">{icon}</span> {title}
      </h3>
      <div className="grid grid-cols-1 justify-center  sm:grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;
