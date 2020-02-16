module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Play Now, Laugh Forever | Fonloto',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

    script: [
      { src: '/js/jquery.js' },
      { src: '/js/popper.min.js' },
      { src: '/js/bootstrap.min.js' },
      { src: '/js/jquery-modal-video.min.js' },
      { src: '/js/waypoints.min.js' },
      { src: '/js/wow.min.js' },
      { src: '/js/jquery.nicescroll.min.js' },
      { src: '/js/owl.carousel.min.js' },
      { src: '/js/main.js' },
      { src: '/js/custom/index.js' }
    ],

    bodyAttrs: {
      class: 'index2'
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/Preloader.vue',
  /*
   ** Global CSS
   */
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/fontawesome.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
