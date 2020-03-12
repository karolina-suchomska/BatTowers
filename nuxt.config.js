
export default {
  mode: 'spa',
  head: {
    htmlAttrs: {
      lang: 'pl'
    },
    title: process.env.npm_package_name || '',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no'
      },
      {
        name: 'author',
        content: 'Karolina'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'images/favicon.ico'
      }
    ]
  },
  loading: {
    color: '#fff'
  },
  manifest: {
    icons: [
      {
        src: 'images/favicon.ico',
        sizes: '192x192',
        type: 'image/ico'
      }
    ]
  },
  css: [
    '@/assets/sass/main.scss'
  ],
  plugins: [
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  buildModules: [
    '@nuxtjs/eslint-module'
  ]
}
