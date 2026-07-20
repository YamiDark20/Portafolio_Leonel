import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ScrollReveal } from './ScrollReveal';
import fccpvirtual from '../img/fccpvirtual.png';
import dolaradar from '../img/dolaradar.png';
import sisglobalmedical from '../img/sisglobalmedical.png';

const proyectos = [
  {
    titulo: "FCCPVIRTUAL",
    subtitulo: "Federación de Contadores Públicos",
    descripcion: "Plataforma digital que digitaliza y optimiza los trámites gremiales para contadores públicos en Venezuela, reduciendo tiempos y aumentando la seguridad de las operaciones.",
    imagen: fccpvirtual,
    objetivos: [
      "Actuaciones y pagos profesionales",
      "Impresión de solvencias y certificados",
      "Inscripción gremial en línea",
      "Solicitud de carnet profesional",
      "Compra de hojas de seguridad"
    ],
    color: "#00f0ff",
    tags: ["PHP", "Yii2", "MySQL", "Bootstrap"]
  },
  {
    titulo: "DOLARADAR",
    subtitulo: "Comparador de Casas de Cambio",
    descripcion: "Plataforma web con mapa interactivo que permite buscar casas de cambio, consultar tasas en tiempo real y contactar directamente vía WhatsApp.",
    imagen: dolaradar,
    objetivos: [
      "Búsqueda por mapa y geolocalización",
      "Tasas y calificaciones en vivo",
      "Perfiles editables por casa de cambio",
      "Suscripciones con pasarela de pago",
      "Contacto directo vía WhatsApp"
    ],
    color: "#ff00e6",
    tags: ["PHP", "Yii2", "MySQL", "JavaScript"]
  },
  {
    titulo: "SISGLOBAL",
    subtitulo: "Plataforma de Telemedicina",
    descripcion: "Plataforma integral que combina telemedicina, compra de medicamentos y emisión de recetas médicas para usuarios, farmacias y brokers de afiliación.",
    imagen: sisglobalmedical,
    objetivos: [
      "Telemedicina desde cualquier lugar",
      "Compra de medicamentos en línea",
      "Afiliación autónoma o vía brokers",
      "Gestión centralizada de operaciones",
      "Seguridad y privacidad de datos"
    ],
    color: "#00ff88",
    tags: ["PHP", "Yii2", "MySQL", "Bootstrap"]
  }
];

export const Proyectos = ({ divProyectoRef }) => {
  return (
    <section className="proyectos" ref={divProyectoRef}>
      <ScrollReveal>
        <h2 className="section-title">Proyectos</h2>
        <div className="proyectos-grid">
          {proyectos.map((proy, index) => (
            <div key={index} className="proyecto-card neon-border" style={{ '--card-accent': proy.color }}>
              <div className="proyecto-img-wrapper">
                <img className="proyecto-img" src={proy.imagen} alt={proy.titulo} />
              </div>
              <div className="proyecto-body">
                <h3>{proy.titulo}</h3>
                <span className="proyecto-subtitulo">{proy.subtitulo}</span>
                <p>{proy.descripcion}</p>
                <ul className="proyecto-objetivos">
                  {proy.objetivos.map((obj, i) => (
                    <li key={i}>
                      <FontAwesomeIcon icon={faCheck} className="check-icon" />
                      {obj}
                    </li>
                  ))}
                </ul>
                <div className="proyecto-tags">
                  {proy.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};
