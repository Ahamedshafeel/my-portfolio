import { useState } from "react";
import "./App.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaDownload,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "Automated Code Evaluation System",
    short:
      "Full-stack platform for code submission, automatic evaluation, result visualization, and performance tracking.",
    tech: ["React", "Spring Boot", "Hibernate", "SQL"],
    overview:
      "The Automated Code Evaluation System is designed to evaluate programming solutions submitted by users. It reduces manual checking work by automatically validating code output, tracking performance, and showing clear results.",
    problem:
      "Manually checking coding assignments takes more time and may not always be consistent. This project solves that problem by creating an automated evaluation workflow.",
    features: [
      "User registration and login",
      "Code submission module",
      "Automatic result evaluation",
      "Performance tracking dashboard",
      "Secure database handling",
      "Clean result visualization",
    ],
    contribution:
      "I worked on frontend pages, backend API integration, database operations, authentication flow, and project workflow design.",
    future: [
      "Multi-language code support",
      "AI-based code review",
      "Plagiarism detection",
      "Contest mode",
    ],
  },
  {
    number: "02",
    title: "Study Flow",
    short:
      "AI-powered study planner with task management, reminders, progress tracking, and learning modules.",
    tech: ["React", "Spring Boot", "Hibernate", "SQL"],
    overview:
      "Study Flow is a smart digital study planner that helps students organize subjects, tasks, notes, reminders, and progress in one place.",
    problem:
      "Students often struggle to manage subjects, deadlines, and study time properly. Study Flow helps them plan and track their learning more effectively.",
    features: [
      "Task management",
      "Subject management",
      "Study timetable",
      "Reminder system",
      "Progress dashboard",
      "Authentication",
    ],
    contribution:
      "I developed the UI, connected backend APIs, worked on task and subject modules, and improved the dashboard experience.",
    future: [
      "AI study assistant",
      "PDF-based schedule generation",
      "Performance prediction",
      "Mobile app version",
    ],
  },
  {
    number: "03",
    title: "Modern City Men's Wear",
    short:
      "Full-stack e-commerce website with OTP verification, cart, address management, and admin dashboard.",
    tech: ["React", "Spring Boot", "MySQL", "REST API"],
    overview:
      "Modern City Men's Wear is an e-commerce web application for men's fashion. It allows users to browse products, manage cart items, choose addresses, and place orders.",
    problem:
      "Small clothing shops need a simple online platform to display products and manage customer orders. This project provides a complete digital shopping experience.",
    features: [
      "Signup and OTP verification",
      "Login system",
      "Product listing by category",
      "Cart management",
      "Address management",
      "Admin product management",
    ],
    contribution:
      "I built the frontend pages, Spring Boot backend APIs, MySQL database connection, cart logic, authentication flow, and admin product features.",
    future: [
      "Online payment gateway",
      "Order tracking",
      "Product reviews",
      "Recommendation system",
    ],
  },
];

