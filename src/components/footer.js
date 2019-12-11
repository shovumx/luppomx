import React from "react";
import { Link } from "gatsby";
import { FaFacebook } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";
import "./style.scss";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            facebook
          }
        }
      }
    `}
    render={data => (
      <footer className="footer center has-background-light">
        <div className="content has-text-centered">
          <div className="columns is-mobile is-marginless heading has-text-weight-bold">
            <div className="column left">

              <Link
                  to="/caracteristicas"
                  className="navbar-item has-text-black"
                >
                  Características
                </Link>
            </div>
            <div className="column center">

            <Link to="/blog" className="navbar-item has-text-black">
                Blog
              </Link>
</div>

            
            <div className="column right">

              <Link to="/contacto" className="navbar-item has-text-black">
                Contacto
              </Link>
            </div>
          </div>
          <p className="is-size-7">
            Luppo - La mejor app de control de visitas para condominios y fraccionamientos. Todos los derechos
            reservados. 2019. Tel/Whatsapp: 442 131 9447.
          </p>
          <p className="is-size-7">Diseño web hecho por <a href="https://equilibrio.studio">Equilibrio.Studio.</a></p>

          <article className="media center">
            <span className="icon">
              <a href={data.site.siteMetadata.facebook}>
                <FaFacebook size="fa-2x" color="blue" />
              </a>
            </span>
          </article>
        </div>
      </footer>
    )}
  />
);

export default Footer;
