const path = require('path')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')

const { createApolloFetch } = require('apollo-fetch')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:/]+/g) || []
  }
}

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'CENTRSTAGE | Live Music Anywhere',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Get your band out there.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#98202a' },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: [require('tailwindcss')('./tailwind.js'), require('autoprefixer')],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.plugins.push(
        new PurgecssPlugin({
          paths: glob.sync([
            path.join(__dirname, './pages/**/*.vue'),
            path.join(__dirname, './layouts/**/*.vue'),
            path.join(__dirname, './components/**/*.vue')
          ]),
          extractors: [
            {
              extractor: TailwindExtractor,
              extensions: ['vue']
            }
          ],
          whitelist: ['html', 'body', 'nuxt-progress']
        })
      )
    }
  },
  css: ['~/assets/sass/style.scss'],
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  modules: ['@nuxtjs/apollo', '@nuxtjs/redirect-module'],
  plugins: ['~/plugins/filters'],
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },
  redirect: [
    { from: '^/streams', to: '/videos', statusCode: 301 },
    { from: '^/streams/(.*)$', to: '/videos/$1' }
  ],
  generate: {
    subFolders: false,
    routes: function() {
      const staticRoutes = []

      const GRAPHCMS_API =
        'https://api-euwest.graphcms.com/v1/cjmi83q8227ho01b9abzzxgrw/master'
      const apolloFetch = createApolloFetch({ uri: GRAPHCMS_API })
      const query = `
        query allStreamSlugs {
          streams {
            slug
          }
        }
        `

      return apolloFetch({ query })
        .then(result => {
          const { data } = result
          const streamRoutes = data.streams.map(
            stream => '/videos/' + stream.slug
          )

          return staticRoutes.concat([...streamRoutes])
        })
        .catch(error => {
          console.log('Something went wrong.', error)
        })
    }
  }
}
