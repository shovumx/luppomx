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
      imageOne: file(relativePath: { eq: "images/control_accesos_visitas.png" }) {
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
      imageTwo: file(relativePath: { eq: "images/app_control_accesos.jpg" }) {
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
      imageThree: file(relativePath: { eq: "images/consejos_seguridad_condominio.jpg" }) {
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
        <title>
        ¿Cómo llevar el control de accesos de un condominio? | Luppo{" "}
        </title>
        <meta
          name="description"
          content="Elaborar un protocolo de control de accesos en tu condiminio puede ayudarte a evitar problemas de seguridad serios. Te damos varios consejos para hacerlo."
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
                ¿Cómo llevar el{" "}
                <span className="magical">
                  control de accesos de un condominio?
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
                fluid={data.imageOne.childImageSharp.fluid}
                alt="Crear control de accesos de visitas en condominios"
              />

              <p className="is-size-5">
                Es una de las situaciones recurrentes cuando instalamos nuestra
                app para el control de accesos de visitas en algún condominio.
                Terminamos, probamos el sistema, dejamos las guías y nos
                preguntan qué hacer cuando el residente no responde a la
                notificación de petición de ingreso de un visitante.{" "}
              </p>
              <p className="is-size-5">
                &quot;¿Y si no responde ni en la app ni por el
                conmutador?&quot;, nos preguntan. La respuesta no la tenemos
                nosotros, porque es decisión de cada condominio hacer un
                protocolo de acceso, pero siempre tratamos de compartir nuestras
                ideas desde nuestra experiencia.{" "}
              </p>
              <p className="is-size-5">
                &quot;En nuestro condominio, si no responde por ninguna de las
                dos vías, simplemente no pasa&quot;, respondemos como ley
                absoluta.{" "}
              </p>
              <p className="is-size-5">
                Por eso decidimos escribir esta guía para ayudar a todas las
                personas que administran algún condominio o fraccionamiento a
                establecer su control de accesos para visitantes, proveedores y
                personal de servicio.{" "}
              </p>
              <h2 className="is-size-3 has-text-centered">Seguridad, enemiga de la eficiencia</h2>
              
              <p className="is-size-5">
                Toda la vida nos pasamos buscando maneras de volver <Link to="https://es.wikipedia.org/wiki/Hip%C3%B3tesis_del_mercado_eficiente" aria-label="Eficencia en los controles de visitantes">volver todo más eficiente</Link>. El transporte, los negocios, la educación. En
                general, eficiencia es ahorro de tiempo y esfuerzo, y, por
                tanto, de aumento de productividad.{" "}
              </p>
              <p className="is-size-5">
                Sin embargo, cuando se trata de pensar en protocolos de
                seguridad, no hay que ser eficientes.{" "}
              </p>
              <p className="is-size-5">
                &quot;¿Qué pasa si no contestan <Link to="/" aria-label="APP para controlar tus visitas">el conmutador o la app</Link> y se
                hacen filas?&quot;. Pasa que los visitantes tienen que esperar
                para poder entrar a tu condominio y no es el fin del mundo.{" "}
              </p>
              <p className="is-size-5">
                Si alguien está vigilando tu condominio para cometer una
                ilegalidad, lo va a pensar dos veces cuando se dé cuenta de que
                son muy quisquillosos en su control de accesos de visitantes.{" "}
              </p>
              <Img
                fluid={data.imageTwo.childImageSharp.fluid}
                alt="APP para el control de accesos de visitas en fraccionamientos"
              />
              <h2 className="is-size-3 has-text-centered">Los guardias, tus mejores aliados</h2>
              <p className="is-size-5">
                No trates mal a los guardias. Si una de tus visitas tiene
                problemas para entrar o no lo dejan pasar en 20 segundos, no te
                enojes con ellos.{" "}
              </p>
              <p className="is-size-5">
                En esta ocasión fue un conocido tuyo. En la siguiente podría ser
                alguien haciéndose pasar por conocido tuyo para robar mientras
                tú no estás en tu casa.{" "}
              </p>
              <p className="is-size-5">
                Si los tratas bien y encuentras la manera de darles incentivos
                de vez en cuando, la rotación de elementos no será tan seguido.
                De esta manera, evitarás enfrentarte a la curva de aprendizaje
                de tu protocolo de seguridad cada tres semanas.{" "}
              </p>
              
              <h2 className="is-size-3 has-text-centered">
                Alguien tiene que diseñar el control de acceso de visitantes
              </h2>
              <p className="is-size-5">
                No esperes a que la empresa de seguridad te diseñe tu protocolo
                de accesos para visitas. O tal vez sí, si es una empresa de alto
                nivel que cobra muchos miles de pesos al mes y que está formada
                por auténticos especialistas en la materia.{" "}
              </p>
              <p className="is-size-5">
                Si no tienes el privilegio de ser uno de los pocos condominios
                con ese sistema de seguridad y contratas una empresa genérica,
                entonces alguien de tu condominio tiene que tomar esa
                responsabilidad.{" "}
              </p>
              <p className="is-size-5">
                Puede ser el administrador, pero si es la Mesa Directiva, mejor.
                ¿Por qué? Porque el administrador es alguien al que se le paga
                por administrar y tú eres un cliente más.{" "}
              </p>
              <p className="is-size-5"> 
                En cambio, en la Mesa Directiva está la gente que vive en el
                condominio y quieren que el lugar donde está su familia sea lo
                más seguro posible. Y, claro, sería ideal involucrar a la mayor
                cantidad posible de vecinos.{" "}
              </p>
              <Img
                fluid={data.imageThree.childImageSharp.fluid}
                alt="Consejos para el control de accesos de visitas en condominios"
              />
              <h2 className="is-size-3 has-text-centered">
                Algunos consejos para el protocolo de control de accesos para tu
                condominio{" "}
              </h2>
              <p className="is-size-5">
                A continuación te presentamos una lista práctica de consejos que
                a nosotros y nuestros clientes les ha funcionado para aumentar
                en poco tiempo la seguridad de su condominio.{" "}
              </p>
              <p className="is-size-5">
                Pero, como ya te mencionamos, lo mejor es que recurras a los
                residentes y entre todos den con las mejores soluciones y
                discutan estos puntos.{" "}
              </p>
              <h3 className="is-size-5 has-text-centered"> Duda y acertarás</h3>
              <p className="is-size-5">
                Ante la menor duda, los guardias tienen que dudar y desconfiar.
                Más valen dos minutos perdidos corroborando información, que una
                situación de inseguridad por lamentar.{" "}
              </p>
              <p className="is-size-5">
                Si no responden en la app o en el conmutador, simplemente no
                pasa. Así sea alguien conocido. ¿Sabías que la mayor parte del
                robo a casa-habitación es por gente conocida?{" "}
              </p>
              <p className="is-size-5">
                Bueno, pues esa persona que ya se te hace conocida y que quiere
                volver a visitar a su &quot;amigo&quot;, bien podría ser ese
                conocido que lo va a traicionar y que le va a arruinar unos
                buenos meses de su vida.{" "}
              </p>
              <p className="is-size-5">Repetimos: si no hay autorización, no pasa. </p>
              <h3 className="is-size-5 has-text-centered">¿Payasos? Sí... ¿y? </h3>
              <p className="is-size-5">
                No tiene nada de malo ser payaso. Si vives en un condominio
                seguro, es muy problable que visitantes y residentes te digan
                que son bien payasos en la caseta.{" "}
              </p>
              <p className="is-size-5">
                Esto no es malo. Si tu guardia duda, no lo regañes. Al
                contrario: está haciendo bien su chamba. Si la persona no sabe
                bien el número de casa a la que va y no lo dejan pasar, ¿qué
                hizo mal tu guardia?{" "}
              </p>
              <p className="is-size-5">
                habrá quien no lo tome con tan buena filosofía porque el
                invitado rechazado es su invitado, pero que no nuble tu visión y
                no te dejes contagiar.{" "}
              </p>
              <p className="is-size-5">
                Si en tu condominio no son payasos los guardias, lo que están
                diciendo es que tu condominio simple y sencillamente es
                inseguro.{" "}
              </p>
              <h3 className="is-size-5 has-text-centered">No escatimen en seguridad </h3>
              <p className="is-size-5">
                Un buen sistema de cámaras para un condominio de 100 casas puede
                costar 120,000 ó 150,000 pesos. ¿Es mucho dinero? Sí. ¿Es
                importante gastarlo? Doble sí.{" "}
              </p>
              <p className="is-size-5">
                Piensa que las cámaras de seguridad con alarmas y micrófonos son
                un gran elemento de disuasión.{" "}
              </p>
              <p className="is-size-5">
                Si cada casa, mediante una Asamblea Extraordinaria, tiene que
                poner 2 mil pesos y asegurarse de tener 15 cámaras en su
                perímetro... ¿De verdad no vale la pena hacer ese gasto por la
                tranquilidad de dormir en un condominio con tantas cámaras?{" "}
              </p>
              
              <h3 className="is-size-5 has-text-centered">La tecnología avanza todos los días </h3>
              <p className="is-size-5">
                Es increíble la cantidad de avances tecnológicos en el día a
                día. Hace cinco años, pensar en una cámara que pueda pintar una
                línea y alertar cuando una persona la pase era algo carísimo.{" "}
              </p>
              <p className="is-size-5">
                Hoy ya no. Hoy ya una cámara de gama media puede hacerlo. Hoy ya
                se puede consultar los vídeos por internet{" "}
              </p>
              <p className="is-size-5"> 
                Es una buena idea que, si tu circuito de cámaras lleva mucho
                tiempo sin actualizarse, aproveches para consultar algún
                especialista que te pueda decir qué cosas nuevas hay en el
                mercado y{" "}
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
