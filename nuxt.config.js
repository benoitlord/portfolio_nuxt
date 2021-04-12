export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    routes: [
      'en/portfolio/as_des_jeux',
      'en/portfolio/ordi',
      'en/portfolio/accordeon',
      'en/portfolio/john_cage',
      'en/portfolio/randonnee',
      'en/portfolio/alimentation',
      'en/portfolio/boutique_techno',
      'en/portfolio/devil_bot',
      'en/portfolio/cowboys_fringants',
      'en/portfolio/fast',
      'en/portfolio/hockey',
      'en/portfolio/sagesse',
      'en/portfolio/exo',
      'en/portfolio/matthew_carter',
      'en/portfolio/timeline',
      'en/portfolio/guitarbox',
      'en/portfolio/vision',
      'en/portfolio/paix_confiance',
      'en/portfolio/atonal',
      'en/portfolio/calanca',
      'en/portfolio/tous_des_oiseaux',
      'en/portfolio/vegane',
      'en/portfolio/parking_challenge',
      'en/portfolio/carte',
      
      'fr/portfolio/as_des_jeux',
      'fr/portfolio/ordi',
      'fr/portfolio/accordeon',
      'fr/portfolio/john_cage',
      'fr/portfolio/randonnee',
      'fr/portfolio/alimentation',
      'fr/portfolio/boutique_techno',
      'fr/portfolio/devil_bot',
      'fr/portfolio/cowboys_fringants',
      'fr/portfolio/fast',
      'fr/portfolio/hockey',
      'fr/portfolio/sagesse',
      'fr/portfolio/exo',
      'fr/portfolio/matthew_carter',
      'fr/portfolio/timeline',
      'fr/portfolio/guitarbox',
      'fr/portfolio/vision',
      'fr/portfolio/paix_confiance',
      'fr/portfolio/atonal',
      'fr/portfolio/calanca',
      'fr/portfolio/tous_des_oiseaux',
      'fr/portfolio/vegane',
      'fr/portfolio/parking_challenge',
      'fr/portfolio/carte'
    ]
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/bhq7awz.css' },
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.5.1.min.js",
        type: "text/javascript",
        integrity: "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
        crossorigin: "anonymous"
      },
      {
        src: "https://code.jquery.com/ui/1.12.1/jquery-ui.js",
        type: "text/javascript",
        integrity: "sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30=",
        crossorigin: "anonymous"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    ['nuxt-i18n', {
      strategy: 'prefix',
      defaultLocale: 'en'
    }],
  ],

  i18n: {
    strategy: 'prefix',
       useCookie: true,
    // Cookie name
    cookieKey: 'i18n_redirected',
    // Set to always redirect to value stored in the cookie, not just once
    vueI18nLoader: true,
    locales: [{
        code: 'en',
        name: 'English',
        iso: 'en-CA',
        file: 'en.js'
      },
      {
        code: 'fr',
        name: 'Français',
        iso: 'fr-CA',
        file: 'fr.js'
      }
    ],
    lazy: true,
    loadedLanguages :['en','fr'],
    langDir: 'lang/',
    defaultLocale: "en",
    fallbackLocale: 'en',
    fallbackRoot: true,
    silentTranslationWarn: true,
    silentFallbackWarn: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
