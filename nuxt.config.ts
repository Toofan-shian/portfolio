// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@nuxtjs/google-fonts',
  ],
  runtimeConfig: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  }
})
