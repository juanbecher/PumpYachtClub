import React,{useEffect} from "react";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  top: 80%;
  left: 85%;
  position: fixed;
  transition-duration: 0.5s;
  z-index:99;
  img{
      max-width:40px;
  }
  :hover{
      transform: scale(1.2)
  }
  @media (min-width: 768px){
    left: 93%;
    img{
      max-width:45px;
  }
  }
`;

const LogoTg = () => {
//   useEffect(() => {
//     var path = window.location.pathname;
//   if (path == '/propiedades') {
//     $(".wp").hide();
//   }
    
//   }, [])
  
  
  return (
    <Contenedor>
      <a
        href="https://t.me/PumpYachtClub"
        target="_blank"
      >
        <img src="/telegram64.png" alt="Contactar TG"></img>
      </a>
    </Contenedor>
  );
};

export default LogoTg;