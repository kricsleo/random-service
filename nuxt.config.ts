import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Open API',
      "meta": [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' }
      ],
    }
  },

  routeRules: {
    '/**': { cors: true }
  },

  modules: [
    '@unocss/nuxt',
    '@nuxt/content'
  ],

  components: false,
  compatibilityDate: '2024-12-29',
})