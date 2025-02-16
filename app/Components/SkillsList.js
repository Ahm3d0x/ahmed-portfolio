"use client";
import { motion } from "framer-motion";

const skillsData = [
  {
    id: "prog-lang",
    title: "Programming Languages",
    icon: "💻",
    description: "Proficiency in modern programming languages.",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3", "TailwindCSS"],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "🎨",
    description: "Building modern, responsive user interfaces.",
    skills: ["React.js", "Next.js", "UI/UX Principles"],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "⚙️",
    description: "Developing robust and scalable server-side applications.",
    skills: ["Node.js", "RESTful APIs", "Authentication"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "💾",
    description: "Experience with SQL and NoSQL databases.",
    skills: ["MySQL", "SQL Server", "NoSQL", "JSON"],
  },
  {
    id: "desktop-dev",
    title: "Desktop Apps",
    icon: "🖥️",
    description: "Building cross-platform desktop applications.",
    skills: ["Electron.js (Node.js)"],
  },
  {
    id: "tools-tech",
    title: "Tools & Technologies",
    icon: "🔧",
    description: "Proficient in development tools & version control.",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    id: "lang",
    title: "Languages",
    icon: "🏳️",
    description: "Proficiency in various languages.",
    skills: ["Arabic", "English"],
  },
];

export default function SkillsList() {
  return (
    <section className="p-8 w-full mx-auto">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl text-center font-extrabold mb-12 bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent"
      >
        My Skills
      </motion.h1>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {skillsData.map((category) => (
          <motion.div
            key={category.id}
            id={`category-${category.id}`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="border border-teal-500 hover:text-orange-300  text-white hover:border-2 hover:border-green-500 bg-gradient-to-br from-teal-900 to-teal-700 rounded-xl p-6 transition-all duration-500 shadow-lg hover:shadow-xl"
          >
            {/* Card Header */}
            <div className="flex items-center gap-3">
              <span className="text-4xl">{category.icon}</span>
              <h3 className="text-xl   font-bold">{category.title}</h3>
            </div>
            <p className="text-gray-300  hover:text-orange-300 text-sm mt-2">{category.description}</p>

            {/* Skills List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  gap-3 mt-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={`${category.id}-skill-${index}`}
                  whileHover={{ scale: 1.08, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 hover:bg-teal-900  hover:text-orange-300 font-bold text-white text-sm  p-2 border-2 border-teal-700 rounded-lg text-center shadow-md transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
