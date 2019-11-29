import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
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
      imageOne: file(relativePath: { eq: "images/SistemaAdministrativo.jpg" }) {
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
      imageTwo: file(relativePath: { eq: "images/Seguridad.jpg" }) {
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
      <Helmet>
        <title>Revisa tu protocolo de emergencias para condominios</title>
        <meta
          name="description"
          content="El protocolo de emergencias sirve para actuar de manera adecuada en tu condominio cuando cada minuto que pasa es fundamental para evitar que pase a mayores."
        ></meta>
        <meta name="robots" content="index,follow"></meta>
      </Helmet>

      <Navbar />
      <section>
        <div className="container">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-four-fifths">
              <h1 className="is-size-1 has-text-centered">
                ¿Ya lo conoces? Revisa el{" "}
                <span className="magical">
                  protocolo de seguridad de tu condominio
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
            <div className="column is-three-quarters">
              <Img
                fluid={data.imageTwo.childImageSharp.fluid}
                alt="Protocolos de seguridad para condominios"
              />

              <p className="is-size-5">
                Generalmente no se piensa en el{" "}
                <strong>protocolo de emergencias</strong> hasta que... sucede
                una emergencia en tu condominio. Entonces, ante el impacto
                propio de una situación extraordinaria, hay que sumarle la
                confusión por no saber qué hacer para buscar una pronta solución
                o al menos ayudar.{" "}
              </p>

              <p className="is-size-5">
                Pensemos tres casos donde el tiempo es fundamental para evitar
                un problema mayor. ¿Tu empresa de seguridad tiene protocolos de
                emergencia para hacer frente a estas situaciones?
              </p>

              <h2 className="is-size-3 has-text-centered">
                Protocolo de emergencia en un condominio en casos de salud
              </h2>

              <p className="is-size-5">
                <em>Caso 1.</em> Lunes diez de la mañana. Un vecino comienza a
                sentirse mal. Es ese dolor en el pecho que luego se va al brazo
                izquierdo gritando que lo que sigue es un infarto. El reloj
                avanza.{" "}
              </p>

              <p className="is-size-5">
                ¿Qué hacer ante esto? Puedes seguir la vía tradicional de llamar
                tú a una ambulancia y esperar a que llegue. Sin embargo, muchas
                empresas de seguridad tienen convenios con ambulancias que les
                aseguran tiempos de respuesta más rápidos a los tradicionales.{" "}
              </p>

              <p className="is-size-5">
                ¿La empresa que tienes contratada es una de ellas? Cuando hay
                una situación donde cada minuto es fundamental, saber
                exáctamente lo que tienes que hacer es oro puro. Si los
                residentes tienen que gestionar su propio protocolo de
                emergencia ante un problema de salud, entonces que así sea. Pero
                evitemos que la persona que está intentando ayudar no sepa si
                recurrir al 911 o llamar a la caseta de vigilancia.{" "}
              </p>

              <h2 className="is-size-3 has-text-centered">
                Protocolo de emergencia de seguridad ya vulnerada
              </h2>
              <p className="is-size-5">
                <em>Caso 2</em>. Hay gente sospechosa tratando de entrar a una
                casa del condominio. El personal de vigilancia en la caseta no
                detectó nada sospechoso, así que las personas tuvieron permitido
                el acceso y están intentando por todos los medios cumplir la
                meta de robar.
              </p>
              <p className="is-size-5">
                ¿Cuál es el protocolo detallado de actuación ante esto?
                Generalmente, que el guardia se acerque a corroborar la
                situación. ¿Y luego? ¿Qué hacer cuando tiene confirmación de que
                de hecho está sucediendo algo malo? ¿Qué sigue a partir de ahí?
                ¿Hace frente a la situación? ¿Se retira y busca hacer contacto
                con la seguridad pública.{" "}
              </p>
              <p className="is-size-5">
                Es muy importante que todo esto quede muy claro y detallado. Si,
                de acuerdo a lo que como condominio han acordado y debatido, no
                es lo que esperan, es importante que hablen con la empresa de
                seguridad para que ajuste sus protocolos de actuación con base
                en lo que el condominio necesita.{" "}
              </p>

              <Img
                fluid={data.imageOne.childImageSharp.fluid}
                alt="Revisión del protocolo de seguridad de tu condominio"
              />

              <h2 className="is-size-3 has-text-centered">
                Protocolo de emergencia en un fraccionamiento ante amenaza
                inevitable
              </h2>

              <p className="is-size-5">
                <em>Caso 3.</em> Llega gente armada a la caseta de vigilancia.
                No tienen la intención de disimular o engañar al guardia. Vienen
                armados y, con amenazas e insultos, quieren que la caseta sea la
                menor resistencia posible.{" "}
              </p>
              <p className="is-size-5">
                ¿Qué hace el guardia en estos casos? ¿Se encierra y espera que
                las rejas del condominio o plumas sirvan como barrera de
                contención? ¿Hace frente? ¿Los deja pasar?{" "}
              </p>
              <p className="is-size-5">
                Este es el caso más drástico que nadie quiere vivir. Así que es
                importante reflexionar sobre cada directriz del protocolo y ver
                sus probables consecuencias. Si el guardia no está armado e
                intenta hacer frente a los delincuentes, lo más probable es que
                salga herido de muerte. Por otro lado, si los deja entrar. ¿Qué
                es lo que va a hacer una vez que estén dentro? ¿Tiene algún
                contacto especial para tener rápidamente refuerzos policiales?
              </p>

              <h2 className="is-size-3 has-text-centered">
                Programa una junta con la empresa de seguridad
              </h2>
              <p className="is-size-5">
                Toma tiempo y a veces estamos muy ocupados, pero es muy
                importante reunirse cada determinado tiempo con la empresa de
                seguridad para analizar protocolos y preguntar sobre posibles
                mejoras que estén implementando en tu conodominio.{" "}
              </p>
              <p className="is-size-5">
                Más vale invertir unas horas de tu tiempo, a luego lamentarte
                por ver vulnerada la seguridad de tu condominio o sufrir de una
                emergencia de salud que pueda tener consecuencias trágicas.
                ¿Cuánto tiempo vale la tranquilidad de tu familia? Y reuerda, cuenta con nosotros como tus mejores alidados con nuestra               <Link
                to="/"
                className="is-primary"
                alt="App de seguridad para condominios y fraccionamientos"
              >
                app de seguridad para condominios y fraccionamientos.
              </Link>{" "}
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
