import React from "react";
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
                fluid={data.imageTwo.childImageSharp.fluid}
                alt="Ola k dise"
              />

              <div className="notification">
                <h2 className="title is-3 has-text-weight">Título</h2>
                <p className="title is-5">
                  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit
                  lorem ipsum dolor. <strong>Pellentesque risus mi</strong>,
                  tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
                  ac ex sit amet fringilla. Nullam gravida purus diam, et dictum{" "}
                  <a>felis venenatis</a> efficitur. Sit amet, consectetur
                  adipiscing elit.
                </p>
                
                <Link to="/post-prueba" className="button is-primary is-rounded">Leer más</Link>
                
              </div>
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
                alt="A corgi smiling happily"
              />

              <div className="notification">
                <h2 className="title is-3 has-text-weight">Título</h2>
                <p className="title is-5">
                  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit
                  lorem ipsum dolor. <strong>Pellentesque risus mi</strong>,
                  tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
                  ac ex sit amet fringilla. Nullam gravida purus diam, et dictum{" "}
                  <a>felis venenatis</a> efficitur. Sit amet, consectetur
                  adipiscing elit.
                </p>
                <button className="button is-primary is-rounded">
                  Leer más
                </button>
              </div>
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
                alt="A corgi smiling happily"
              />

              <div className="notification">
                <h2 className="title is-3 has-text-weight">Título</h2>
                <p className="title is-5">
                  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit
                  lorem ipsum dolor. <strong>Pellentesque risus mi</strong>,
                  tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
                  ac ex sit amet fringilla. Nullam gravida purus diam, et dictum{" "}
                  <a>felis venenatis</a> efficitur. Sit amet, consectetur
                  adipiscing elit.
                </p>
                <button className="button is-primary is-rounded">
                  Leer más
                </button>
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