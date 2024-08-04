import { Navigation } from "./components/navigation"
import { MainPage } from "./components/mainPage"
import { FooterPage } from "./components/footerPage"
import React, { useRef } from 'react';

function App() {
  const divInicioRef = useRef(null);
  const divSobreMiRef = useRef(null);
  const divHerramientaRef = useRef(null);
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
  const handleClickBotonFooter = () => {
    divFooterRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navigation handleClickBotonSobreMi={handleClickBotonSobreMi} handleClickBotonInicio={handleClickBotonInicio} handleClickBotonHerramienta={handleClickBotonHerramienta} handleClickBotonFooter={handleClickBotonFooter} />
      <MainPage divSobreMiRef={divSobreMiRef} divInicioRef={divInicioRef} divHerramientaRef={divHerramientaRef} />
      <FooterPage divFooterRef={divFooterRef} />
    </div>
  );
}

export default App;
