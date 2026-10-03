import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

const projects = [
  {
    title: "Ticket Booking System",
    icon: "🎟️",
    description:
      "A full-stack event ticket booking platform with authentication, seat selection, booking history and admin management.",
    tech: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
    github:
      "https://github.com/anubhavsahu1232-cmd/ticket-booking-system",
    demo:
      "https://ticket-booking-system-vercel-8z51dzxkd-single-159e.vercel.app/",
  },
  {
    title: "Task Management System",
    icon: "✅",
    description:
      "A secure task management application with JWT authentication, task CRUD, filtering, priorities and responsive UI.",
    tech: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
    github:
      "https://github.com/anubhavsahu1232-cmd/task-management-system",
    demo:
      "https://task-management-frontend-fpzp.onrender.com",
  },
  {
    title: "AI Research Assistant",
    icon: "🤖",
    description:
      "An AI-assisted research paper management and academic writing platform with structured draft generation.",
    tech: ["Java", "Spring Boot", "React", "AI"],
    github:
      "https://github.com/anubhavsahu1232-cmd/research-assistant",
  },
];

const skills = {
  Languages: ["Java", "JavaScript", "SQL"],
  Backend: [
    "Spring Boot",
    "Spring Security",
    "REST API",
    "JPA / Hibernate",
    "JWT",
  ],
  Frontend: ["React", "HTML5", "CSS3"],
  Database: ["MySQL"],
  Tools: ["Git", "GitHub", "Maven", "VS Code"],
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const submitContact = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setStatus("Message sent successfully! 🚀");
    } catch (error) {
      setStatus(
        "Unable to send message. Please try again later."
      );
    }
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="nav-inner">

          <button
            className="brand"
            onClick={() => scrollTo("home")}
          >
            <span>Anubhav</span> Sahu

            <small>
              Java Full Stack Developer
            </small>
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <nav
            className={
              menuOpen
                ? "nav-links open"
                : "nav-links"
            }
          >
            <button onClick={() => scrollTo("home")}>
              Home
            </button>

            <button onClick={() => scrollTo("about")}>
              About
            </button>

            <button onClick={() => scrollTo("skills")}>
              Skills
            </button>

            <button onClick={() => scrollTo("projects")}>
              Projects
            </button>

            <button onClick={() => scrollTo("education")}>
              Education
            </button>

            <button onClick={() => scrollTo("leetcode")}>
              LeetCode
            </button>

            <button onClick={() => scrollTo("contact")}>
              Contact
            </button>
          </nav>

          <a
            className="resume-button"
            href="/assets/resume.pdf"
            download
          >
            ↓ Download Resume
          </a>

        </div>
      </header>


      {/* ================= HERO ================= */}

      <main>

        <section id="home" className="hero section">

          <div className="hero-copy">

            <div className="eyebrow">
              👋 Hi, I'm
            </div>

            <h1>
              Anubhav <span>Sahu</span>
            </h1>

            <h2>
              Java Full Stack Developer
            </h2>

            <p>
              I build scalable and secure web applications
              using Java, Spring Boot, React and MySQL.
              I enjoy solving real-world problems and
              creating efficient solutions.
            </p>

            <div className="hero-actions">

              <button
                className="primary-btn"
                onClick={() => scrollTo("projects")}
              >
                View Projects →
              </button>

              <a
                className="secondary-btn"
                href="/assets/resume.pdf"
                download
              >
                Download Resume ↓
              </a>

            </div>

            <div className="socials">

              <a
                href="https://github.com/anubhavsahu1232-cmd"
                target="_blank"
                rel="noreferrer"
              >
                ◉ GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/anubhav-sahu-92599222b/"
                target="_blank"
                rel="noreferrer"
              >
                in LinkedIn
              </a>

              <a
                href="https://leetcode.com/"
                target="_blank"
                rel="noreferrer"
              >
                ⌁ LeetCode
              </a>

              <a href="#contact">
                ✉ Email
              </a>

            </div>

          </div>


          {/* HERO PHOTO */}

          <div className="hero-visual">

            <div className="orb"></div>

            <img
              className="avatar-photo"
              src="/assets/profile.jpg"
              alt="Anubhav Sahu"
            />

            <div className="building-card">

              <strong>
                Currently Building...
              </strong>

              <span>
                ✓ Full Stack Projects
              </span>

              <span>
                ✓ DSA & Problem Solving
              </span>

              <span>
                ✓ Learning New Technologies
              </span>

            </div>

            <div className="scribble">
              Keep
              <br />
              Learning
              <br />
              Keep
              <br />
              Building 🚀
            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section id="about" className="section">

          <div className="about-card">

            <div className="about-art">
              {"</>"}
            </div>

            <div>

              <div className="section-title">
                <span>◈</span>
                About Me
              </div>

              <p>
                I'm an MCA student and Java Full Stack
                Developer focused on building real-world
                web applications using Java, Spring Boot,
                React and MySQL.
              </p>

              <p>
                I enjoy developing secure REST APIs,
                responsive user interfaces and continuously
                improving my problem-solving and DSA skills.
              </p>

            </div>

            <div className="facts">

              <div>
                <b>♙ Name:</b>
                Anubhav Sahu
              </div>

              <div>
                <b>🎓 Education:</b>
                MCA
              </div>

              <div>
                <b>💻 Role:</b>
                Java Full Stack Developer
              </div>

              <div>
                <b>⌁ Interests:</b>
                Web Development, DSA
              </div>

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section id="skills" className="section">

          <div className="section-heading">

            <div className="section-title">
              <span>⚙</span>
              Technical Skills
            </div>

            <p>
              Technologies I work with
            </p>

          </div>


          <div className="skill-grid">

            {Object.entries(skills).map(
              ([group, items]) => (

                <div
                  className="skill-card"
                  key={group}
                >

                  <div className="skill-icon">
                    ✦
                  </div>

                  <h3>
                    {group}
                  </h3>

                  {items.map((item) => (

                    <span key={item}>
                      {item}
                    </span>

                  ))}

                </div>

              )
            )}

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section id="projects" className="section">

          <div className="section-heading">

            <div className="section-title">
              <span>▣</span>
              Featured Projects
            </div>

            <p>
              Some of my recent work
            </p>

          </div>


          <div className="project-grid">

            {projects.map((project) => (

              <article
                className="project-card"
                key={project.title}
              >

                <div className="project-preview">

                  <span>
                    {project.icon}
                  </span>

                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>


                <div className="tags">

                  {project.tech.map(
                    (tag) => (

                      <span key={tag}>
                        {tag}
                      </span>

                    )
                  )}

                </div>


                <div className="project-actions">

                  {project.demo && (

                    <a
                      className="primary-btn small"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      🚀 Live Demo
                    </a>

                  )}

                  <a
                    className="secondary-btn small"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    💻 GitHub
                  </a>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* ================= EDUCATION + LEETCODE ================= */}

        <section
          id="education"
          className="section two-column"
        >

          <div>

            <div className="section-title">
              <span>🎓</span>
              Education
            </div>


            <div className="timeline">

              <div className="timeline-item">

                <span className="dot"></span>

                <div>

                  <h3>
                    Master of Computer Applications
                    (MCA)
                  </h3>

                  <p>
                    MCA Student
                  </p>

                  <small>
                    Current
                  </small>

                </div>

              </div>


              <div className="timeline-item">

                <span className="dot"></span>

                <div>

                  <h3>
                    Computer Applications
                  </h3>

                  <p>
                    Academic foundation in programming,
                    software development and computer science.
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* LEETCODE */}

          <div id="leetcode">

            <div className="section-title">
              <span>⌁</span>
              Problem Solving
            </div>

            <p className="muted">
              Building DSA fundamentals and solving
              problems consistently.
            </p>


            <div className="leetcode-card">

              <div>

                <h3>
                  LeetCode Profile
                </h3>

                <p>
                  Practice DSA and improve
                  problem-solving skills.
                </p>

              </div>

              <a
                href="https://leetcode.com/"
                target="_blank"
                rel="noreferrer"
              >
                Open LeetCode ↗
              </a>

            </div>

          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="section"
        >

          <div className="section-title">
            <span>✉</span>
            Get In Touch
          </div>

          <p className="muted">
            Have a project in mind or want to connect?
            Feel free to reach out!
          </p>


          <div className="contact-grid">


            {/* CONTACT FORM */}

            <form
              className="contact-form"
              onSubmit={submitContact}
            >

              <div className="form-row">

                <input
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                />

                <input
                  required
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                />

              </div>


              <textarea
                required
                placeholder="Your Message"
                rows="6"
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
              />


              <button
                className="primary-btn"
                type="submit"
              >
                ➤ Send Message
              </button>


              {status && (

                <div className="form-status">
                  {status}
                </div>

              )}

            </form>


            {/* CONTACT LINKS */}

            <div className="contact-info">

              <a
                href="https://www.linkedin.com/in/anubhav-sahu-92599222b/"
                target="_blank"
                rel="noreferrer"
              >

                <b>
                  LinkedIn
                </b>

                <span>
                  anubhav-sahu-92599222b
                </span>

              </a>


              <a
                href="https://github.com/anubhavsahu1232-cmd"
                target="_blank"
                rel="noreferrer"
              >

                <b>
                  GitHub
                </b>

                <span>
                  anubhavsahu1232-cmd
                </span>

              </a>


              <a
                href="https://leetcode.com/"
                target="_blank"
                rel="noreferrer"
              >

                <b>
                  LeetCode
                </b>

                <span>
                  Problem Solving Profile
                </span>

              </a>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <div>

          <strong>
            Anubhav <span>Sahu</span>
          </strong>

          <small>
            Java Full Stack Developer
          </small>

        </div>


        <div>
          © 2026 Anubhav Sahu. All rights reserved.
        </div>


        <div className="footer-links">

          <button onClick={() => scrollTo("home")}>
            Home
          </button>

          <button onClick={() => scrollTo("projects")}>
            Projects
          </button>

          <button onClick={() => scrollTo("contact")}>
            Contact
          </button>

        </div>

      </footer>

    </div>
  );
}

export default App;