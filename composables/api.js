import { useAuthStore } from '@/store/auth'

export const useBaseFetch = (url, options = {}) => {
  const config = useRuntimeConfig()
  const auth = useAuthStore()
  const apiFetch = $fetch.create({ baseURL: config.public.apiBase })

  return apiFetch(url, {
    headers: {
      Authorization: `Bearer ${auth.token}`,
      Accept: 'application/json'
    },
    ...options
  })
}
