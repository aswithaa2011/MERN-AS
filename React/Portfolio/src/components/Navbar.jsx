export default function Navbar() {
  return (
    <nav>
      <a href="#hero" className="nav-logo">Aswitha<span>.</span></a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="Aswitha_Resume.pdf" target="_blank" rel="noreferrer" className="nav-cta">Resume ↗</a>
    </nav>
  );
}
