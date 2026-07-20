import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faServer, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNodeJs, faLaravel, faPython, faPhp, faJava, faGitAlt, faCss3Alt, faHtml5, faJs, faDocker, faFigma } from '@fortawesome/free-brands-svg-icons';
import { ScrollReveal } from './ScrollReveal';
import fotouser from '../svg/fotouser.jpeg';
import "../css/mainPage.css"

const skills = [
  { name: "React", icon: faReact, color: "#61dafb" },
  { name: "Node.js", icon: faNodeJs, color: "#339933" },
  { name: "Laravel", icon: faLaravel, color: "#ff2d20" },
  { name: "Python", icon: faPython, color: "#3776AB" },
  { name: "PHP", icon: faPhp, color: "#777BB4" },
  { name: "Java", icon: faJava, color: "#007396" },
  { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
  { name: "HTML5", icon: faHtml5, color: "#E34F26" },
  { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
  { name: "Git", icon: faGitAlt, color: "#F05032" },
  { name: "Docker", icon: faDocker, color: "#2496ED" },
  { name: "Figma", icon: faFigma, color: "#F24E1E" },
];

export const MainPage = ({divSobreMiRef, divHerramientaRef, divInicioRef}) => {
  return (
    <div className="main">
      <section className="hero" ref={divInicioRef}>
        <div className="hero-layout">
          <div className="hero-content">
            <div className="hero-badge">Desarrollador Full-Stack</div>
            <h1 className="hero-title">
              Hola, soy <span className="hero-name">Leonel Araujo</span>
            </h1>
            <p className="hero-subtitle">
              Construyo experiencias digitales con código limpio y creatividad
            </p>
            <div className="hero-tech">
              <span><FontAwesomeIcon icon={faCode} /> React</span>
              <span><FontAwesomeIcon icon={faLaptopCode} /> Laravel</span>
              <span><FontAwesomeIcon icon={faServer} /> Node.js</span>
              <span><FontAwesomeIcon icon={faMobileAlt} /> Responsive</span>
            </div>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => divHerramientaRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                Ver habilidades
              </button>
              <button className="btn-secondary" onClick={() => divSobreMiRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                Más sobre mí
              </button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-ring">
              <img className="hero-image" src={fotouser} alt="Leonel Araujo" />
            </div>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="glow-circle c1"></div>
          <div className="glow-circle c2"></div>
          <div className="glow-circle c3"></div>
        </div>
      </section>

      <section className="about" ref={divSobreMiRef}>
        <ScrollReveal>
          <h2 className="section-title">Sobre mí</h2>
          <div className="about-content neon-border">
            <p>
              Soy un desarrollador full-stack apasionado por construir interfaces intuitivas
              y experiencias de usuario excepcionales. Combino creatividad con habilidades
              técnicas para dar vida a ideas innovadoras.
            </p>
            <p>
              Con experiencia en React y Laravel, he desarrollado aplicaciones web dinámicas
              y escalables. Me encanta aprender nuevas tecnologías y enfrentar desafíos que
              tengan un impacto positivo.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="skills" ref={divHerramientaRef}>
        <ScrollReveal>
          <h2 className="section-title">Herramientas</h2>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div key={i} className="skill-card neon-border" style={{ '--skill-color': skill.color }}>
                <FontAwesomeIcon icon={skill.icon} className="skill-icon" style={{ color: skill.color }} />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
