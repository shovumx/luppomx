import React from "react";
import {
  FaKey,
  FaComments,
  FaUserLock,
  FaHourglassStart,
  FaAtom,
  FaRocket
} from "react-icons/fa";

import "./style.scss";
import "./columns.scss";

const Midsection = () => (
  <div>
    <section className="section">

      <div className="container">
        <div className="columns">
          <div className="column shake">
            <article className="notification one">
              <span className="icon is-large has-text-black">
                <FaKey />
              </span>
              <p className="is-size-3">ID Digital </p>
              <p className="is-size-5">
                Cada residente tiene una identificación digital que cambia con
                el tiempo. Gracias a esto, el personal de seguridad puede
                corroborar fácilmente que es residente aunque venga caminando o
                en Uber.{" "}
              </p>
            </article>
          </div>
          <div className="column shake">
            <article className="notification two">
              <span className="icon is-large has-text-black">
                <FaComments />
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
                <FaRocket />
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
      </div>
      <div className="container">
        <div className="columns">
          <div className="column shake">
            <article className="notification four">
              <span className="icon is-large has-text-black">
                <FaUserLock />
              </span>
              <p className="is-size-3">100% Privado </p>              
              <p className="is-size-5">
                Nuestra plataforma y conmutador digital funcionan de tal manera
                que los guardias nunca tienen acceso a información vital que, en
                malas manos, puede volverse un auténtico peligro.
              </p>
            </article>
          </div>
          <div className="column shake">
            <article className="notification five">
              <span className="icon is-large has-text-black">
                <FaHourglassStart />
              </span>
              <p className="is-size-3">Eficiencia</p>
              <p className="is-size-5">
                Evita con nuestra app llamadas y mensajes al administrador para
                tareas rutinarias como consultar tu saldo, pre-autorizar
                visitas, registrar a tu personal de servicio y preguntar por tu
                paquetería.{" "}
              </p>
            </article>
          </div>
          <div className="column shake">
            <article className="notification six">
              <span className="icon is-large has-text-black">
                <FaAtom />
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
      </div>
    </section>
  </div>
);

export default Midsection;
