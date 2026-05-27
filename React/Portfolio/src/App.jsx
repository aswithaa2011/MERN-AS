import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css";

function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        <div className="marquee-item">MongoDB <span>✦</span> Express.js <span>✦</span> React.js <span>✦</span> Node.js <span>✦</span> Tailwind CSS <span>✦</span> REST APIs <span>✦</span> JWT Auth <span>✦</span> Full Stack Developer <span>✦</span></div>
        <div className="marquee-item">MongoDB <span>✦</span> Express.js <span>✦</span> React.js <span>✦</span> Node.js <span>✦</span> Tailwind CSS <span>✦</span> REST APIs <span>✦</span> JWT Auth <span>✦</span> Full Stack Developer <span>✦</span></div>
      </div>
    </div>
  );
}

function Credentials() {
  return (
    <section id="more">
      <div className="section-wrap">
        <div>
          <div className="section-pill fade">Certifications</div>
          <h2 className="section-heading fade d1">Credentials</h2>
          <div style={{ marginTop: '2rem' }}>
            <div className="info-card fade d2">
              <div className="info-icon">🏆</div>
              <div>
                <div className="info-title">MERN Full Stack Development</div>
                <div className="info-sub">SLA Institute</div>
                <div className="info-badge">2026</div>
              </div>
            </div>
            <div className="info-card fade d3">
              <div className="info-icon">🎓</div>
              <div>
                <div className="info-title">HTML, CSS & JavaScript for Web Developers</div>
                <div className="info-sub">IBM</div>
                <div className="info-badge">2026</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="section-pill fade">Education</div>
          <h2 className="section-heading fade d1">Academic Background</h2>
          <div style={{ marginTop: '2rem' }}>
            <div className="info-card fade d2">
              <div className="info-icon">🎓</div>
              <div>
                <div className="info-title">B.Sc. Computer Science</div>
                <div className="info-sub">St. Thomas College of Arts and Science · 2020–2023</div>
                <div className="info-badge">Aggregate: 78.5%</div>
              </div>
            </div>
            <div className="info-card fade d3">
              <div className="info-icon">📘</div>
              <div>
                <div className="info-title">Class XII</div>
                <div className="info-sub">Higher Secondary Education</div>
                <div className="info-badge">73%</div>
              </div>
            </div>
            <div className="info-card fade d4">
              <div className="info-icon">📗</div>
              <div>
                <div className="info-title">Class X</div>
                <div className="info-sub">Secondary Education</div>
                <div className="info-badge">84%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-logo">Aswitha<span>.</span></div>
      <div style={{ textAlign: 'center' }}>
        <p>MERN Stack Developer · Chennai, Tamil Nadu</p>
        <p>© 2025 Aswitha Vijayakumar</p>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("on");
        }
      });
    }, { threshold: 0.12 });

    const fadeElements = document.querySelectorAll(".fade");
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Home />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
