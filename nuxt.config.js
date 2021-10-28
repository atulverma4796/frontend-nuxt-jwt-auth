export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jwtauth',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
router:{
  middleware:[
    'clearValidationError'
  ]
},
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "./plugins/mixins/validation.js",
    "./plugins/axios.js"
  ],
  auth:{
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/login',
            method: 'post',
            propertyName: 'token',
          },
          user: {
            url: 'me',
            method: 'get',
            propertyName: 'data',
          },
          logout: 'logout',
          method: 'get',
        },
      },
    },
    redirect: {
      login: '/auth/login',
      home: '/',
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:"http://localhost:8000/api"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCss:true,
    extend(config,ctx){}
  
  }
}
