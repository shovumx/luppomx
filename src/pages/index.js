import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Img from "gatsby-image";
import "../components/style.scss";
import "../components/columns.scss";
import "../components/formulario.scss";
import Helmet from "../components/helmet";
import Header from "../components/header";

import Footer from "../components/footer";

import Navbar from "../components/navbar";
import {
  FaKey,
  FaComments,
  FaUserLock,
  FaHourglassStart,
  FaAtom,
  FaRocket
} from "react-icons/fa";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      imageThree: file(relativePath: { eq: "images/celular.jpg" }) {
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
      imageFour: file(relativePath: { eq: "images/informacion.jpg" }) {
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
      imageFive: file(
        relativePath: { eq: "images/SistemaAdministrativo.jpg" }
      ) {
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
      <Helmet />
      <Navbar />
      <Header />
      <div>
        <div className="container"  id="informacion">
          <div className="columns">
            <div className="column shake">
              <article className="notification one">
                <span className="icon is-large has-text-black">
                  <FaKey size="fa-4x" />
                </span>
                <p className="is-size-3">ID Digital </p>
                <p className="is-size-5">
                  Cada residente tiene una identificación digital que cambia con
                  el tiempo. Gracias a esto, el personal de seguridad puede
                  corroborar fácilmente que es residente aunque venga caminando
                  o en Uber.{" "}
                </p>
              </article>
            </div>
            <div className="column shake">
              <article className="notification two">
                <span className="icon is-large has-text-black">
                  <FaComments size="fa-4x"/>
                </span>
                <p className="is-size-3">Notificaciones </p>
                <p className="is-size-5">
                  Recibe notificaciones junto a toda tu familia para autorizar o
                  rechazar accesos a tu casa desde tu celular. También sabrás
                  cuando tus visitas, proveedores o personal de servicio se
                  retiran del Condominio.
                </p>
              </article>
             
            </div>
            <div className="column shake">
              <article className="notification three">
                <span className="icon is-large has-text-black">
                  <FaRocket size="fa-4x"/>
                </span>
                <p className="is-size-3">Multiplataforma </p>
                <p className="is-size-5">
                  Puedes descargar nuestra aplicación y además usar nuestro Bot
                  inteligente que te permite gestionar todos nuestros servicios
                  desde apps de mensajería como Telegram o Facebook.{" "}
                </p>
              </article>
            </div>
          </div>
          <div className="columns">
              <div className="column"></div>
              <div className="column is-half">
              <Img
                fluid={data.imageFour.childImageSharp.fluid}
                alt="App de seguridad para condominios"
              />

              </div>
              <div className="column"></div>
            </div>
        </div>
        
        <div className="container">
          <div className="columns">
            <div className="column shake">
              <article className="notification four">
                <span className="icon is-large has-text-black">
                  <FaUserLock size="fa-4x"/>
                </span>
                <p className="is-size-3">100% Privado </p>
                <p className="is-size-5">
                  Nuestra plataforma y conmutador digital funcionan de tal
                  manera que los guardias nunca tienen acceso a información
                  vital que, en malas manos, puede volverse un auténtico
                  peligro.
                </p>
              </article>
            </div>
            <div className="column shake">
              <article className="notification five">
                <span className="icon is-large has-text-black">
                  <FaHourglassStart size="fa-4x"/>
                </span>
                <p className="is-size-3">
                  Botón de pánico y emergencias médicas
                </p>
                <p className="is-size-5">
                  Cuando el tiempo es fundamental, nada mejor que un botón de
                  pánico y otro de emergenicas médicas. Cualquier residente
                  puede detonar una alerta hacia todos sus vecinos para
                  avisarles que algo malo está pasando.{" "}
                </p>
              </article>

            </div>
            <div className="column shake">
              <article className="notification six">
                <span className="icon is-large has-text-black">
                  <FaAtom size="fa-4x"/>
                </span>
                <p className="is-size-3">Innovación </p>
                <p className="is-size-5">
                  Todo el tiempo estamos actualizando nuestra app para agregar
                  nuevas características que hagan todavía más seguro el
                  Condominio donde vives con tu familia.
                </p>
              </article>
            </div>
          </div>
          <div className="columns">
              <div className="column"></div>
              <div className="column is-half">
              <Img
                fluid={data.imageThree.childImageSharp.fluid}
                alt="Control de accesos para condominios"
              />

              </div>
              <div className="column"></div>
            </div>

        </div>

        <div className="container">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-two-thirds">
              <h2 className="title is-3 has-text-grey-dark">Características</h2>
              <p className="title is-5 has-text-grey-dark">
                ¿Sabías que el punto más débil en la seguridad de un condominio
                es la{" "}
                <span class="magical">
                  falta de protocolos confiables de comunicación entre
                  vigilantes y residentes?
                </span>
              </p>
              <p className="title is-5 has-text-grey">
                Nosotros te ofrecemos solucionar eso con una app que te permita
                aprobar o rechazar visitas desde tu celular, recibir llamadas
                sin que tu teléfono lo conozca el personal de seguridad para
                mantener tu privacidad, grabar las llamadas para que sepas quién
                autorizó, registrar visitas recurrentes o personal de servicio.
                Eso y mucho más.
              </p>
              <Link
                to="/caracteristicas"
                className="button is-rounded is-primary is-outlined"
              >
                Todas las características y precios
              </Link>
            </div>
            <div className="column">
            
            </div>
          </div>
          <div className="columns">
              <div className="column"></div>
              <div className="column is-half">
              <Img
                fluid={data.imageFive.childImageSharp.fluid}
                alt="Botón de pánico para condominios"
              />

              </div>
              <div className="column"></div>
            </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};
