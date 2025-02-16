"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaImage } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-teal-900 to-teal-700 border-teal-700 rounded-xl shadow-lg  hover:border-2 hover:border-green-500 hover:shadow-2xl transition-all p-5"
    >
      {/* Project Image (with fallback if no image available) */}
      <div className="overflow-hidden hover:border-2 hover:border-green-500 rounded-lg">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-60 object-cover rounded-lg  transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="w-full h-64 flex items-center justify-center bg-teal-800 text-teal-300 rounded-lg">
            <FaImage size={40} />
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className="mt-4 text-white">
        <h2 className="text-2xl hover:text-orange-300 font-bold">{project.title}</h2>
        <p className="text-gray-300 hover:text-orange-300 text-sm mt-2">{project.description}</p>

        {/* Technologies */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-teal-800 hover:text-orange-300 text-teal-200 px-3 py-1 rounded-md text-sm">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-4 flex gap-4">
          <a
            href={project.demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 px-4 py-2 hover:text-orange-300 rounded-md text-white hover:bg-green-700 transition"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href={project.code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 hover:text-orange-300 rounded-md text-white hover:bg-gray-900 transition"
          >
            <FaGithub /> Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
