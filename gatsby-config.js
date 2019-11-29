module.exports = {
  siteMetadata: {
    title: "App para registrar visitas en condominios y fraccionamientos | Luppo",
    author: "Luppo APP",
    description:
      "La mejor APP de seguridad para condominios en México. Permite gestionar de manera segura los accesos y salidas de las personas que visitan tu condominio. Y mucho más.",
    siteUrl: "https://luppo.mx",
    facebook: "https://facebook.com/"
  },
  pathPrefix: "/luppo",
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-netlify`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
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
        name: "Makefolio",
        short_name: "Makefolio",
        start_url: "/",
        background_color: "#2980b9",
        theme_color: "#2980b9",
        display: "standalone",
        icon: "src/images/gatsby-icon.png",
        orientation: "portrait"
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-150522236-1"
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
          }
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
