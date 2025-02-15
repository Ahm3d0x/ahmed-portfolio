"use client"; // ضروري لاستخدام Framer Motion في Next.js
import { motion } from "framer-motion";
import "../globals.css";
import { useScreenWidth } from "./ScreenWidthComponent";
import SkillCategory from "./SkillCategory";
import ProjectsGrid from "./ProjectsGrid";
export default function Home() {
  const width = useScreenWidth(); 
    return (
        <div className="grid grid-cols-2 HomeGrid gap-8 mt-16 py-2">
            {/* عنوان الصفحة */}
            <div className="col-span-2 mb-10 text-center">
                <h1 className="text-green-300 text-6xl font-bold py-2">
                    Hi, I'm
                </h1>
                <h2 className="text-green-500 text-4xl font-bold mt-2 py-2">
                    Ahmed Mohamed Attia
                </h2>
            </div>

            {/* معلومات عني */}
            <AboutMe />
            
            {/* صورتي */}
            <Photo />
            
            {/* المهارات */}
            {skillsData.map((category, index) => (
        <SkillCategory key={index} title={category.title} icon={category.icon} skills={category.skills} />
      ))}
            <ProjectsGrid />

        </div> 
    );
}

// ✅ تحسين مظهر الصورة مع تأثير أنيق عند التحريك
function Photo() {
    return (
      <motion.div
        animate={{ rotate: 0 }} // Default rotation state
        whileHover={{ rotateZ: [0, 2, -2, 0], scale: 1.2 }} // Subtle rotation on hover
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-60 mx-auto my-10 overflow-hidden rounded-lg flex justify-center items-center"
      >
        <img 
          src="/me2.jpg" 
          alt="My Photo" 
          className="w-full h-auto object-cover rounded-lg border-4 border-teal-700 hover:border-green-500"
        />
      </motion.div>
    );
  }

// ✅ تحسين قسم "عنّي" مع تنظيم أفضل للنص
function AboutMe() {
    return (
        <div className="bg-teal-800 ml-8 border-4 m-10  border-teal-700 hover:border-green-500 text-sky-100 hover:bg-teal-900 hover:scale-105 transition-all duration-600 hover:text-orange-300 rounded-lg p-6 shadow-lg max-w-lg mx-auto leading-relaxed">
            <h2 className="text-lg font-bold mb-3 text-orange-200">About Me</h2>
            <p className="text-md">
                💻 A passionate <span className="text-green-300 font-semibold">Full-Stack Developer </span> 
                 and <span className="text-green-300 font-semibold">Electronics & Communications Engineer</span>, 
                specializing in building modern, high-performance web applications.
            </p>
            <p className="mt-3">
                With expertise in both <span className="text-green-300">Frontend</span> and 
                <span className="text-green-300"> Backend</span> development, I create seamless 
                digital experiences and scalable systems.
            </p>
            <p className="mt-3">
                Additionally, I develop cross-platform desktop applications using 
                <span className="text-green-300"> Electron.js</span>, blending innovation with efficiency.
            </p>
        </div>
    );
}



const skillsData = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3", "TailwindCSS"],
  },
  {
    title: "Frontend Development",
    icon: "🖥️",
    skills: ["React.js", "Next.js", "Responsive Design & UI/UX Principles"],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: ["Node.js", "RESTful APIs & Authentication"],
  },
  {
    title: "Databases",
    icon: "💾",
    skills: ["SQL (MySQL, SQL Server)", "JSON & NoSQL Databases"],
  },
  {
    title: "Desktop Application Development",
    icon: "🖥️",
    skills: ["Electron.js (Building cross-platform desktop applications)"],
  },
  {
    title: "Tools & Technologies",
    icon: "🔧",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

