import { Model } from 'vue-api-query'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  Model.$http = $fetch.create({
    baseURL: config.public.apiBase
  })
})
