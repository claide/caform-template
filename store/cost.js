import Cost from '@/models/Cost'

export const useCostStore = defineStore('cost', {
  state: () => ({
    costs: {
      data: [],
      meta: {}
    }
  }),

  actions: {
    async getCosts () {
      this.costs = await Cost.include('partner').get()
    }
  }
})
