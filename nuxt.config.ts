// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // css: ['@/assets/dont-flash.css'],
  app: {
    head: {
      link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }],
    }
  },
  devtools: { enabled: true },
  pages: true,
  ssr: true,
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  // experimental:{
  //   inlineSSRStyles: false
  // }
})
