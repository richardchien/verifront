module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { 'http-equiv': 'cleartype', content: 'on' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png', sizes: '16x16' },
      { rel: 'manifest', href: '/favicons/manifest.json' },
      { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'stylesheet', href: 'https://fonts.proxy.ustclug.org/css?family=VT323' }
    ]
  },
  css: [
    '~assets/css/highlight.css',
    '~assets/css/theme.css',
    '~assets/css/transition.css'
  ],
  transition: {
    name: 'page',
    mode: 'out-in'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2f71d3' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  vendor: ['axios'],
  router: {
    extendRoutes (routes, resolve) {
      // route custom pages
      routes.push({
        name: 'customPage',
        path: '*',
        component: resolve(__dirname, 'pages/_customPage.vue')
      })
    }
  }
}
