import React, { useEffect, useState, useRef } from 'react';
import "../css/navigation.css"
import logo from '../logo.svg';
import FlatColorIconsHome from '../svg/FlatColorIconsHome.svg';
import TeenyiconsContactSolid from '../svg/TeenyiconsContactSolid.svg';
import EpMenu from '../svg/EpMenu.svg';
import GameIconsSkills from '../svg/GameIconsSkills.svg';
import OcticonProject from '../svg/OcticonProject.svg';
import MaterialSymbolsLightDeveloperMode from '../svg/MaterialSymbolsLightDeveloperMode.svg';
import CarbonExit from '../svg/CarbonExit.svg';
import VaadinSpecialist from '../svg/VaadinSpecialist.svg';
import PhUserCircleBold from '../svg/PhUserCircleBold.svg';

export const Navigation = ({handleClickBotonSobreMi, handleClickBotonHerramienta, handleClickBotonInicio, handleClickBotonFooter}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <aside className={`sidebar ${isOpen ? "open": ""}`}>
            <div className='inner'>
                <header>
                    <button type="button" className='sidebar-burger' onClick={() => setIsOpen(!isOpen)}><span className='icon'>{isOpen ? <span className='icon'><img src={CarbonExit} />LeonelDev<img src={MaterialSymbolsLightDeveloperMode} /></span>: <img src={EpMenu} />}</span></button>
                    {/* <img src={logo} alt="" /> */}
                </header>
                <nav>
                    <button type="button" onClick={() => handleClickBotonInicio()}>
                        {/* <span className="icon"></span> */}
                        <img src={FlatColorIconsHome} className={`icon ${isOpen ? "open": ""}`} />
                        <p>Inicio</p>
                    </button>
                    <button type="button" onClick={() => handleClickBotonSobreMi()}>
                        <img src={PhUserCircleBold} className={`icon ${isOpen ? "open": ""}`} />
                        <p>Sobre mi</p>
                    </button>
                    <button type="button">
                        <img src={VaadinSpecialist} className={`icon ${isOpen ? "open": ""}`} />
                        <p>Experiencias</p>
                    </button>
                    <button type="button" onClick={() => handleClickBotonFooter()}>
                        {/* <span className="icon">Contact</span> */}
                        <img src={TeenyiconsContactSolid} className={`icon ${isOpen ? "open": ""}`} />
                        <p>Contacto</p>
                    </button>
                    <button type="button">
                        {/* <span className="icon">Proyects</span> */}
                        <img src={OcticonProject} className={`icon ${isOpen ? "open": ""}`} />
                        <p>Proyectos</p>
                    </button>
                    <button type="button" onClick={() => handleClickBotonHerramienta()}>
                        {/* <span className="icon">Skills</span> */}
                        <img src={GameIconsSkills} className={`icon ${isOpen ? "open": ""}`} />
                        <p>Herramientas</p>
                    </button>
                </nav>
            </div>
        </aside>
    );
}