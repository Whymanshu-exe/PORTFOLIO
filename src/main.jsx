import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

const navigation = [
  ["about", "whoami"],
  ["stack", "cat skills"],
  ["projects", "ls projects"],
  ["credentials", "ls credentials"],
  ["community", "git log"],
  ["contact", "ssh contact"],
];

const projects = [
  {
    name: "E-SHELL",
    type: "Linux · automation",
    description:
      "A smart terminal assistant that understands natural-language requests and helps automate everyday Linux tasks.",
    stack: ["Python", "Shell", "Linux", "AI"],
    language: "Python",
    href: "https://github.com/himanshu-12345678388/AI-terminal-assistant-",
    label: "View on GitHub",
  },
  {
    name: "EDU-CART",
    type: "AI · learning",
    description:
      "An AI-powered study platform for practicing quizzes, turning course materials into study decks, and getting adaptive explanations.",
    stack: ["Python", "FastAPI", "RAG", "JavaScript"],
    language: "Python",
    href: "https://github.com/Whymanshu-exe/EDU-CART.git",
    label: "View on GitHub",
  },
  {
    name: "Chat-Server",
    type: "Web · realtime",
    description:
      "A real-time chat application with a Vite frontend and an Express, Socket.IO backend, backed by MongoDB and Redis.",
    stack: ["JavaScript", "Express", "Socket.IO", "MongoDB", "Redis"],
    language: "JavaScript",
    href: "https://github.com/Whymanshu-exe/Chat-Server.git",
    label: "View on GitHub",
  },
];

const credentials = [
  {
    name: "Google Cloud Essentials",
    detail: "Verified Google Cloud badge",
    issuer: "Google Cloud · Credly",
    href: "https://www.credly.com/badges/734badfa-76e2-4942-bf9d-065960d8ef13/public_url",
    mark: "G",
    action: "View badge",
  },
  {
    name: "SAP Certified — Implementation Consultant",
    detail: "End-to-End Business Processes for SAP Business Suite",
    issuer: "SAP",
    href: assetUrl("SAP/SAP_E2E.pdf"),
    mark: "SAP",
    action: "View certificate",
  },
  {
    name: "SAP Certified — Back-End Developer",
    detail: "ABAP Cloud",
    issuer: "SAP",
    href: assetUrl("SAP/SAPCertification_ABAP.pdf"),
    mark: "SAP",
    action: "View certificate",
  },
  {
    name: "Google Cloud Computing Foundations",
    detail: "Cloud, infrastructure, and cloud-native fundamentals",
    issuer: "Google Cloud",
    href: assetUrl("certificates/Gcloud2.jpeg"),
    mark: "G",
    action: "View credential",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    detail: "Cloud concepts and AWS core services",
    issuer: "Amazon Web Services",
    href: assetUrl("certificates/AWS_ESSENTIALS.pdf"),
    mark: "AWS",
    action: "View certificate",
  },
];

const focusAreas = [
  "Linux & command line",
  "SAP S/4HANA & ABAP",
  "Backend development",
  "Web development",
  "Cloud fundamentals",
  "Git & version control",
  "Data structures & algorithms",
  "Object-oriented programming",
];

