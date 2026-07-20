import { Navigation } from "./components/navigation"
import { MainPage } from "./components/mainPage"
import { FooterPage } from "./components/footerPage"
import { Experiencias } from "./components/Experiencias"
import { Proyectos } from "./components/Proyectos"
import React, { useRef } from 'react';
import './App.css';
import './css/sections.css';

function App() {
  const divInicioRef = useRef(null);
  const divSobreMiRef = useRef(null);
  const divHerramientaRef = useRef(null);
  const divExperienciaRef = useRef(null);
  const divProyectoRef = useRef(null);
  const divFooterRef = useRef(null);

  const handleClickBotonInicio = () => {
    divInicioRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClickBotonSobreMi = () => {
    divSobreMiRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClickBotonHerramienta = () => {
    divHerramientaRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClickBotonExperiencia = () => {
    divExperienciaRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClickBotonProyecto = () => {
    divProyectoRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClickBotonFooter = () => {
    divFooterRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navigation
        handleClickBotonSobreMi={handleClickBotonSobreMi}
        handleClickBotonInicio={handleClickBotonInicio}
        handleClickBotonHerramienta={handleClickBotonHerramienta}
        handleClickBotonExperiencia={handleClickBotonExperiencia}
        handleClickBotonProyecto={handleClickBotonProyecto}
        handleClickBotonFooter={handleClickBotonFooter}
      />
      <MainPage
        divSobreMiRef={divSobreMiRef}
        divInicioRef={divInicioRef}
        divHerramientaRef={divHerramientaRef}
      />
      <Experiencias divExperienciaRef={divExperienciaRef} />
      <Proyectos divProyectoRef={divProyectoRef} />
      <FooterPage divFooterRef={divFooterRef} />
    </>
  );
}

export default App;
