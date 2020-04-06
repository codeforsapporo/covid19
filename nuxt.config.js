/* eslint-disable */
module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'keyword',
        name: 'keyword',
        content: 'JUST道IT, 北海道, 札幌市, 新型コロナウイルス, COVID-19, 感染者数, 患者数'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: '503748220262414'
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: '@just_douit'
      },
      {
        hid: 'twitter:player',
        property: 'twitter:player',
        content: '@just_douit'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon-precomposed.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~assets/global.scss',
    '~~/font/dist/css/materialdesignicons.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '@/plugins/vue-chart.js',
      ssr: true
    },
    {
      src: '@/plugins/vue-apexchart.js',
      ssr: false
    },
    '@/plugins/datetime-formatter.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // まだlintエラーを解消していないので一旦はずしておく
    // '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics'
  ],
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    ['@nuxtjs/moment', ['ja']],
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected'
        },
        locales: [
          {
            code: 'ja',
            name: '日本語',
            iso: 'ja-JP',
            file: 'ja.i18n.json'
          },
          {
            code: 'en',
            name: 'English',
            iso: 'en-US',
            file: 'en.i18n.json'
          },
          {
            code: 'zh-cn',
            name: '简体中文',
            iso: 'zh-CN',
            file: 'zh-cn.i18n.json'
          },
          {
            code: 'zh-tw',
            name: '繁體中文',
            iso: 'zh-TW',
            file: 'zh_TW.i18n.json'
          },
          {
            code: 'ko',
            name: '한국어',
            iso: 'ko-KR',
            file: 'ko.i18n.json'
          },
          {
            code: 'th',
            name: 'ไทย',
            iso: 'th-TH',
            file: 'th.i18n.json'
          },
          {
            code: 'vi',
            name: 'Tiếng Việt',
            iso: 'vi-VN',
            file: 'vi.i18n.json'
          },
          {
            code: 'ja-basic',
            name: 'やさしい にほんご',
            iso: 'ja-JP',
            file: 'ja-Hira.i18n.json'
          }
        ],
        defaultLocale: 'ja',
        vueI18n: {
          fallbackLocale: 'ja',
          formatFallbackMessages: true
        },
        vueI18nLoader: true,
        lazy: true,
        langDir: './assets/locales/'
      }
    ],
    'nuxt-svg-loader'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.NODE_ENV === "production" ? "/api/" : "https://stopcovid19-dev.hokkaido.dev/api/"
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   * test
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {},
    defaultAssets: false
  },
  googleAnalytics: {
    id: 'UA-159982743-1'
  },
   /*
  ** Build configuration
  */
   //build: {
   //  vendor : ['vue-apexchart'],

     /*
     ** You can extend webpack config here
     */
//    extend (config, ctx) {
  //  }
  //},
  manifest: {
    "name": "北海道 新型コロナウイルスまとめサイト",
    "theme_color": "#1268d8",
    "background_color": "#ffffff",
    "display": "standalone",
    "Scope": "/",
    "start_url": "/",
    "splash_pages": null
  },

  generate: {
    fallback: true,
    routes() {
      const locales = ['ja', 'en', 'zh-cn', 'zh-tw', 'th', 'vi', 'ko', 'ja-basic']
      const pages = [
        '/cards/contacts',
        '/cards/current-patients',
        '/cards/discharges-summary',
        '/cards/inspections',
        '/cards/patients',
        '/cards/patients-summary',
        '/cards/querents'
      ]

      const routes = []
      locales.forEach(locale => {
        pages.forEach(page => {
          if (locale === 'ja') {
            routes.push(page)
            return
          }
          const route = `/${locale}${page}`
          routes.push(route)
        })
      })
      return routes
    }
  },
  // /*
  // ** hot read configuration for docker
  // */
  watchers: {
    webpack: {
      poll: true
    }
  },
  env: {
    NODE_ENV: process.env.NODE_ENV
  }
}
