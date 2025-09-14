import React, { useEffect, useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Instead of fetching projects, we directly define them here 
    // since you want to customize them.
    const customProjects = [
      {
        id: 1,
        title: "Expense Tracker",
        description:
          "A responsive web-based money management tool that lets users log income and expenses, view real-time balance updates, and track financial data through an interactive UI. It also provides simple visual insights to help users manage their budgets effectively.",
        link: "https://chyuvasathwik.github.io/Expensive-Tracker/"
      },
      {
        id: 2,
        title: "Python Voice Assistant",
        description:
          "A Python-based voice assistant that recognizes user commands, performs tasks like opening applications, searching the web, and giving responses, showcasing speech recognition and automation skills.",
        link: "https://github.com/ChYuvaSathwik/PythonVoiceAssistantSathwik"
      },
      {
        id: 3,
        title: "Think-A-Number",
        description:
          "A fun and interactive guessing game built using modern web technologies. Players try to guess a randomly generated number, receiving feedback on each guess. Deployed on Vercel for smooth, responsive performance and accessible gameplay.",
        link: "https://think-a-number.vercel.app/"
      },
      {
        id: 4,
        title: "Sathwik Portfolio",
        description:
          "A personal portfolio website showcasing my skills, projects, and achievements. Built with React, Tailwind CSS, and Django, it highlights my journey as an aspiring Python developer and provides a central hub to explore my work.",
        link: "https://github.com/ChYuvaSathwik/SATHWIK__PORTFOLIO"
      }
    ];

    setProjects(customProjects);

    fetch("http://127.0.0.1:8000/api/skills/")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full bg-black bg-opacity-60 backdrop-blur-lg z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-pink-500">Sathwik</h1>
          <div className="space-x-6">
            <a href="#about" className="hover:text-pink-400">About</a>
            <a href="#projects" className="hover:text-pink-400">Projects</a>
            <a href="#skills" className="hover:text-pink-400">Skills</a>
            <a href="#education" className="hover:text-pink-400">Education</a>
            <a href="#certifications" className="hover:text-pink-400">Certifications</a>
            <a href="#contact" className="hover:text-pink-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero / About Section */}
      <header id="about" className="text-center py-40">
        <h1 className="text-6xl font-extrabold mb-4">
          Hello, I'm <span className="text-pink-500">Sathwik</span>{" "}
          <span className="text-green-400">👋</span>
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-6 text-gray-300">
          Aspiring <span className="text-green-400">Python Developer</span> with strong
          problem-solving skills and hands-on project experience. Proficient in{" "}
          <span className="text-pink-500">Python</span>,{" "}
          <span className="text-green-400">MySQL</span>, and{" "}
          <span className="text-pink-500">Web Technologies</span>. Passionate about
          applying software expertise to real-world challenges.
        </p>
        <div className="space-x-4">
          <a
            href="https://github.com/ChYuvaSathwik"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 rounded-lg text-lg shadow-md hover:from-pink-400 hover:to-purple-500 hover:scale-105 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 px-6 py-2 rounded-lg text-lg shadow-md hover:bg-pink-500 hover:scale-105 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://ik.imagekit.io/zpvisqc1b/Sathwik_Chinta_Python_Developer_Resume.pdf?updatedAt=1757793373814"
            download
            className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 rounded-lg text-lg shadow-md hover:from-pink-400 hover:to-purple-500 hover:scale-105 transition"
          >
            📄 Get Resume
          </a>
        </div>
      </header>

      {/* Projects */}
      <section id="projects" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-pink-400 mb-10">🚀 Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="text-2xl font-semibold text-green-400">{project.title}</h3>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">
                🔗 View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-green-400 mb-10">🛠 Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill.id} className="bg-gray-800 p-4 rounded-lg text-center shadow-md hover:scale-105 transition">
              {skill.name}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-pink-400 mb-6">🎓 Education</h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-green-400">B.Tech - KL University</h3>
          <p className="text-gray-300">CGPA: <span className="text-pink-500">8.91</span></p>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-green-400 mb-10">📜 Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-pink-400">Python Foundation</h3>
            <a href="https://ik.imagekit.io/zpvisqc1b/PYTHON_INFOSIS.pdf?updatedAt=1757793621254" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
              View Certificate
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-pink-400">AI/ML Level 1 Using Python</h3>
            <a href="https://ik.imagekit.io/zpvisqc1b/AIML%20USING%20PYTHON%20LEVEL%201.pdf?updatedAt=1757793888213" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
              View Certificate
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-pink-400">TCS Career Edge - Young Professional</h3>
            <a href="https://ik.imagekit.io/zpvisqc1b/TCS%20CERTIFICATE.pdf?updatedAt=1757794050950" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
              View Certificate
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-pink-400">SQL Certification</h3>
            <a href="https://ik.imagekit.io/zpvisqc1b/SQL-Certificate%20(1).pdf?updatedAt=1757797222409" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
              View Certificate
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-pink-400 mb-6">📩 Contact Me</h2>
        <form className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 max-w-xl mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-900 text-gray-200" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-900 text-gray-200" />
          <textarea placeholder="Your Message" className="w-full p-3 rounded bg-gray-900 text-gray-200"></textarea>
          <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-lg hover:from-pink-400 hover:to-purple-500 transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
