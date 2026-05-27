import heroImg from "../assets/passphoto.jpeg";

export default function About() {
  return (
    <section id="about">
      <div className="section-wrap">
        <div className="about-sticky fade">
          <div className="about-photo-frame">
            <div className="about-photo-internal">
              <img src={heroImg} alt="Aswitha Vijayakumar"/>
            </div>
            <div className="about-photo-overlay">
              <div className="about-photo-name">Aswitha Vijayakumar</div>
              <div className="about-photo-sub">MERN Stack Developer</div>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="section-pill fade">About Me</div>
          <h2 className="section-heading fade d1">Building the full stack, one layer at a time.</h2>
          <p className="fade d2">
            I'm <strong>Aswitha Vijayakumar</strong>, a Full Stack Developer based in Chennai, Tamil Nadu. I started as a frontend developer obsessed with clean React interfaces — and levelled up to building complete, production-grade MERN applications.
          </p>
          <p className="fade d2">
            My flagship project <strong>Glowra Cosmetics</strong> is a full e-commerce platform where I engineered everything: the React storefront, Node.js + Express backend, MongoDB data models, JWT authentication, and protected REST APIs. I think like a product engineer, not just a developer.
          </p>
          <p className="fade d3">
            I care about <strong>clean, maintainable code</strong>, responsive design, and experiences that just work. I bring both technical precision and creative eye to every project I build.
          </p>

          <div className="exp-card fade d3">
            <div className="exp-icon">💼</div>
            <div>
              <div className="exp-title">Technical Support Executive</div>
              <div className="exp-co">Selfservit Solutions Pvt Ltd · Chennai</div>
              <div className="exp-date">Mar 2024 – Aug 2025</div>
            </div>
          </div>

          <div className="about-stats fade d4">
            <div className="stat-card">
              <span className="stat-num">4+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">MERN</span>
              <span className="stat-label">Full Stack</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">78.5%</span>
              <span className="stat-label">B.Sc. CS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
