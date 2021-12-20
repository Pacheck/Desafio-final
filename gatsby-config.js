module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Desafio Final',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'alldata',
        fieldName: 'alldata',
        url: 'https://api-sa-east-1.graphcms.com/v2/ckx7mwp5y064s01z38jo02hc6/master',
      },
    },
  ],
};
