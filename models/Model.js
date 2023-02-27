import { Model as BaseModel } from 'vue-api-query'
import _ from 'lodash'
import { useAuthStore } from '@/store/auth'

export default class Model extends BaseModel {
  // Define a base url for a REST API
  baseURL () {
    return ''
  }

  // Implement a default request method
  async request (config) {
    const auth = useAuthStore()

    const data = await this.$http(config.url, {
      headers: {
        Authorization: `Bearer ${auth.token}`
      },
      method: config.method,
      body: this.getBody(config)
    })

    return { data }
  }

  getBody (config) {
    if (config.data instanceof FormData) {
      return config.data
    }
    if (config.data) {
      return _.mapValues(config.data)
    }
  }
}
