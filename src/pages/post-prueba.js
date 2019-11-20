import React from "react";
import Helmet from 'react-helmet';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import "../components/style.scss";
import "../components/columns.scss";
import "../components/blog.scss";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "images/celular.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            aspectRatio
            sizes
            base64
            src
            srcSet
          }
        }
      }
      imageTwo: file(relativePath: { eq: "images/FondoBase.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
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
        <title>Este es un post prueba</title>
        <meta name="description" content="esta es la descripción prueba"></meta>
        <meta name="robots" content="index,follow"></meta>
        
        
      </Helmet>

      <Navbar />
      <section>
        <div className="container">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-four-fifths">
              <h1 className="is-size-1 has-text-centered">
                ¿Qué nos hace ser la mejor{" "}
                <span className="magical">
                  app de seguridad para condominios
                </span>
                ?
              </h1>
            </div>
            <div className="column"></div>
          </div>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-four-fifths">
            <Img
                fluid={data.imageTwo.childImageSharp.fluid}
                alt="Ola k dise"
              />
              <p className="is-size-5 b7">
              

                Esta es la hermosa introducción al post. Se tienen que escribir muchas cosas bonitas. Si sigo escribiendo, tarde o temprano tendré un post bien elaborado.

              </p>
            </div>
            <div className="column"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
