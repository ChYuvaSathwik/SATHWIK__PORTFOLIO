import React, { useEffect, useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/projects/")
      .then((res) => res.json())
      .then((data) => setProjects(data));

    fetch("http://127.0.0.1:8000/api/skills/")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="text-center py-16 bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">Sathwik</h1>
        <p className="text-xl mb-6">Full-Stack Developer | Python | Django | React</p>
        <div className="space-x-4">
          <a
            href="https://github.com/ChYuvaSathwik"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            LinkedIn
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            🚀 Projects
          </h2>
          {projects.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading projects...</p>
          )}
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            🛠 Skills
          </h2>
          {skills.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-4 py-2 bg-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-600 transition"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          ) : (
            <p>Loading skills...</p>
          )}
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">📬 Contact Me</h2>
          <p className="mb-4">
            I’d love to connect! Feel free to reach out via email or LinkedIn.
          </p>
          <a
            href="mailto:your_email@example.com"
            className="bg-green-600 px-5 py-2 rounded-lg hover:bg-green-500 transition"
          >
            Send Email
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-6 mt-12">
        <p>© {new Date().getFullYear()} Sathwik | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
