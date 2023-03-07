import { defineNuxtConfig } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      titleTemplate: '%s - Cost Application Form',
      title: 'Cost Application Form',
      meta: [
        { name: 'description', content: 'Take control of your costs like a boss and unleash your costs administration potential' }
      ],
    }
  },

  css: [
    '@/assets/scss/style.scss',
  ],

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image-edge',
    '@pinia/nuxt',
  ],

  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', './type.d.ts'],
      },
    },
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  colorMode: {
    preference: 'system',
    classSuffix: '',
    fallback: 'light',
    storageKey: 'color-mode',
  },

  tailwindcss: {
    configPath: './tailwind.config.js',
  },

  // image: {
  //   // The screen sizes predefined by `@nuxt/image`:
  //   screens: {
  //     xs: 320,
  //     sm: 640,
  //     md: 768,
  //     lg: 1024,
  //     xl: 1280,
  //     xxl: 1536,
  //     '2xl': 1536
  //   },
  //   presets: {
  //     avatar: {
  //       modifiers: {
  //         format: 'jpg',
  //         width: 50,
  //         height: 50
  //       }
  //     }
  //   }
  // },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    logLevel: 'info',
  },

  build: {
    transpile: ['@vuepic/vue-datepicker']
  },

  runtimeConfig: {
    public: {
      apiBase: '' // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },

  plugins: [
    '@/plugins/auth',
    '@/plugins/dayjs',
    '@/plugins/vue-api-query'
  ]
})
