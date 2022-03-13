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
    margin-top: 25%;
  }
  h1 {
    margin: 10px 0;
    color: black;
    font-size: 40px;
    margin-top: 50px;
  }
  h2 {
    margin: 10px 0;
    margin-top: 10px;
    color: grey;

    font-style: italic;
    text-align: center;
  }
  .contenedorBoton {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 768px) {
    .contenedorTitulo {
      margin: auto;
    }

    h1 {
      font-size: 60px;
    }
    h2 {
      font-size: 30px;
    }
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
          minHeight: 600.0,
          minWidth: 600.0,
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
          <a href="https://poocoin.app/" rel="noreferrer" target="_blank">
            <Button
              className="boton"
              type="primary"
              size="large"
              style={{ height: 55, width: 200 }}
            >
              BUY NOW
            </Button>
          </a>
        </div>
      </div>
    </FondoComponent>
  );
};
export default Fondo;
