module.exports = {
	siteMetadata: {
		title: 'Luppo - App de seguridad para condominios',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',
		description: 'A Project to bootstrap your next Gatsby + Bulma site.',
		keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter`,
		twitter: 'https://twitter.com/amanhimself',
		github: `https://github.com/amandeepmittal`,
		medium: 'https://medium.com/@amanhimself',
		gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/',
		siteUrl: `https://www.example.com`,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/components/posts`
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/gatsby-icon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
			  fonts: [
				{
				  family: `Raleway`,
				  variants: [`300`, `400`, `700`]
				},
				{
				  family: `Raleway`,
				  subsets: [`latin`]
				},
				{
				  family: `Lato`,
				  variants: [`300`, `400`, `700`]
				},
				{
				  family: `Lato`,
				  subsets: [`latin`]
				},
			  ],
			},
		  }
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
