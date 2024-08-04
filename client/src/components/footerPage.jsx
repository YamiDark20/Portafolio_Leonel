import React, { useEffect, useState, useRef } from 'react';
import "../css/footerPage.css"
import DeviconLinkedin from '../svg/herramientas/DeviconLinkedin.svg';
import SkillIconsGit from '../svg/herramientas/SkillIconsGit.svg';
import SkillIconsGmailLight from '../svg/herramientas/SkillIconsGmailLight.svg';
import MdiPhoneDial from '../svg/herramientas/MdiPhoneDial.svg';


export const FooterPage = ({divFooterRef}) => {

    // const [showTooltip, setShowTooltip] = useState(false);
    const [textoAMostrar, setTextoAMostrar] = useState("");

    const handleClick = (mensaje) => {
        setTextoAMostrar(mensaje)
        // setShowTooltip(true);
        navigator.clipboard.writeText(mensaje);
        setTimeout(() => {
        // setShowTooltip(false);
        setTextoAMostrar("")
        }, 2500);
    };
    return (
        <footer ref={divFooterRef}>
            <h1>Contacto</h1>
            <div>
                <img className='imagen-footer' src={DeviconLinkedin} alt="" />
                <img className='imagen-footer' src={SkillIconsGit} alt="" />
                <img className='imagen-footer' src={SkillIconsGmailLight} alt={"araujo.leonel1999@gmail.com"} onClick={() => handleClick("araujo.leonel1999@gmail.com")} />
                <img className='imagen-footer' src={MdiPhoneDial} alt={"04248298164"} onClick={() => handleClick("04248298164")} />
            </div>
            {textoAMostrar != "" && (
                <div className={`tooltip ${textoAMostrar == "araujo.leonel1999@gmail.com" ? "showEmail": (textoAMostrar == "04248298164" ? "showTlf": "")}`}>
                {textoAMostrar}
                </div>
            )}
            <p>© 2024 Pagina creada por Leonel Araujo</p>
        </footer>
    );
}