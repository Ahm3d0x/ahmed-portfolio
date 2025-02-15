"use client";
import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 2 }}
      transition={{ duration: 0.3 }}
      className="bg-lime-950  hover:text-orange-300 text-white   text-lg p-3 border-2 border-teal-500 hover:border-green-500 rounded-lg px-4 py-2 m-2 shadow-md hover:shadow-xl 
      flex items-center justify-center text-center min-h-[60px]"
    >
      <h4 className="text-md font-bold  ">{skill}</h4>
    </motion.div>
  );
};

export default SkillCard;
