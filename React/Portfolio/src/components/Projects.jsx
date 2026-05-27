export default function Projects() {
  const subProjects = [
    {
      id: "02",
      type: "Full Stack MERN",
      title: "Task Management App",
      desc: "Full-stack todo app with real-time search, filtering, CRUD operations, MongoDB persistence, Express REST API, and React Hooks state management.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      live: "https://todo-app1-ruby.vercel.app/",
      github: "https://github.com/aswithaa2011/MERN-AS/tree/main",
      delay: "d1"
    }
  ];

  return (
    <section id="projects">
      <div className="section-wrap">
        <div className="projects-header">
          <div>
            <div className="section-pill fade">Projects</div>
            <h2 className="section-heading fade d1">Selected Work</h2>
          </div>
          <a href="https://github.com/aswithaa2011/MERN-AS/tree/main" target="_blank" rel="noreferrer" className="btn-ghost fade">
            All on GitHub ↗
          </a>
        </div>

        {/* Featured */}
        <div className="featured-card fade">
          <div>
            <div className="proj-badge">★ Featured — Full Stack MERN</div>
            <div className="proj-num">01 / E-Commerce Platform</div>
            <h3 className="proj-title">Glowra Cosmetics</h3>
            <p className="proj-desc">
              A production-grade e-commerce platform built end-to-end with the MERN stack. Features JWT-secured authentication, a full REST API backend (Express + Node.js), MongoDB product and user models, dynamic cart with Context API, protected routes, and a responsive Tailwind CSS storefront.
            </p>
            <div className="proj-tech">
              {["MongoDB", "Express.js", "React.js", "Node.js", "JWT Auth", "Tailwind CSS", "Context API", "React Router"].map(t => (
                <span key={t} className="tech-chip">{t}</span>
              ))}
            </div>
            <div className="proj-links-row">
              <a href="https://e-commerce-seven-kappa-80.vercel.app/" target="_blank" rel="noreferrer" className="proj-link live">Live Demo ↗</a>
              <a href="https://github.com/aswithaa2011/MERN-AS/tree/main" target="_blank" rel="noreferrer" className="proj-link">GitHub ↗</a>
            </div>
          </div>
          <div className="featured-number">01</div>
        </div>

        {/* Sub projects */}
        <div className="sub-grid">
          {subProjects.map((proj) => (
            <div key={proj.id} className={`sub-card fade ${proj.delay}`}>
              <div className="proj-num">{proj.id} / {proj.type}</div>
              <h3 className="proj-title">{proj.title}</h3>
              <p className="proj-desc" style={{ fontSize: '0.82rem', marginBottom: '1.2rem' }}>
                {proj.desc}
              </p>
              <div className="proj-tech" style={{ marginBottom: '1.2rem' }}>
                {proj.tech.map(t => <span key={t} className="tech-chip">{t}</span>)}
              </div>
              <div className="proj-links-row">
                {proj.live && <a href={proj.live} target="_blank" rel="noreferrer" className="proj-link live">Live Demo ↗</a>}
                <a href={proj.github} target="_blank" rel="noreferrer" className="proj-link">GitHub ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
