import React from "react";
import Helmet from "../components/helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MyForm from "../components/formulario";


import "../components/style.scss";

export default () => (
  <div>
         <Helmet>
        <title>APP para el control de visitas en condominios | Contacto</title>
        <meta name="description" content="¿Quieres una cotización o resolver dudas? Con gusto podemos platicarte sobre nuestra app y todas las ventajas de seguridad que tiene."></meta>
        <meta name="robots" content="index,follow"></meta>
      </Helmet>
      <Navbar />
    <div>
      <section className="section sa">
        <div className="container">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-three-quarters">
              <h2 className="title is-size-2 has-text-centered has-text-weight-bold">
                ¿Quieres más información sobre nosotros?
              </h2>
              <MyForm />
            </div>
            <div className="column"></div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);
