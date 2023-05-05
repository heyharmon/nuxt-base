// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: true, 
  
  modules: [
    'nuxt-icon',
    'nuxt-headlessui',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
    ['@pinia/nuxt', {autoImports: ['defineStore', 'acceptHMRUpdate']}]
  ],

  components: [
    '~/components',
    {path: '~/components/Admin'},
    {path: '~/components/Base'},
    {path: '~/components/Block'},
    {path: '~/components/Editor'},
  ],

  imports: {
    dirs: ['stores'],
  },

  devtools: {
    enabled: false,
  },

  headlessui: {
    prefix: 'Headless' // Change the default component prefix
  },

  css: [
    '@/assets/css/main.css'
  ],
  
  // build: {
  //   postcss: {
  //     postcssOptions: {
  //       plugins: {
  //         tailwindcss: {},
  //         autoprefixer: {},
  //       },
  //     },
  //   },
  // }
})
