const path = require(`path`)
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://cristin.io',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    siteUrl: siteUrl,
    title: `Cristin O'Connor | Front End Software Engineer`,
    author: `Cristin O'Connor`,
    jobTitle: `Front End Software Engineer`,
    description: `Front End Engineer Cristin O'Connor's Portfolio, Blog, and CV Site`,
    twitter: `@cnocon`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134680170-1",
        head: false,
        exclude: ["/preview**"],
        pageTransitionDelay: 0,
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "cristin.io",
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `G-QXLV7NSLT1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-source-buttercms`,
      options: {
        authToken: process.env.GATSBY_BUTTER_API_KEY,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CRISTINIO`,
        short_name: `CRISTINIO`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#5ec5ed`,
        display: `standalone`,
        icon: `src/images/square-portrait.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://cristin.io',
        sitemap: 'https://cristin.io/sitemap.xml',
        resolveEnv: () => process.env.NETLIFY_ENV,
        env: {
          production: {
            policy: [{
              userAgent: '*',
              allow: ['/', '/static/']
            }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `cristin-io-1`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto:300,400,700,900`,
          `oswald:300,400,700`,
          `lato:300,400,700,900`,
        ],
        display: 'block'
      }
    },
  ],
}
