module.exports = {
  siteMetadata: {
    title: `Bore Ecosystem: Your Gateway to Remittance, Crypto/Fiat Exchange & Real Gold Cashout`,
    description: `Explore Bore Ecosystem, a one-stop solution for all your financial needs. With Bore Exchange, Bore Money app, and OBB Token, enjoy seamless money transfers, trade crypto, and even cash out your tokens for real gold custodied in Africa. Dive into a secure, efficient, and innovative financial platform tailored for the modern world.`,
    author: `@r-ichard`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -70
      }
    }
  ],
}
