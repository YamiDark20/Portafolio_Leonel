import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendar, faChevronDown, faChevronUp, faCheck } from '@fortawesome/free-solid-svg-icons';
import { ScrollReveal } from './ScrollReveal';

const experiencias = [
  {
    tipo: "trabajo",
    icono: faBriefcase,
    titulo: "Desarrollador Full-Stack",
    empresa: "Toposoft Innovaciones Tecnológicas C.A.",
    periodo: "2024 - Presente · 1 año",
    descripcion: "Empresa venezolana verificada internacionalmente por Connect Americas, dedicada a soluciones de tecnología informática y gerencial para los sectores educativo, industrial, servicio y gobierno. Desarrollo de software a gran escala, asesoramiento y monitoreo de sistemas.",
    proyectos: [
      {
        nombre: "FCCPVIRTUAL — FederaciónVirtual",
        descripcion: "Plataforma digital para contadores públicos en Venezuela que digitaliza y optimiza los trámites gremiales, mejorando la experiencia de los usuarios y reduciendo tiempos de gestión.",
        objetivos: [
          "Actuaciones profesionales",
          "Pagos de actuaciones profesionales",
          "Impresión de solvencias y certificados",
          "Inscripción gremial en línea",
          "Solicitud de carnet profesional",
          "Compra de hojas de seguridad electrónicas"
        ]
      },
      {
        nombre: "DOLARADAR",
        descripcion: "Plataforma comparadora/listado de casas de cambio para Baja California con mapa interactivo, tasas en tiempo real y perfiles editables. Desarrollada con PHP y Yii2.",
        objetivos: [
          "Búsqueda por mapa y geolocalización",
          "Tasas, comentarios y calificaciones en vivo",
          "Perfil editable para cada casa de cambio",
          "Suscripciones mensuales con pasarela de pago",
          "Contacto directo vía WhatsApp"
        ]
      },
      {
        nombre: "SISGLOBAL",
        descripcion: "Plataforma integral que combina telemedicina, compra de medicamentos y emisión de recetas médicas para usuarios, proveedores, farmacias y brokers de afiliación.",
        objetivos: [
          "Telemedicina desde cualquier lugar del mundo",
          "Compra de medicamentos en línea",
          "Afiliación autónoma o vía brokers",
          "Gestión centralizada de operaciones",
          "Seguridad y privacidad de datos"
        ]
      }
    ]
  },
  {
    tipo: "trabajo",
    icono: faBriefcase,
    titulo: "Desarrollador Web Full-Stack",
    empresa: "Freelance",
    periodo: "2022 - 2023",
    descripcion: "Desarrollo de aplicaciones web completas usando React, Node.js y Laravel. Implementación de interfaces responsivas y APIs RESTful con autenticación y bases de datos."
  }
];

const ProyectoCard = ({ proyecto }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`proyecto-exp-card ${open ? 'open' : ''}`}>
      <button className="proyecto-exp-header" onClick={() => setOpen(!open)}>
        <span className="proyecto-exp-nombre">{proyecto.nombre}</span>
        <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} className="proyecto-exp-chevron" />
      </button>
      <div className="proyecto-exp-body">
        <p className="proyecto-exp-desc">{proyecto.descripcion}</p>
        {proyecto.objetivos && (
          <ul className="proyecto-exp-list">
            {proyecto.objetivos.map((obj, i) => (
              <li key={i}>
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
                {obj}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export const Experiencias = ({ divExperienciaRef }) => {
  return (
    <section className="experiencia" ref={divExperienciaRef}>
      <ScrollReveal>
        <h2 className="section-title">Experiencia</h2>
        <div className="timeline">
          {experiencias.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot">
                <FontAwesomeIcon icon={exp.icono} />
              </div>
              <div className="timeline-card neon-border">
                <div className="timeline-header">
                  <h3>{exp.titulo}</h3>
                  <span className="timeline-empresa">{exp.empresa}</span>
                </div>
                <div className="timeline-periodo">
                  <FontAwesomeIcon icon={faCalendar} />
                  <span>{exp.periodo}</span>
                </div>
                <p>{exp.descripcion}</p>
                {exp.proyectos && (
                  <div className="proyectos-exp-container">
                    <span className="proyectos-exp-label">Proyectos</span>
                    {exp.proyectos.map((proy, i) => (
                      <ProyectoCard key={i} proyecto={proy} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};
