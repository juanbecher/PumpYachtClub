import React, { useState, useEffect, useRef } from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";
import styled from "@emotion/styled";
import { Button } from "antd";

const FondoComponent = styled.div`
  position: inherit !important;
  width: 100%;
  height: 700px;
  display: flex;

  .vanta-canvas {
    width: 100% !important;
    height: 700px !important;
  }
  .contenedorTitulo {
    margin: auto;
  }
  h1 {
    margin: 10px 0;
    color: black;
    font-size: 60px;
    margin-top:50px;
  }
  h2 {
    margin: 10px 0;
    color: grey;
    font-size: 30px;
    font-style: italic;
    text-align: center;
  }
  .contenedorBoton {
    margin-top:50px;
    display: flex;
    justify-content: center;
  }
`;

export const Fondo = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color1: "#ff0000",
          color2: "#00ff00",
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <FondoComponent ref={vantaRef}>
      <div className="contenedorTitulo">
        <h1>Pump Yacht Club</h1>
        <h2>Lets pump this fucking yacht⛵</h2>
        <div className="contenedorBoton">
        <a href="https://poocoin.app/" rel="noreferrer" target="_blank"><Button className="boton" type="primary" size="large" style={{height: 55,
    width: 200}}
    
>
            BUY NOW
          </Button></a>
          
        </div>
      </div>
    </FondoComponent>
  );
};
export default Fondo;
