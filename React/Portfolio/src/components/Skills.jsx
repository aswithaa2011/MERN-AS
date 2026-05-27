export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "⚛",
      iconClass: "rust",
      skills: [
        { name: "React.js", star: true },
        { name: "Tailwind CSS", star: true },
        { name: "JavaScript ES6+", star: false },
        { name: "HTML5", star: false },
        { name: "CSS3", star: false },
        { name: "Framer Motion", star: false },
        { name: "React Router", star: false },
        { name: "Responsive Design", star: false },
      ],
    },
    {
      title: "Backend",
      icon: "⚡",
      iconClass: "sage",
      skills: [
        { name: "Node.js", star: true },
        { name: "Express.js", star: true },
        { name: "REST APIs", star: false },
        { name: "JWT Auth", star: false },
        { name: "CRUD Operations", star: false },
        { name: "MVC Pattern", star: false },
        { name: "Middleware", star: false },
        { name: "JSON Handling", star: false },
      ],
    },
    {
      title: "Database",
      icon: "🗄",
      iconClass: "rust",
      skills: [
        { name: "MongoDB", star: true },
        { name: "Mongoose", star: true },
        { name: "MySQL", star: false },
        { name: "Schema Design", star: false },
        { name: "Data Modeling", star: false },
        { name: "SQL Queries", star: false },
      ],
    },
    {
      title: "Tools & State",
      icon: "🛠",
      iconClass: "sage",
      skills: [
        { name: "Context API", star: false },
        { name: "React Hooks", star: false },
        { name: "Git & GitHub", star: false },
        { name: "Postman", star: false },
        { name: "VS Code", star: false },
        { name: "Vite", star: false },
        { name: "Chrome DevTools", star: false },
        { name: "Jira", star: false },
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="section-wrap">
        <div className="section-pill fade">Tech Stack</div>
        <h2 className="section-heading fade d1">Technical Skills</h2>
        <p className="section-sub fade d2">Everything I use to bring ideas from zero to production.</p>
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className={`skill-card fade d${idx + 1}`}>
              <div className="skill-card-top">
                <div className={`skill-icon ${cat.iconClass}`}>{cat.icon}</div>
                <div className="skill-card-title">{cat.title}</div>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={`skill-tag ${skill.star ? 'star' : ''}`}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
