import { useAuthStore } from '@/store/auth'

export default defineNuxtPlugin(async () => {
  const authStore = useAuthStore()

  try {
    authStore.setAuthToken()
    await authStore.getUser()
    authStore.setAuthenticated(true)
  } catch {

  }
})