const technologies = [
  { name: "Java", mark: "J" },
  { name: "Python", mark: "Py" },
  { name: "C", mark: "C" },
  { name: "ABAP", mark: "A" },
  { name: "Linux", mark: "$_" },
  { name: "Shell", mark: ">_" },
  { name: "Git", mark: "⑂" },
  { name: "GitHub", mark: "GH" },
  { name: "Vim", mark: "V" },
  { name: "JavaScript", mark: "JS" },
  { name: "React", mark: "R" },
  { name: "HTML & CSS", mark: "</>" },
  { name: "Google Cloud", mark: "G" },
  { name: "AWS", mark: "AWS" },
  { name: "SAP GUI", mark: "SAP" },
  { name: "Eclipse ADT", mark: "ADT" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const updateScroll = () => setShowTop(window.scrollY > 560);
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Himanshu Mishra home">
          <span className="wordmark-symbol">Linux nerd</span>
          <span className="wordmark-label">developer / learner</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {navigation.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="mailto:mishrahimanshu7372@gmail.com">
            say hi <span>↗</span>
          </a>
        </nav>
      </header>

      <main id="home">
        <section className="section page-wrap about-section" id="about">
          <div className="section-label"><span>01</span> whoami</div>
          <div className="terminal-card" aria-label="A terminal-style snapshot of my current interests">
            <div className="terminal-chrome">
              <span className="window-dots"><i /><i /><i /></span>
              <span>himanshu@rbu: ~/portfolio</span>
              <span className="terminal-menu">•••</span>
            </div>
            <div className="terminal-content">
              <p><span className="prompt">➜</span> neofetch --profile</p>
              <div className="terminal-profile">
                <img className="terminal-photo" src={assetUrl("me2.jpg")} alt="Himanshu Mishra" />
                <div className="terminal-details">
                  <strong>Himanshu Mishra</strong>
                  <span>-----------------</span>
                  <span><b>OS</b> Linux / curious</span>
                  <span><b>Focus</b> Cloud &amp; SAP</span>
                  <span><b>Campus</b> GFG · RBU</span>
                  <span><b>Shell</b> learning every day</span>
                </div>
              </div>
              <p className="terminal-command"><span className="prompt">➜</span> cat currently-learning.txt</p>
              <div className="terminal-output">Linux <span>/</span> ABAP <span>/</span> Cloud <span>/</span> backend</div>
              <p className="terminal-cursor"><span className="prompt">➜</span> <i /></p>
            </div>
            <div className="terminal-footer"><span>● all systems operational</span><span>UTF-8</span></div>
          </div>
        </section>

        <section className="section page-wrap stack-section" id="stack">
          <div className="section-label"><span>02</span> cat skills</div>
          <div className="section-heading">
            <h2>My toolkit<span>.</span></h2>
            <p>A growing toolkit for building, troubleshooting, and learning.</p>
          </div>
          <div className="skills-content">
            <div className="skill-focus">
              <h3>Areas I’m exploring</h3>
              <div className="skill-focus-list">
                {focusAreas.map((area) => <span key={area}>{area}</span>)}
              </div>
            </div>
            <div className="technology-section">
              <h3>Languages, platforms &amp; tools</h3>
              <div className="technologies-grid">
                {technologies.map((technology) => (
                  <div className="technology-tile" key={technology.name} title={technology.name} aria-label={technology.name}>
                    <span className="technology-mark" aria-hidden="true">{technology.mark}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section page-wrap projects-section" id="projects">
          <div className="section-label"><span>03</span> ls ./projects</div>
          <div className="section-heading projects-heading">
            <h2>Projects<span>.</span></h2>
            <p>A few projects I’m building, exploring, and learning from.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className={`project-card${index === 0 ? " project-featured" : ""}`} key={project.name}>
                <div className="project-meta"><span>{project.type}</span><span>0{index + 1}</span></div>
                <h3><a href={project.href} target="_blank" rel="noreferrer">{project.name}</a></h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="project-footer">
                  <span className="project-language">{project.language}</span>
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                    {project.label} <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section page-wrap credentials-section" id="credentials">
          <div className="section-label"><span>04</span> ls ./credentials</div>
          <div className="section-heading">
            <h2>Credentials<span>.</span></h2>
            <p>Recognizing the time spent learning, practicing, and earning new skills.</p>
          </div>
          <div className="credentials-grid">
            {credentials.map((credential) => (
              <a className="credential-card" href={credential.href} target="_blank" rel="noreferrer" key={credential.name}>
                <div className="credential-art">
                  <span className="credential-monogram" data-mark={credential.mark} aria-hidden="true">{credential.mark}</span>
                </div>
                <div className="credential-info">
                  <span className="credential-issuer">{credential.issuer}</span>
                  <h3>{credential.name}</h3>
                  <p>{credential.detail}</p>
                  <span className="credential-action">{credential.action} <b>↗</b></span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section page-wrap community-section" id="community">
          <div className="section-label"><span>05</span> git log --community</div>
          <div className="community-grid">
            <div>
              <div className="section-heading">
                <h2>Growing with<br /><em>the community.</em></h2>
                <p>Learning is better when it’s shared.</p>
              </div>
              <article className="community-card gfg-card">
                <div className="community-icon">G<span>f</span>G</div>
                <div>
                  <span className="credential-issuer">ON CAMPUS · RAMDEOBABA UNIVERSITY</span>
                  <h3>GeeksforGeeks RBU</h3>
                  <p>Part of the GFG on-campus community at RBU, learning and growing alongside fellow builders.</p>
                  <span className="membership-pill"><i className="status-dot" /> Campus member</span>
                </div>
              </article>
              <article className="community-card sports-card">
                <div className="community-icon sports-icon">RBU</div>
                <div>
                  <span className="credential-issuer">TEAMWORK · CAMPUS LIFE</span>
                  <h3>Sports Club, RBU</h3>
                  <p>Taking part in sports events and helping strengthen teamwork and event coordination.</p>
                  <a href="https://www.instagram.com/rbu__sports/" target="_blank" rel="noreferrer" className="inline-link">View the club ↗</a>
                </div>
              </article>
            </div>
            <div className="journey">
              <p className="terminal-line"><span className="prompt">hm@rbu</span>:<span className="path">~</span>$ git log --oneline journey</p>
              <h3>A work in progress<span>.</span></h3>
              <div className="timeline">
                <article className="timeline-entry">
                  <span className="timeline-node" />
                  <div><small>2025 — NOW</small><h4>B.Tech, Computer Science</h4><p>Industry-integrated course with SAP · Ramdeobaba University</p></div>
                </article>
                <article className="timeline-entry">
                  <span className="timeline-node" />
                  <div><small>EARLIER</small><h4>Higher Secondary</h4><p>Kendriya Vidyalaya</p></div>
                </article>
                <article className="timeline-entry">
                  <span className="timeline-node" />
                  <div><small>FOUNDATIONS</small><h4>School</h4><p>Carmel Academy</p></div>
                </article>
              </div>
              <div className="journey-note"><span>+</span> Every commit is a little progress.</div>
            </div>
          </div>
        </section>

        <section className="section page-wrap contact-section" id="contact">
          <div className="contact-card">
            <div className="contact-copy">
              <div className="section-label"><span>06</span> ssh contact</div>
              <p className="terminal-line"><span className="prompt">hm@rbu</span>:<span className="path">~</span>$ ./say-hello.sh</p>
              <h2>Have a good<br /><em>one in mind?</em></h2>
              <p>Open to opportunities, interesting projects, collaborations, and conversations about Linux, cloud, or SAP.</p>
              <div className="contact-actions">
                <a className="button button-primary" href="mailto:mishrahimanshu7372@gmail.com">Email me <span>↗</span></a>
                <a className="button button-outline" href="https://github.com/himanshu-12345678388" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
              </div>
            </div>
            <div className="contact-aside">
              <div className="contact-name"><span>user</span><strong>Himanshu Mishra</strong></div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/himanshu-mishra-389085373" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
                <a href="https://www.instagram.com/whymanshu_/" target="_blank" rel="noreferrer">Instagram <span>↗</span></a>
                <a href="https://medium.com/@mishrahimanshu7372" target="_blank" rel="noreferrer">Medium <span>↗</span></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-wrap">
        <a className="footer-mark" href="#home">hm<span>.</span></a>
        <p>Designed &amp; built by Himanshu Mishra</p>
        <p><span className="status-dot" /> made with curiosity, React &amp; Vite</p>
      </footer>

      <button
        className={`back-to-top${showTop ? " is-visible" : ""}`}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
