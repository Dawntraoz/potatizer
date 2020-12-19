export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Potato mood | Potatizer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Generate your potato mood randomly with this without sense app',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Generate your potato mood randomly with this without sense app',
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Potatizer' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Potato mood | Potatizer',
      },
      { name: 'msapplication-TileColor', content: '#a3e635' },
      { name: 'theme-color', content: '#a3e635' },
      {
        hid: 'image',
        property: 'image',
        content: '/social-card-potatizer.jpg',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/social-card-potatizer.jpg',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'og:publish_date',
        name: 'publish_date',
        property: 'og:publish_date',
        content: '2020-12-19T00:00:00-0500',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://potatizer.dawntraoz.com',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: '/favicon-16x16.png',
      },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icon.png' },
      { rel: 'mask-icon', color: '#a3e635', href: '/safari-pinned-tab.svg' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  pwa: {
    manifest: {
      name: 'Potatizer',
      short_name: 'Potatizer',
      lang: 'en',
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      theme_color: '#a3e635',
      background_color: '#a3e635',
      display: 'standalone',
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  generate: {
    fallback: true,
  },
}