const skills = [
  { name: "React.js", level: 70 },
  { name: "JavaScript", level: 80 },
  { name: "HTML5", level: 90},
  { name: "CSS3", level: 85 },
  { name: "Java", level: 95 },
  { name: "Spring Boot", level: 85 },
  { name: "Hibernate", level: 80 },
  { name: "JDBC", level: 90 },
  { name: "MySQL", level: 90 },
  { name: "SQL", level: 88 },
  { name: "REST API", level: 80 },
  { name: "Git & GitHub", level: 72 },
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2 className="logo">
          Ahamed <span>Shafeel</span>
        </h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero" id="home">
        <div className="hero-left">
          <p className="small-title">FULL STACK DEVELOPER</p>

          <h1>
            Hi, I'm <br />
            <span>Ahamed Shafeel M</span>
          </h1>

          <p className="hero-desc">
            Full Stack Developer Fresher with hands-on experience in React,
            Spring Boot, Hibernate, SQL, JavaScript, and REST APIs.
          </p>

          <div className="hero-buttons">
 <a
  href={`${import.meta.env.BASE_URL}resume.pdf`}
  download
  className="btn primary"
>
  <FaDownload /> Download Resume
</a>

  <a href="#projects" className="btn outline">
    View My Work <FaArrowRight />
  </a>
</div>
          <div className="socials">
            <a href="https://github.com/Ahamedshafeel" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ahamed-shafeel-312b272a1" target="_blank">
              <FaLinkedin />
            </a>
            <a href="mailto:ahamedshafeel007@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-ring">
            <img
  src={`${import.meta.env.BASE_URL}profile.png`}
  alt="Ahamed Shafeel"
/>
</div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-heading">
          <span></span>
          <h2>About Me</h2>
        </div>

        <p>
          <p>
  I'm Ahamed Shafeel, a Full Stack Developer with expertise in Java,Spring Boot, React.js, MySQL, and REST API development. I enjoy 
    building scalable web applications and transforming ideas into functional digital
  products. My experience includes developing full-stack solutions such as
  an Automated Code Evaluation System, Study Flow, and Modern City Men's
  Wear. I am passionate about clean code, problem-solving, and continuous
  learning, and I'm currently seeking opportunities to begin my professional
  software development career.
</p>
        </p>

        <div className="info-grid">
          <div className="info-card">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>ahamedshafeel007@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <p>+91 9362282557</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <p>Chennai, Tamil Nadu</p>
            </div>
          </div>

          <div className="info-card">
            <FaGithub />
            <div>
              <h4>Github</h4>
              <p>github.com/Ahamedshafeel</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-heading">
          <span></span>
          <h2>Experience</h2>
        </div>

        <div className="experience-grid">
          <div className="glass-card">
            <h3>Full Stack Developer Intern</h3>
            <h4>Besant Technologies</h4>
            <p>Feb 2026 - Present • Chennai</p>
            <ul>
              <li>Developed full-stack web application features.</li>
              <li>Integrated frontend with backend APIs.</li>
              <li>Worked with REST API and database operations.</li>
            </ul>
          </div>

          <div className="glass-card">
            <h3>React JS Developer Intern</h3>
            <h4>The Skybrisk</h4>
            <p>Dec 2025 - Feb 2026 • Online</p>
            <ul>
              <li>Developed React frontend features.</li>
              <li>Integrated APIs and improved UI interaction.</li>
              <li>Debugged UI issues and optimized performance.</li>
            </ul>
          </div>

          <div className="glass-card">
            <h3>Front End Developer Intern</h3>
            <h4>devElet</h4>
            <p>Jun 2025 - Jul 2025 • Hyderabad/Online</p>
            <ul>
              <li>Built responsive frontend interfaces.</li>
              <li>Used React, JavaScript, HTML and CSS.</li>
            </ul>
          </div>
        </div>
      </section>

    
      <section className="section" id="skills">
  <div className="section-heading">
    <span></span>
    <h2>Skills</h2>
  </div>

  <div className="skills-grid">
    {skills.map((skill) => (
      <div className="skill" key={skill.name}>
        <div className="skill-header">
          <p>{skill.name}</p>
          <span>{skill.level}%</span>
        </div>

        <div className="bar">
          <div
            className="progress"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    ))}
  </div>
</section> 

      <section className="section" id="projects">
        <div className="section-heading">
          <span></span>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              className="project-card"
              key={project.number}
              onClick={() => setSelectedProject(project)}
            >
              <span className="number">{project.number}</span>
              <h3>{project.title}</h3>
              <p>{project.short}</p>

              <div className="tags">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <button className="read-more">
                View Details <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="section education">
        <div className="section-heading">
          <span></span>
          <h2>Education</h2>
        </div>

        <div className="education-card">
          <h3>B.E Computer Science and Engineering</h3>
          <p>Government College of Engineering, Bargur</p>
          <span>2022 - 2026 • CGPA: 8.2</span>
        </div>

        <div className="education-card">
          <h3>Higher Secondary Education</h3>
          <p>St. Vincent Pallotti Matriculation School</p>
          <span>2020 - 2022 • 87%</span>
        </div>
      </section>

      <section className="contact section" id="contact">
        <h2>Let's Connect</h2>
        <p>
          I am always open to discussing new opportunities and interesting
          projects.
        </p>

        <a href="mailto:ahamedshafeel007@gmail.com" className="btn primary">
          <FaEnvelope /> Contact Me
        </a>
      </section>

      <footer>
        <p>© 2026 Ahamed Shafeel M. All Rights Reserved.</p>
      </footer>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes />
            </button>

            <span className="modal-number">{selectedProject.number}</span>
            <h2>{selectedProject.title}</h2>

            <h3>Overview</h3>
            <p>{selectedProject.overview}</p>

            <h3>Problem Statement</h3>
            <p>{selectedProject.problem}</p>

            <h3>Key Features</h3>
            <ul>
              {selectedProject.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <h3>Technologies Used</h3>
            <div className="modal-tags">
              {selectedProject.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <h3>My Contribution</h3>
            <p>{selectedProject.contribution}</p>

            <h3>Future Enhancements</h3>
            <ul>
              {selectedProject.future.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;