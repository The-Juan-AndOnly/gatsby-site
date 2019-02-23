/* eslint-disable no-undef */
/* eslint-disable max-len */

require('dotenv').config({
  path: `.env.${ process.env.NODE_ENV }`
})
module.exports = {
  siteMetadata: {
    title: `Vince's Cheesesteaks`,
    description: `Vince's Cheesesteaks: Lehigh Valley food truck catering and Lehigh Valley steak shops in Downtown Allentown and Lynnville!`,
    author: `@vincessteaks`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,

        path: `${ __dirname }/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`PT Serif`, `Roboto`]
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: process.env.ACCESS_TOKEN
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
}
