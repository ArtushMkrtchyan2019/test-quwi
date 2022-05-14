export default {
  head: {
    title: 'test-quwi',
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

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxt/http'
  ],

  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },
  axios: {
    baseURL: 'https://api.quwi.com/v2/'
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true
        },
        user: {
          property: 'user'
        },
        endpoints: {
          login: { url: 'auth/login', method: 'post' },
          logout: { url: 'auth/logout', method: 'post' },
          user: { url: 'auth/init', method: 'get' }
        }
      }
    }
  }
}
