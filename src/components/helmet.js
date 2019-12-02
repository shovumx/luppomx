import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

export default () => (
	<StaticQuery
		query={graphql`
			query helmetQuery {
				site {
					siteMetadata {
						title
						author
						description
						
					}
				}
			}
		`}
		render={data => (
			<Helmet>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
				/>
				<meta name="description" content={data.site.siteMetadata.description} />
				
				<title>{data.site.siteMetadata.title}</title>
				<html lang="es-MX" />
				{/* Google / Search Engine Meta Tags */}
				<meta itemprop="name" content={data.site.siteMetadata.author} /> />
				<meta
					itemprop="description"
					content={data.site.siteMetadata.description}
				/>
				
				<meta name="robots" content="index,follow"></meta>
				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
            <meta property="og:url" content="https://luppo.mx/" />
            <meta property="og:title" content="APP para el control de visitas en condominios | Luppo" />
            <meta property="og:description" content="La mejor APP de seguridad para controlar de manera segura los accesos y salidas de las personas que visitan tu condominio. Y mucho más." />
            <meta property="og:image" content="https://luppo.mx/static/eb282bb1cebfd3a6c7f39c034b8b3a35/c9f2a/SistemaAdministrativo.jpg" />
            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://luppo.mx/" />
            <meta property="twitter:title" content="APP para el control de visitas en condominios | Luppo" />
            <meta property="twitter:description" content="La mejor APP de seguridad para controlar de manera segura los accesos y salidas de las personas que visitan tu condominio. Y mucho más." />
            <meta property="twitter:image" content="https://luppo.mx/static/eb282bb1cebfd3a6c7f39c034b8b3a35/c9f2a/SistemaAdministrativo.jpg" />

			</Helmet>
		)}
	/>
);
