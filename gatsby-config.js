// module.exports = {
//   siteMetadata: {
//     title: `Gatsby Default Starter`,
//     description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
//     author: `@gatsbyjs`,
//   },
//   plugins: [
//     `gatsby-plugin-react-helmet`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `images`,
//         path: `${__dirname}/src/images`,
//       },
//     },
//     `gatsby-transformer-sharp`,
//     `gatsby-plugin-sharp`,
//     {
//       resolve: `gatsby-plugin-manifest`,
//       options: {
//         name: `gatsby-starter-default`,
//         short_name: `starter`,
//         start_url: `/`,
//         background_color: `#663399`,
//         theme_color: `#663399`,
//         display: `minimal-ui`,
//         icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
//       },
//     },
//     // this (optional) plugin enables Progressive Web App + Offline functionality
//     // To learn more, visit: https://gatsby.dev/offline
//     // `gatsby-plugin-offline`,
//   ],
// }
module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
    description: `A simple description about pandas eating lots...`,
    author: `gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
// module.exports = {
//   siteMetadata: {
//     title: `Pandas Eating Lots`,
//   },
//   plugins: [
//     {
//       resolve: `gatsby-plugin-manifest`,
//       options: {
//         name: `GatsbyJS`,
//         short_name: `GatsbyJS`,
//         start_url: `/`,
//         background_color: `#6b37bf`,
//         theme_color: `#6b37bf`,
//         // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
//         // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
//         display: `standalone`,
//         icon: `src/images/icon.png`, // This path is relative to the root of the site.
//       },
//     },
//     `gatsby-transformer-remark`,
//     `gatsby-plugin-offline`,
//   ],
// }
