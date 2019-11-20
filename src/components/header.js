import React from "react";
import { FaEnvelopeOpenText, FaPhoneVolume, FaBroom } from "react-icons/fa";

import "./style.scss";
import "./grid.scss";

import { Link } from "gatsby";
import Navbar from "./navbar";


const Header = ({ siteTitle }) => (
  <section className="hero is-fullheight">
    <Navbar />
    <container>
      <div className="is-overlay has-text-centered">
        <h1 className="subtitle is-4 has-text-black">
          La App de seguridad para condominios #1
        </h1>
        <h2 className="title is-1 has-text-grey-dark">LUPPO</h2>
        
      </div>
    </container>

    <container>
      <div className="hero-foot center">
        <div className="grid">
          <div className="a center-column">
            <p className="has-text-centered has-text-white">
              Seguridad y tranquilidad para tu familia las 24 horas del día.
            </p>
          </div>
          <div className="b center-column">
          <span className="icon is-medium has-text-white"><FaEnvelopeOpenText size="fa-4x" /></span>
            <p className="subtitle has-text-white is-7 has-text-centered">Notificaciones para accesos y salidas</p>
          </div>
          <div className="c center-column">
          <span className="icon is-medium has-text-white"><FaBroom size="fa-4x" /></span>
          <p className="subtitle has-text-white is-7 has-text-centered">Registro de personal de servicio</p>
          </div>
          <div className="d center-column">
          <span className="icon is-medium has-text-white"><FaPhoneVolume size="fa-4x" /></span>
          <p className="subtitle has-text-white is-7 has-text-centered">Conmutador digital para privacidad</p>
          </div>
          <div className="e center column">
            <Link to="/caracteristicas" className="button is-success is-inverted is-rounded is-outlined has-text-weight-bold">Más información</Link>
          </div>
        </div>
      </div>
    </container>
  </section>
);

export default Header;
