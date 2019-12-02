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
          fluid(maxWidth: 1200) {
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
          fluid(maxWidth: 1200) {
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
          fluid(maxWidth: 1200) {
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
        <div id="informacion">
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
                  corroborar fácilmente que es residente del fraccionamiento
                  aunque venga caminando o en Uber o registrar correctamente la visita.{" "}
                </p>
              </article>
            </div>
            <div className="column shake">
              <article className="notification two">
                <span className="icon is-large has-text-black">
                  <FaComments size="fa-4x" />
                </span>
                <p className="is-size-3">Notificaciones </p>
                <p className="is-size-5">
                  Recibe notificaciones junto a toda tu familia para controlar
                  accesos de visitantes a tu condominio desde tu celular.
                  También sabrás cuando tus visitas, proveedores o personal de
                  servicio se retiran del fraccionamiento.
                </p>
              </article>
            </div>
            <div className="column shake">
              <article className="notification three">
                <span className="icon is-large has-text-black">
                  <FaRocket size="fa-4x" />
                </span>
                <p className="is-size-3">Multiplataforma </p>
                <p className="is-size-5">
                  Puedes descargar nuestra aplicación y además usar nuestro Bot
                  inteligente que te permite gestionar todos tus accesos de
                  visitas desde apps de mensajería como Telegram o Facebook.{" "}
                </p>
              </article>
            </div>
          </div>
          <div className="columns">
            <div className="column"></div>
            <div className="column is-half">
              <Img
                fluid={data.imageFour.childImageSharp.fluid}
                alt="App para control de accesos de condominios y fraccionamientos"
              />
            </div>
            <div className="column"></div>
          </div>
        </div>

        <div>
          <div className="columns">
            <div className="column shake">
              <article className="notification four">
                <span className="icon is-large has-text-black">
                  <FaUserLock size="fa-4x" />
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
                  <FaHourglassStart size="fa-4x" />
                </span>
                <p className="is-size-3">
                  Botón de pánico y emergencias médicas
                </p>
                <p className="is-size-5">
                  Cuando el tiempo es fundamental, nada mejor que un botón de
                  pánico y otro de emergenicas médicas. En nuestra app, el
                  guardia o cualquier residente puede detonar una alerta hacia
                  todos sus vecinos para avisarles que algo malo está pasando.{" "}
                </p>
              </article>
            </div>
            <div className="column shake">
              <article className="notification six">
                <span className="icon is-large has-text-black">
                  <FaAtom size="fa-4x" />
                </span>
                <p className="is-size-3">Innovación </p>
                <p className="is-size-5">
                  Todo el tiempo estamos actualizando nuestra app para agregar
                  nuevas características que hagan todavía más seguro nuestro
                  sistema de control de accesos al fraccionamiento donde vives
                  con tu familia.
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

        <div>
          <div className="columns">
            <div className="column"></div>
            <div className="column is-two-thirds">

              <h2 className="title is-3 has-text-grey-dark has-text-centered">
                ¿Sabías que el punto más débil en la seguridad de un condominio
                es la{" "}
                <span className="magical">
                  falta de protocolos confiables en el control de accesos de visitantes?
                </span>
              </h2>
              <p className="title is-5 has-text-grey">
                Nosotros te ofrecemos solucionar eso con una app que te permita
                aprobar o rechazar visitas desde tu celular, recibir llamadas
                sin que tu teléfono lo conozca el personal de seguridad para
                mantener tu privacidad, grabar las llamadas para que sepas quién
                autorizó, registrar visitas recurrentes o personal de servicio.
                Eso y mucho más.
              </p>
              <h2 className="title is-3 has-text-grey-dark has-text-centered">
                ¿Cómo es nuestro control de acceso de visitantes?
              </h2>
              <p className="title is-5 has-text-grey">
                Hay muchos condominios y fraccionamientos que confían la seguridad en la memoria del vigilante o un tarjetón. Después de un tiempo, es más o menos normal que conozca a todos los residentes. 
              </p>
              <p className="title is-5 has-text-grey">
                El acceso de visitas se hace mediante alguna credencial y la casa a la que dice que va. Los problemas surgen cuando una persona con malas intenciones busca burlar la seguridad. Con un sistema de control de accesos tan rudimentario, su misión de vulnerar tu condominio no le va a resultar difícil. 
              </p>
              <p className="title is-5 has-text-grey">
                Nuestro control de visitantes busca evitar a toda costa el error humano a la hora de registrar a las visitas, proveedores y personal de servicio. ¿Qué pasará el día que se enferma tu guardia que conoce a todos o simplemente consigue otro trabajo? Entonces tu fraccionamiento está en auténtico peligro. 
              </p>
              <p className="title is-5 has-text-grey">
                Con <span className="magical">Luppo</span> no es necesario utilizar la memoria. El visitante llega, pide acceso y el guardia manda una notificación al residente con tres fotografías de su visita. En un proceso que dura menos de 20 segundos, el residente, desde la comodidad de su hogar, puede revisar las tres imágenes y autorizar o rechazar la visita. 
              </p>
              <p className="title is-5 has-text-grey">
                A partir de ahí, el guardia solo tiene que esperar a que el residente del condominio le dé acceso a su visita. Gracias a esto, queda un registro digital de todas las visitas y no es necesario que el guardia apunte nada en su bitácora de registro. Si pasa alguna situación de riesgo, entonces rápidamente se pueden consultar registros por fecha, día, casa o tipo de visita.
              </p>
              <Link
                to="/caracteristicas"
                className="button is-rounded is-primary is-outlined"
                alt="Características de nuestra app de seguridad para condominios y fraccionamientos"
              >
                Todas las características y precios
              </Link>
            </div>
            <div className="column"></div>
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
