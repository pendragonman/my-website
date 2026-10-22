import { useState } from "react";
import {
  profile,
  highlights,
  stats,
  proficiency,
  experience,
  projects,
  education,
  skills,
  certifications,
} from "./data";
import Reveal from "./Reveal";
import useTypewriter from "./useTypewriter";
import portrait from "./assets/portrait.jpg";
import "./App.css";

const icons = {
  pipeline: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M6 9v3a3 3 0 0 0 3 3h6" strokeLinecap="round" />
    </svg>
  ),
  dashboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="12" width="4" height="8" rx="1" />
      <rect x="10" y="7" width="4" height="13" rx="1" />
      <rect x="17" y="3" width="4" height="17" rx="1" />
    </svg>
  ),
  trend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 17l6-6 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 7h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};
const iconKeys = ["pipeline", "dashboard", "trend"];

function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLinkedin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" strokeLinecap="round" />
      <circle cx="7.5" cy="7.2" r="1.1" fill="currentColor" stroke="none" />
      <path
        d="M11.5 16.5v-3.6c0-1.3.9-2.4 2.2-2.4s2.1 1 2.1 2.4v3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="11.5" y1="10.5" x2="11.5" y2="16.5" strokeLinecap="round" />
    </svg>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Experience", "Projects", "Skills", "Contact"];

  return (
    <header className="nav">
      <a className="nav-brand" href="#top">
        <span className="nav-brand-mark" aria-hidden="true"></span>
        A. Owoseni
      </a>

      <nav className="nav-links-desktop">
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`}>
            {l}
          </a>
        ))}
      </nav>

      <button
        className={`nav-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-dropdown ${open ? "nav-dropdown-open" : ""}`}>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {l}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");
  const typedRole = useTypewriter(profile.roles);

  return (
    <section id="top" className="hero">
      <div className="hero-blob hero-blob-1" aria-hidden="true"></div>
      <div className="hero-blob hero-blob-2" aria-hidden="true"></div>

      <div className="hero-content">
        <p className="eyebrow">{profile.location}</p>
        <h1>
          <span className="hero-name-line">{firstName}</span>
          <span className="hero-name-line hero-name-accent">{lastName}</span>
        </h1>
        <h2 aria-hidden="true">
          {typedRole}
          <span className="typewriter-cursor"></span>
        </h2>
        <span className="sr-only">{profile.title}</span>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-keywords">
          {profile.keywords.map((k) => (
            <span key={k} className="chip">
              {k}
            </span>
          ))}
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            Get in touch
          </a>
          <a className="btn btn-secondary" href="#projects">
            View projects
          </a>
          <a
            className="btn btn-secondary"
            href={profile.resumeUrl}
            download
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero-photo">
        <div className="hero-photo-blob" aria-hidden="true"></div>
        <img src={portrait} alt={profile.name} />
        <span className="hero-badge">Open to internships</span>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="section highlights-section">
      <div className="highlights-grid">
        {highlights.map((h, i) => (
          <Reveal
            as="div"
            className="highlight-card"
            key={h.title}
            delay={i * 100}
          >
            <div className="highlight-icon">{icons[iconKeys[i]]}</div>
            <h3>{h.title}</h3>
            <p>{h.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="section stats-section">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <Reveal
            as="div"
            className="stat-card"
            key={s.label}
            delay={(i % 4) * 80}
          >
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <p className="section-eyebrow">01 · ABOUT</p>
      <Reveal as="h2" className="section-title">
        About
      </Reveal>
      <Reveal as="div" className="about-grid" delay={100}>
        <p>{profile.summary}</p>
        <div className="about-facts">
          <div>
            <strong>Location</strong>
            <span>{profile.location}</span>
          </div>
          <div>
            <strong>Education</strong>
            <span>{education.degree}</span>
            <span className="muted">
              {education.school} · {education.period}
            </span>
          </div>
          <div>
            <strong>Coursework</strong>
            <span>{education.courses}</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-eyebrow">02 · EXPERIENCE</p>
      <Reveal as="h2" className="section-title">
        Experience
      </Reveal>
      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal
            as="div"
            className="timeline-item"
            key={job.role + job.org}
            delay={i * 100}
          >
            <div className="timeline-header">
              <h3>{job.role}</h3>
              <span className="timeline-period">{job.period}</span>
            </div>
            <p className="timeline-org">{job.org}</p>
            <ul>
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-eyebrow">03 · PROJECTS</p>
      <Reveal as="h2" className="section-title">
        Projects
      </Reveal>
      <div className="cards">
        {projects.map((p, i) => (
          <Reveal as="article" className="card" key={p.name} delay={(i % 2) * 100}>
            <div className="card-header">
              <h3>{p.name}</h3>
              <span className="timeline-period">{p.year}</span>
            </div>
            <p className="card-stack">{p.stack}</p>
            <ul>
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Proficiency() {
  return (
    <div className="proficiency">
      {proficiency.map((p, i) => (
        <Reveal
          as="div"
          className="proficiency-row"
          key={p.skill}
          delay={i * 80}
          style={{ "--level": `${p.level}%` }}
        >
          <div className="proficiency-label">
            <span>{p.skill}</span>
            <span className="proficiency-percent">{p.level}%</span>
          </div>
          <div className="proficiency-track">
            <div className="proficiency-fill"></div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-eyebrow">04 · SKILLS</p>
      <Reveal as="h2" className="section-title">
        Skills
      </Reveal>
      <h3 className="skills-subtitle">Core Proficiency</h3>
      <Proficiency />
      <h3 className="skills-subtitle skills-subtitle-spaced">
        Full Skill Set
      </h3>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], i) => (
          <Reveal as="div" className="skill-group" key={category} delay={(i % 2) * 100}>
            <h3>{category}</h3>
            <div className="hero-keywords">
              {items.map((item) => (
                <span key={item} className="chip chip-muted">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="section">
      <p className="section-eyebrow">05 · CERTIFICATIONS</p>
      <Reveal as="h2" className="section-title">
        Certifications
      </Reveal>
      <Reveal as="ul" className="cert-list" delay={100}>
        {certifications.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <p className="section-eyebrow">06 · CONTACT</p>
      <Reveal as="h2" className="section-title">
        Get in touch
      </Reveal>
      <Reveal as="div" delay={100}>
        <p>
          I'm currently looking for internship opportunities in data
          analytics, data engineering, and AI-focused work. Feel free to
          reach out.
        </p>
        <div className="contact-links">
          <a
            href={`mailto:${profile.email}`}
            className="contact-icon"
            aria-label="Email"
            title={profile.email}
          >
            <IconMail />
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="contact-icon"
            aria-label="Call"
            title={profile.phone}
          >
            <IconPhone />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-icon"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <IconLinkedin />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React & Vite.
      </p>
    </footer>
  );
}

function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
