import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faBriefcase, faFolderOpen, faTools, faEnvelope, faBars, faXmark, faSun, faMoon, faCode } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext';
import "../css/navigation.css"

export const Navigation = ({
  handleClickBotonSobreMi, handleClickBotonHerramienta,
  handleClickBotonInicio, handleClickBotonFooter,
  handleClickBotonExperiencia, handleClickBotonProyecto
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const links = [
    { label: "Inicio", icon: faHouse, onClick: handleClickBotonInicio },
    { label: "Sobre mí", icon: faUser, onClick: handleClickBotonSobreMi },
    { label: "Experiencia", icon: faBriefcase, onClick: handleClickBotonExperiencia },
    { label: "Proyectos", icon: faFolderOpen, onClick: handleClickBotonProyecto },
    { label: "Herramientas", icon: faTools, onClick: handleClickBotonHerramienta },
    { label: "Contacto", icon: faEnvelope, onClick: handleClickBotonFooter },
  ];

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-inner">
        <div className="sidebar-header">
          <button
            type="button"
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
          </button>
          <div className={`sidebar-logo ${isOpen ? "visible" : ""}`}>
            <FontAwesomeIcon icon={faCode} className="logo-icon" />
            <span>LeonelDev</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {links.map((link, i) => (
            <button
              key={i}
              type="button"
              className="sidebar-link"
              onClick={() => { link.onClick(); setIsOpen(false); }}
            >
              <div className="sidebar-link-icon">
                <FontAwesomeIcon icon={link.icon} />
              </div>
              <span className={`sidebar-link-label ${isOpen ? "visible" : ""}`}>
                {link.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={darkMode ? "Modo claro" : "Modo oscuro"}
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </div>
      </div>
    </aside>
  );
}
