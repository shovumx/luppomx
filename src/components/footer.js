import React from "react";
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
          <p className="is-size-5">
            Luppo - App de seguridad para condominios. Todos los derechos
            reservados. 2019
          </p>

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
