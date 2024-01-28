// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: true,
    },
  ],
  app: {
    pageTransition: { name: 'rotate' },
    head: {
      title: '',
      meta: [
        { charset: 'utf-8' },
        { name: '', content: '' }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
          //src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js",
        },
        {
          src: "https://kit.fontawesome.com/4e1914be33.js",
        }
      ],
    }
  },
  modules: [
    '@nuxt/image',
    'nuxt-icon',
    'vue3-carousel-nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        Mitr: {
          wght: [300, 500, 700],
          ital: [100]
        },
      }
    }],
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  css: [
    '@/assets/scss/app.scss',
    "@/assets/scss/custom.scss",
    //"@/assets/scss/soft-ui-dashboard.scss",
    "@/assets/css/main.css",

  ],
  plugins: [
    { src: './plugins/useBootstrap.client.ts', mode: 'client' },


  ]

})
