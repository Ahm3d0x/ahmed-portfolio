

import ProjectCard from "./ProjectCard";
let projectsData = [
    {
      "title": "Tic-Tac-Toe Game with AI",
      "type": "Game",
      "description": "An interactive Tic-Tac-Toe game where you can challenge an AI opponent with a scoreboard to track wins and ties.",
      "technologies": ["HTML5", "CSS3", "JavaScript", "AI Algorithms"],
      "image": "/Tic-Tac-Toe-game.jpg",
      "demo_link": "https://ahm3d0x.github.io/-Tic-Tac-Toe-game/",
      "code_link": "https://github.com/Ahm3d0x/-Tic-Tac-Toe-game"
    },
    {
      "title": "Quran and Hadith Viewer",
      "type": "Religious Web App",
      "description": "A simple and elegant web app to explore Quranic chapters and Hadith collections with a dark mode feature.",
      "technologies": ["HTML5", "CSS3", "JavaScript"],
      "image": "/Quran and Hadith Viewer.jpg",
      "demo_link": "https://ahm3d0x.github.io/A-Quran-and-Hadith-Viewer-built-with-HTML-CSS-and-JavaScript./",
      "code_link": "https://github.com/Ahm3d0x/A-Quran-and-Hadith-Viewer-built-with-HTML-CSS-and-JavaScript."
    },
    {
      "title": "Nitro Voice Assistant",
      "type": "AI/Voice Assistant",
      "description": "A voice assistant that responds to commands such as checking time, weather, playing music, and searching on Google.",
      "technologies": ["HTML", "CSS", "JavaScript", "OpenWeatherMap API" , "Google Custom Search API" , "open-Ai API" , "Wikipedia API"],
      "image": "/Nitro Voice Assistant.jpg",
      "demo_link": "https://ahm3d0x.github.io/Voice-Assistant-/",
      "code_link": "https://github.com/Ahm3d0x/Voice-Assistant-"
    },
    {
      "title": "Quran Audio Player",
      "type": "Media Player",
      "description": "A web-based Quran audio player featuring multiple famous reciters and an easy-to-use interface.",
      "technologies": ["HTML5", "CSS3", "JavaScript"],
      "image": "/Quran Audio Player.png",
      "demo_link": "https://ahm3d0x.github.io/-Quran-audio-player-built-with-HTML-CSS-and-JavaScript.-/",
      "code_link": "https://github.com/Ahm3d0x/-Quran-audio-player-built-with-HTML-CSS-and-JavaScript.-"
    },
    {
      "title": "Task List Application",
      "type": "Productivity App",
      "description": "A simple To-Do List web app that allows users to add, complete, and delete tasks with persistent storage.",
      "technologies": ["HTML5", "CSS3", "JavaScript", "Local Storage" , "JSON"],
      "image": "/Task List.png",
      "demo_link": "https://ahm3d0x.github.io/Task-List-Application-js-css-html/",
      "code_link": "https://github.com/Ahm3d0x/Task-List-Application-js-css-html"
    },
    {
      "title": "Mini Language Translator",
      "type": "Translation Tool",
      "description": "A language translator web app that allows users to select and translate text between multiple languages.",
      "technologies": ["HTML5", "CSS3", "JavaScript" , "Google Translate API"],
      "image": "/Mini Language Translator.jpeg",
      "demo_link": "https://ahm3d0x.github.io/-language-translator-built-using-HTML-CSS-and-JavaScript./",
      "code_link": "https://github.com/Ahm3d0x/-language-translator-built-using-HTML-CSS-and-JavaScript."
    },
    {
      "title": "SPARK AI Chatbot",
      "type": "AI Chatbot",
      "description": "An AI chatbot with a Python backend and JavaScript frontend, supporting both web and desktop versions.",
      "technologies": ["HTML", "CSS", "JavaScript", "Flask", "Electron" , "Python","node JS"],
      "image": "/SPARK AI Chatbot.jpg",
      "demo_link": "https://ahm3d0x.github.io/Spark/",
      "code_link": "https://github.com/Ahm3d0x/Spark"
    },
    {
      "title": "Like App (Social Media Platform)",
      "type": "Social Media App",
      "description": "A mini social networking platform where users can register, post content, like, and comment on posts.",
      "technologies": ["HTML", "CSS", "JavaScript"],
      "image": "/Like App.jpg",
      "demo_link": "https://ahm3d0x.github.io/social-media-app/",
      "code_link": "https://github.com/Ahm3d0x/social-media-app"
    },
    {
      "title": "Exchange Rate Calculator",
      "type": "Finance Tool",
      "description": "A simple web app that converts currency values based on real-time exchange rates.",
      "technologies": ["HTML", "CSS", "JavaScript" , "Exchange Rate API"],
      "image": "/Exchange Rate Calculator.jpg",
      "demo_link": "https://ahm3d0x.github.io/Exchange-Rate-Calculator/",
      "code_link": "https://github.com/Ahm3d0x/Exchange-Rate-Calculator/tree/main"
    },
    {
      "title": "Simple Calculator",
      "type": "Utility App",
      "description": "A simple calculator supporting basic arithmetic operations with keyboard shortcuts.",
      "technologies": ["HTML", "CSS", "JavaScript"],
      "image": "/Simple Calculator.jpg",
      "demo_link": "https://ahm3d0x.github.io/Simple-Calculator/",
      "code_link": "https://github.com/Ahm3d0x/Simple-Calculator"
    }
  ]
  

  export default function ProjectsGrid() {
    return (
      <section className="py-12 col-span-2 bg-teal-950 min-h-screen ">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl text-center text-white font-bold mb-10">My Projects</h1>
  
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    );
  }