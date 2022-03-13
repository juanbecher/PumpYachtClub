import styled from "@emotion/styled";
import Fondo from "../components/Fondo";
import "antd/dist/antd.css";
import Layout from "../components/Layout";

const Contenedor = styled.div`
  h1 {
    font-family: "Permanent Marker", cursive;
    text-align:center;
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
  display: block;

  padding-top: 40px;

  max-width: 1000px;
  width:90%;
  margin: 0 auto;
  margin-bottom: 80px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    .contenedorImagen{
      margin-bottom:0;
    }
  }
  .contenedorImagen {
    display: flex;
    margin-bottom:40px;
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
    text-align: start !important;
    margin: 20px 0;
    display: grid;
    column-gap: 20px;
    grid-template-columns: 1fr 1fr;
    @media (min-width: 768px) {
      column-gap: 40px;
  }
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
