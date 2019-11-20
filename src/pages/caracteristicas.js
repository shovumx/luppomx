import React from "react";
import Helmet from "../components/helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {
  FaKey,
  FaCodeBranch,
  FaExclamationCircle,
  FaUserClock,
  FaEnvelopeOpenText,
  FaTruck,
  FaFileSignature,
  FaUsers,
  FaUserShield,
  FaUserSecret,
  FaPhoneVolume,
  FaClipboard
} from "react-icons/fa";
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
      imageTwo: file(relativePath: { eq: "images/informacion.jpg" }) {
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
      imageThree: file(
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
      <Helmet>
        <title>Características | App de seguridad para condominios</title>
        <meta name="description" content="Nuestra app de seguridad para condominios es ideal para gestionar entradas y salidas de visitas, proveedores y personal de servicio que visitan regularmente tu casa."></meta>
        <meta name="robots" content="index,follow"></meta>
      </Helmet>
      <Navbar />
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-three-quarters">
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
            <div className="column shake">
              <article className="message">
                <div className="message-header bg1">
                  <p>
                    Token digital{" "}
                    <span className="icon is-large has-text-white">
                      <FaCodeBranch />
                    </span>
                  </p>
                </div>
                <div class="message-body">
                  Uno de los momentos más vulnerables en la seguridad de un
                  condominio es cuando una persona caminando o en un taxi llega
                  a la caseta diciendo que es residente y que por favor le
                  permitan el acceso apelando a la memoria de tu personal de
                  seguridad. ¿Cómo saber que realmente lo es? En nuestra app
                  tenemos un novedoso sistema de token gráfico que le permitirá
                  a tu guardia saber si efectivamente es un residente o si se
                  trata de algún impostor listo para cometer algún delito en tu
                  condominio.
                </div>
              </article>
            </div>
            <div className="column shake">
              <article className="message">
                <div className="message-header bg2">
                  <p>
                    Botón de pánico silencioso{" "}
                    <span className="icon is-large has-text-white">
                      <FaExclamationCircle />
                    </span>
                  </p>
                </div>
                <div class="message-body">
                  Algo grave ocurrió. Alguien está intentando entrar por la
                  fuerza a tu condominio o, peor aún, ya lo hicieron. Nuestra
                  app de seguridad para condominios le permite a la caseta
                  detonar un botón de pánico para avisar inmediatamente a los
                  residentes que hay un problema de seguridad para que tomen las
                  medidas pertinentes. Si en la caseta no se percataron del
                  problema, cualquier vecino puede hacerlo. Por seguridad del
                  que detona la alarma, en su celular no sonaría nada, alertando
                  únicamente a los vecinos para que tomen cartas en el asunto.
                </div>
              </article>
              <Img
                fluid={data.imageOne.childImageSharp.fluid}
                alt="Sistema de seguridad para condominios"
              />
            </div>
            <div className="column shake">
              <article className="message">
                <div className="message-header bg3">
                  <p>
                    Control total de tus visitas{" "}
                    <span className="icon is-large has-text-white">
                      <FaUserClock />
                    </span>
                  </p>
                </div>
                <div class="message-body">
                  En un condominio de 100 casas, el promedio de entradas y
                  salidas de personas fluctúa alrededor de las 1,300 diarias. El
                  procentaje más alto corresponde a los residentes, luego siguen
                  las visitas sociales, los proveedores y el personal de
                  servicio. Nuestra app permite tener un control total de toda
                  esa cantidad de gente que entra y sale de tu condominio.
                  Gracias a esto, ninguna de estas personas podrá entrar sin que
                  algún residente le haya dado permiso para hacerlo con
                  notificaciones que envían fotos de cara, placas e
                  indentificación.
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="columns">
            <div className="column shake">
              <article className="message">
                <div className="message-header bg4">
                  <p>
                    Gestión de paquetería{" "}
                    <span className="icon is-large has-text-white">
                      <FaEnvelopeOpenText />
                    </span>
                  </p>
                </div>
                <div class="message-body">
                  La paquetería puede convertirte en un auténtico problema de
                  organización, pero también de seguridad. Hay empresas de
                  paquetería comerciales que tienen camionetas bien
                  identificadas, pero hay otras menos conocidas que bien podrían
                  ser un particular buscando una oportunidad maliciosa. Con
                  nuestra app puedes recibir toda tu paquetería en la caseta de
                  vigilancia e informarle inmediatamente al residente que le
                  llegó algo. Cuando vaya a recogerlo, quedará registro de su
                  identificación para evitar reclamos hacia tu personal de
                  seguridad.
                </div>
              </article>
            </div>
            <div className="column shake">
              <article className="message">
                <div className="message-header bg5">
                  <p>
                    Proveedores y personal de servicio{" "}
                    <span className="icon is-large has-text-white">
                      <FaTruck />
                    </span>
                  </p>
                </div>
                <div class="message-body">
                  Te ofrecemos un sistema de registro del personal de servicio y
                  proveedores que visitan regularmente tu condominio. La primera
                  vez que llegan se toman una fotografía de rostro y de su
                  identificación oficial. Para la segunda vez que llega a
                  trabajar, tu guardia solo tendrá que comparar el rostro de la
                  persona y su identificación con la que tiene guardada en el
                  sistema y podrá registrar la llegada y la salida sin ningún
                  problema.
                </div>
              </article>
              <Img
                fluid={data.imageTwo.childImageSharp.fluid}
                alt="APP para mantener seguro un condominio"
              />
            </div>
            <div className="column shake">
              <article className="message">
                <div className="message-header bg6">
                  <p>
                    Informe de seguridad{" "}
                    <span className="icon is-large has-text-white">
                      <FaFileSignature />
                    </span>
                  </p>
                </div>
                <div class="message-body">
                  Cada semana recibirás en tu correo electrónico un informe con
                  todos los datos relacionados a tus visitas, proveedores y
                  personal de servicio. El administrador y personal de seguridad
                  tendrán acceso todo el tiempo a este registro, así que ante
                  cualquier duda, ellos podrán corroborar en un par de clics
                  todas las visitas relacionadas con una casa o, si es
                  necesario, la del condominio.
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="columns">
            <div className="column shake">
              <article className="message">
                <div className="message-header bg2">
                  <p>
                    Toda tu familia{" "}
                    <span className="icon is-large has-text-white">
                      <FaUsers />
                    </span>
                  </p>
                </div>
                <div class="message-body">
                  No importa cuántas personas vivan en tu casa. En nuestra app
                  tú podrás registrar a todos los miembros de la casa. Así, si
                  un día estás en una junta, de viaje o en el cine, y no puedes
                  estar atento al celular, algún otro miembro de la familia
                  puede gestionar los permisos de entrada a tu casa. Además,
                  queda registrado el nombre de quién fue la persona de tu casa
                  que autorizó, para que cuando revises tu informe de seguridad,
                  no haya ninguna confusión.
                </div>
              </article>
            </div>
            <div className="column shake">
              <article className="message">
                <div className="message-header bg4">
                  <p>
                    Visitas pre-autorizadas{" "}
                    <span className="icon is-large has-text-white">
                      <FaUserShield />
                    </span>
                  </p>
                </div>
                <div class="message-body">
                  Si tienes una reunión o fiesta, puedes dar de alta en la
                  aplicación el nombre de estas personas para no esperar a tu
                  autorización durante ese día cuando comiencen a llegar a tu
                  evento. El guardia de seguridad solo tendrá que cotejar los
                  nombres con la identificación que le entreguen. Si se trata de
                  visitas recurrentes como tu familia o amistades cercanas, las
                  puedes dar de alta de manera permanenente y, no importa el
                  día, nunca necesitarán del proceso de autorización.
                </div>
              </article>
              <Img
                fluid={data.imageThree.childImageSharp.fluid}
                alt="App para permitir el acceso a visitas"
              />
            </div>
            <div className="column shake">
              <article className="message">
                <div className="message-header bg6">
                  <p>
                    Privacidad al máximo{" "}
                    <span className="icon is-large has-text-white">
                      <FaUserSecret />
                    </span>
                  </p>
                </div>
                <div class="message-body">
                  Uno nunca sabe con certeza quién llega a trabajar a tu
                  condominio o cómo se va a ir cuando termine la relación
                  laboral. ¿Sabes lo peligroso que es darle acceso a nombres,
                  números de casa y teléfonos? Si alguien se roba esa lista o
                  por despecho deciden dar mal uso, la vulnerabilidad del
                  condominio es mayúscula con esos datos. Nuestra app está hecha
                  para que los guardias de seguridad nunca tengan acceso a tu
                  nombre o número de teléfono. Para ellos simplemente eres un
                  número de casa.
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-three-quarters">
              <h1 className="is-size-1 has-text-centered">
                ¿Cuáles son nuestros{" "}
                <span className="magical">paquetes y precios?</span>
              </h1>
            </div>
            <div className="column"></div>
          </div>
        </div>

        <div className="container">
          <div className="columns">
            <div className="column shake">
              <article className="message">
                <div className="message-header bg4">
                  <p>
                    1. Gestión de accesos y salidas{" "}
                    <span className="icon is-large has-text-white">
                      <FaKey />
                    </span>
                  </p>
                </div>
                <div class="message-body">
                  Gestiona desde la comodidad de tu celular -vía la app o el bot
                  con inteligencia artificial- todos los accesos a tu casa
                  (visitas, proveedores, personal de servicio), así como tu
                  paquetería. Con este servicio también tendrás acceso a tu
                  Token Digital y al botón de pánico silencioso.
                  <p className="has-text-black">
                    <span className="magical">$20 pesos al mes por casa</span>
                  </p>
                </div>
              </article>
            </div>
            <div className="column shake">
              <article className="message">
                <div className="message-header bg5">
                  <p>
                    2. Conmutador digital{" "}
                    <span className="icon is-large has-text-white">
                      <FaPhoneVolume />
                    </span>
                  </p>
                </div>
                <div class="message-body">
                  Tu personal de seguridad solo necesita un celular para hacer
                  uso de nuestro novedoso conmutador digital. De esta forma,
                  cuando quiera hablarte, solo necesitará escribir tu número de
                  casa y nuestro sistema se encarga de que la llamada llegue a
                  tu casa o celular sin ningún problema.
                  <p className="has-text-black">
                    <span className="magical">+$10 pesos al mes por casa</span>
                  </p>
                </div>
              </article>
            </div>
            <div className="column shake">
              <article className="message">
                <div className="message-header bg6">
                  <p>
                    3. Administración inteligente{" "}
                    <span className="icon is-large has-text-white">
                      <FaClipboard />
                    </span>
                  </p>
                </div>
                <div class="message-body">
                  ¿Batallan para la gestión de cuotas de mantenimiento o agua?
                  Nosotros te podemos ayudar a conectar nuestra app con tu
                  cuenta de banco para que registre automáticamente los
                  depósitos, así nada más tienes que corroborar de que se trata
                  de la casa en cuestión y listo. Con esto se puede consultar el
                  estado de ingresos y egresos del condominio al momento y sin
                  necesidad de actualizarlo. También se puede programar un envío
                  mensual automático del resumen del mes.
                  <p className="has-text-black">
                    <span className="magical">+$5 pesos al mes por casa</span>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
