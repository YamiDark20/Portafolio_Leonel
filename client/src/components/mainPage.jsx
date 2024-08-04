import React, { useEffect, useState, useRef } from 'react';
import "../css/mainPage.css"
import fotouser from '../svg/fotouser.jpeg';
import DeviconJavascript from '../svg/herramientas/DeviconJavascript.svg';
import DeviconTailwindcss from '../svg/herramientas/DeviconTailwindcss.svg';
import LogosCss3 from '../svg/herramientas/LogosCss3.svg';
import LogosHtml5 from '../svg/herramientas/LogosHtml5.svg';
import SkillIconsGit from '../svg/herramientas/SkillIconsGit.svg';
import LogosDjangoIcon from '../svg/herramientas/LogosDjangoIcon.svg';
import LogosLaravel from '../svg/herramientas/LogosLaravel.svg';
import LogosNodejsIcon from '../svg/herramientas/LogosNodejsIcon.svg';
import LogosReact from '../svg/herramientas/LogosReact.svg';
import DeviconJava from '../svg/herramientas/DeviconJava.svg';
import LogosPhp from '../svg/herramientas/LogosPhp.svg';
import LogosPython from '../svg/herramientas/LogosPython.svg';


export const MainPage = ({divSobreMiRef, divHerramientaRef, divInicioRef}) => {
    // const [isOpen, setIsOpen] = useState(false)
    // const divSobreMiRef = useRef(null);
    // const handleClickBotonSobreMi = () => {
    //   divSobreMiRef.current.scrollIntoView({ behavior: 'smooth' });
    // };

    return (
        <div className='main'>
            <div className='info_personal' ref={divInicioRef}>
                <img className='imagen-circular' src={fotouser} alt="" />
                <p>Hola! Me llamo Leonel Araujo. Soy un desarrollador web.</p>
            </div>
            <div className='sobre_mi' ref={divSobreMiRef}>
                <h1>Sobre mi</h1>
                <p>Soy Leonel Araujo, un desarrollador full-stack con una pasión por construir interfaces de usuario intuitivas y experiencias de usuario excepcionales. Me encanta combinar mi creatividad con mis habilidades técnicas para dar vida a ideas innovadoras. Con experiencia en React y Next.js, he desarrollado aplicaciones web dinámicas y escalables. Además, mi conocimiento de Laravel me permite crear backend sólidos y eficientes. Estoy buscando oportunidades para aplicar mis habilidades en proyectos que tengan un impacto positivo en los usuarios.
                </p>
            </div>
            <div className='herramienta' ref={divHerramientaRef}>
                <h1>Herramientas Usadas</h1>
                {/* <p>Soy Leonel Araujo, un desarrollador full-stack con una pasión por construir interfaces de usuario intuitivas y experiencias de usuario excepcionales. Me encanta combinar mi creatividad con mis habilidades técnicas para dar vida a ideas innovadoras. Con experiencia en React y Next.js, he desarrollado aplicaciones web dinámicas y escalables. Además, mi conocimiento de Laravel me permite crear backend sólidos y eficientes. Estoy buscando oportunidades para aplicar mis habilidades en proyectos que tengan un impacto positivo en los usuarios.
                </p> */}
                <div>
                    
                    <img className='imagen-herramienta' src={DeviconJavascript} alt="" />
                    <img className='imagen-herramienta' src={DeviconTailwindcss} alt="" />
                    <img className='imagen-herramienta' src={LogosHtml5} alt="" />
                    <img className='imagen-herramienta' src={LogosCss3} alt="" />
                    <img className='imagen-herramienta' src={SkillIconsGit} alt="" />
                    <img className='imagen-herramienta' src={LogosDjangoIcon} alt="" />
                    <img className='imagen-herramienta' src={LogosNodejsIcon} alt="" />
                    <img className='imagen-herramienta' src={LogosReact} alt="" />
                    <img className='imagen-herramienta' src={LogosLaravel} alt="" />
                    <img className='imagen-herramienta' src={DeviconJava} alt="" />
                    <img className='imagen-herramienta' src={LogosPhp} alt="" />
                    <img className='imagen-herramienta' src={LogosPython} alt="" />
                </div>
            </div>
            {/* <div> */}
            {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum minima quo perferendis pariatur, tempore iure voluptatibus cum beatae maiores molestias quia aut minus distinctio ipsum officiis earum unde tempora autem.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eius porro temporibus cupiditate asperiores expedita at quasi exercitationem. Culpa numquam doloribus laboriosam maxime adipisci dignissimos soluta aperiam, nesciunt consequatur totam!

            Soluta explicabo rerum magni reprehenderit itaque, dolorem in quaerat nulla assumenda! Sapiente debitis deserunt culpa numquam, autem vero dicta laboriosam, maxime quibusdam excepturi officia at laborum non necessitatibus recusandae minus!
            Magni, expedita incidunt facilis reiciendis sapiente impedit corrupti inventore. Accusantium explicabo veniam repellendus aperiam quaerat quod dolore quam. Temporibus ipsum nemo iure veritatis quas molestiae, rerum non aspernatur eius soluta?
            Ab culpa saepe, qui temporibus iste in ipsa aliquid! Voluptatibus officia blanditiis quo libero repellat assumenda facere ut laborum, at labore! Neque quia iste assumenda ipsa odio molestias quasi dicta.

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta eius necessitatibus architecto molestias nostrum perferendis numquam quo! Non quos dolor aut asperiores tempore. Aperiam culpa odit ratione deserunt fugiat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta eius necessitatibus architecto molestias nostrum perferendis numquam quo! Non quos dolor aut asperiores tempore. Aperiam culpa odit ratione deserunt fugiat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta eius necessitatibus architecto molestias nostrum perferendis numquam quo! Non quos dolor aut asperiores tempore. Aperiam culpa odit ratione deserunt fugiat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta eius necessitatibus architecto molestias nostrum perferendis numquam quo! Non quos dolor aut asperiores tempore. Aperiam culpa odit ratione deserunt fugiat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta eius necessitatibus architecto molestias nostrum perferendis numquam quo! Non quos dolor aut asperiores tempore. Aperiam culpa odit ratione deserunt fugiat.</p> */}
            {/* </div> */}
        </div>
    );
}