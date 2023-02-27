export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    isAuthenticated: false
  }),

  actions: {
    setAuthenticated (isAuth) {
      this.isAuthenticated = isAuth
    },
    setAuthToken () {
      this.token = localStorage.getItem('auth.token')
    },
    async login (body) {
      const { data } = await useBaseFetch('/cost/login', {
        method: 'POST',
        body
      })
      this.user = data.user
      this.token = data.access_token
      this.setAuthenticated(true)
      localStorage.setItem('auth.token', this.token)
    },
    async getUser () {
      const data = await useBaseFetch('/cost/me', {
        method: 'POST'
      })
      this.user = data
    },
    async logout () {
      await useBaseFetch('/cost/logout', {
        method: 'POST'
      })
      this.user = null
      this.token = null
      this.setAuthenticated(false)
      localStorage.removeItem('auth.token')
    }
  }
})
