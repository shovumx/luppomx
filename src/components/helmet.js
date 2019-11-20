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
				<html lang="es" />
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
            <meta property="og:title" content="Luppo - App de seguridad para condominios" />
            <meta property="og:description" content="La mejor APP de seguridad para condominios. Gestiona de manera segura accesos y salidas de las personas que visitan tu casa." />
            <meta property="og:image" content="http://myawesomewebsite.com/facebookimage.png" />
            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="http://luppo.mx/" />
            <meta property="twitter:title" content="Luppo - App de seguridad para condominios" />
            <meta property="twitter:description" content="La mejor APP de seguridad para condominios. Gestiona de manera segura accesos y salidas de las personas que visitan tu casa." />
            <meta property="twitter:image" content="http://myawesomewebsite.com/twitterimage.png" />

			</Helmet>
		)}
	/>
);
