import styled from "@emotion/styled";
import Fondo from "../components/Fondo";
import "antd/dist/antd.css";
import Layout from "../components/Layout";

const Contenedor = styled.div`
  h1 {
    font-family: "Permanent Marker", cursive;
  }
  h2 {
    /* font-family: 'Patrick Hand', cursive; */
  }
  .titulo {
    text-align: center;
    margin-top: 50px;
  }
`;

const ContenedorTokenomics = styled.div`
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 80px;
  .contenedorImagen {
    display: flex;
  }
  img {
    margin: auto;
    object-position: center center;
    border-radius: 166px;
    object-fit: cover;
    width: 280px;
    height: 280px;
  }

  .dscTokenomics {
    text-align:start !important;
    margin:20px 0;
    display: grid;
    column-gap: 40px;
  grid-template-columns: 1fr 1fr;
  }
`;
export default function Home() {
  return (
    <Layout>
      <Contenedor>
        <Fondo />
        <h1 className="titulo">Tokenomics</h1>
        <ContenedorTokenomics>
          <div className="contenedorImagen">
            <img src="/pumpyatch.png" />
          </div>
          <div>
            <div className="dscTokenomics">
              <h3>🦧 Supply </h3>
              <span>1M Total supply </span>
            </div>
            <div className="dscTokenomics">
              <h3>🐆 Taxes 12% </h3>
              <span>4% Liquidity - 8% Marketing</span>
            </div>
            <div className="dscTokenomics">
              <h3>🐫 Token Distribution</h3>
              <span>70% Liquidity - 30% Burn </span>
              
            </div>
            <div className="dscTokenomics">
            <h3>🐢 Max transaction</h3>
              <span>2% </span>
            </div>
          </div>
        </ContenedorTokenomics>
      </Contenedor>
    </Layout>
  );
}
