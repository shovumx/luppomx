import React from "react";
import "./style.scss";
import "./banner.scss";
import { Link } from "gatsby";



const Banners = () => (
  <div>
    <section className="section">
      <div className="container">
        <div className="columns">
        <div className="column"></div>    
          <div className="column is-three-quarters">
              <h2 className="title is-3 has-text-grey-dark">Características</h2>
              <p className="title is-5 has-text-grey-dark">¿Sabías que el punto más débil en la seguridad de un condominio es la <span class="magical">falta de protocolos confiables de comunicación entre vigilantes y residentes?</span></p>
              <p className="title is-5 has-text-grey">Nosotros te ofrecemos solucionar eso con una app que te permita aprobar o rechazar visitas desde tu celular, recibir llamadas sin que tu teléfono lo conozca el personal de seguridad para mantener tu privacidad, grabar las llamadas para que sepas quién autorizó, registrar visitas recurrentes o personal de servicio. Eso y mucho más.</p>
              <Link to="/caracteristicas" class="button is-rounded is-primary is-outlined">Todas las características y precios</Link>
          </div>
          <div className="column"></div>          
        </div>
      </div>     
    </section>
  </div>
);

export default Banners;


