import React from "react";
import Helmet from 'react-helmet';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "gatsby"
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import "../components/style.scss";
import "../components/columns.scss";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "images/organizacion.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            aspectRatio
            sizes
            base64
            src
            srcSet
          }
        }
      }
      imageTwo: file(relativePath: { eq: "images/Seguridad.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            aspectRatio
            sizes
            base64
            src
            srcSet
          }
        }
      }
      imageThree: file(relativePath: { eq: "images/Comuncacion.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            aspectRatio
            sizes
            base64
            src
            srcSet
          }
        }
      }
    }
  `);
  return (
    <div>
            <Helmet>
        <title>Blog sobre consejos de seguridad para condominios</title>
        <meta name="description" content="¿Quieres vivir en un condominio más seguro? Nosotros te damos una lista de consejos básicos para que puedas aumentar el nivel de seguridad de tu condominio."></meta>
        <meta name="robots" content="index,follow"></meta>
        
        
      </Helmet>
      <Navbar />
      <section>
        <div className="container">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-three-quarters">
              <h1 className="title is-1 has-text-weight has-text-centered">Consejos de <span className="magical">seguridad para condominios</span></h1>
            </div>
            <div className="column"></div>
          </div>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-two-thirds">
              <Img
                fluid={data.imageOne.childImageSharp.fluid}
                alt="Consejos de seguridad para condominios"
              />

              <div className="notification">
                <h2 className="title is-3 has-text-weight">¿Ya conoces los protocolos de emergencia de tu empresa de seguridad?</h2>
                <p className="title is-5">
                  ¿Cada cuándo revisas con tu empresa de seguridad sus protocolos de seguridad para casos de emergencia? Es muy importante que seguido te reúnas con ellos para afinarlos.

                </p>
                
                <Link to="/protocolo-emergencias-seguridad-condominio" className="button is-primary is-rounded" aria-label="Procolo de seguridad para condominio">Leer más</Link>
                
              </div>
            </div>
            <div className="column"></div>
          </div>
        </div>
      

      </section>
      <Footer />
    </div>
  );
};
