import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import "../css/footerPage.css"

export const FooterPage = ({divFooterRef}) => {
  const [copied, setCopied] = useState(null);

  const contactos = [
    {
      id: "email",
      icono: faEnvelope,
      label: "araujo.leonel1999@gmail.com",
      valor: "araujo.leonel1999@gmail.com",
      href: "mailto:araujo.leonel1999@gmail.com"
    },
    {
      id: "telefono",
      icono: faPhone,
      label: "+58 424-8298164",
      valor: "04248298164",
      href: "tel:+584248298164"
    },
    {
      id: "linkedin",
      icono: faLinkedin,
      label: "LinkedIn",
      valor: null,
      href: "https://linkedin.com"
    },
    {
      id: "github",
      icono: faGithub,
      label: "GitHub",
      valor: null,
      href: "https://github.com"
    }
  ];

  const handleCopy = (texto, id) => {
    navigator.clipboard.writeText(texto);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <footer ref={divFooterRef}>
      <div className="footer-bg"></div>
      <div className="footer-content">
        <h2 className="section-title">Contacto</h2>
        <p className="footer-desc">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>

        <div className="contactos-grid">
          {contactos.map((c) => (
            <div key={c.id} className="contacto-card neon-border">
              <div className="contacto-icon-wrapper">
                <FontAwesomeIcon icon={c.icono} />
              </div>
              <span className="contacto-label">{c.label}</span>
              <div className="contacto-actions">
                <a href={c.href} className="contacto-btn" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>{c.id === "linkedin" || c.id === "github" ? "Ir" : "Enviar"}</span>
                </a>
                {c.valor && (
                  <button
                    className={`contacto-btn copy-btn ${copied === c.id ? "copied" : ""}`}
                    onClick={() => handleCopy(c.valor, c.id)}
                    aria-label={`Copiar ${c.label}`}
                  >
                    <FontAwesomeIcon icon={copied === c.id ? faCheck : faCopy} />
                    <span>{copied === c.id ? "Copiado" : "Copiar"}</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Leonel Araujo — Hecho con <span className="heart">♥</span> y código</p>
        </div>
      </div>
    </footer>
  );
}
