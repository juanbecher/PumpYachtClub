import Head from "next/head";
import React, { Fragment } from "react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import LogoTg from "./LogoTg";
// import styles from '../styles/Home.module.css'
const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`;

const Layout = (props) => {
  return (
    <Fragment>
      <Global
      // styles={css`

      //     font-size: 62.5%;
      //     box-sizing: border-box;
      //   }
      //   *,
      //   *:before,
      //   *:after {
      //     box-sizing: inherit;
      //   }

      //   body {
      //     font-size: 1.5rem !important;
      //     /* font-size: 1.6rem !important; */
      //     font-family: "Inter", sans-serif !important;
      //     /* font-family: "Segoe UI Historic", "Segoe UI", Helvetica, Arial,sans-serif; */
      //     line-height: 1.5 !important;
      //   }
      //   h1,
      //   h2,
      //   h3 {
      //     /* margin: 0 0 2rem 0; */
      //     line-height: 1.5;
      //     margin: 0;
      //     font-weight: 600;
      //   }
      //   p {
      //     margin: 0;
      //   }
      //   ul {
      //     /* list-style: none; */
      //     margin: 0;
      //     padding: 0;
      //   }

      //   a {
      //     text-decoration: none !important;
      //   }html {

      // `}
      />
      <Head>
        <html lang="es" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
        />
        <title>Pump Yacht Club</title>
        <meta name="description" content="Pump Yacht Club" />
        <link rel="icon" href="boath.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LogoTg/>
      <main>{props.children}</main>
      
      <Footer>
        <a
          href="https://t.me/PumpYachtClub"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {"Yacht club ⛵"}
        </a>
      </Footer>
    </Fragment>
  );
};

export default Layout;
