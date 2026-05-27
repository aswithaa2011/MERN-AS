import heroImg from "../assets/passphoto.jpeg";

export default function Home() {
  return (
    <section id="hero">
      <div className="hero-text">
        <div className="hero-badge fade">
          <div className="status-dot"></div> Open to Opportunities
        </div>
        <h1 className="hero-name fade d1">
          Aswitha<br/>
          <span className="script">Vijayakumar</span>
        </h1>
        <div className="hero-role fade d2">MERN Stack Developer</div>
        <p className="hero-desc fade d3">
          I build complete web applications — from MongoDB schemas and Express APIs to React interfaces. Full-stack, pixel-perfect, and production-ready.
        </p>
        <div className="hero-actions fade d4">
          <a href="#projects" className="btn-primary">View Projects ↓</a>
          <a href="#contact" className="btn-ghost">Let's Connect</a>
        </div>
      </div>
      <div className="hero-photo-wrap fade d2">
        <div className="hero-photo-bg"></div>
        <div className="hero-photo-internal">
          <img className="hero-photo" src={heroImg} alt="Aswitha Vijayakumar"/>
        </div>
        <div className="hero-tag">MERN Stack</div>
        <div className="hero-photo-card">
          <div className="hero-photo-card-title">📍 Chennai, TN</div>
          <div className="hero-photo-card-val">Available Now</div>
        </div>
      </div>
    </section>
  );
}
