module.exports = {
  siteMetadata: {
    title: 'Lita & the Globe',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "markdown-pages",
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfig: `src/utils/typography`
      }
    }
  ]
}
