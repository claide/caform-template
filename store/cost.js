import Cost from '@/models/Cost'
import ApplicantCost from '@/models/ApplicantCost'

export const useCostStore = defineStore('cost', {
  state: () => ({
    filters: {
      status: '',
      payment_method: ''
    },
    costs: {
      data: [],
      meta: {}
    }
  }),

  actions: {
    async getCosts() {
      this.costs = await Cost.include(
        'breakdowns.category',
        'partner',
        'invoiceFiles'
      )
        .orderBy('-created_at')
        .where('status', this.filters.status)
        .where('payment_method', this.filters.payment_method)
        .params({
          limit: 30,
          page: this.costs.meta.current_page
        })
        .get()
    },
    async setMeta(meta = {}) {
      this.costs.meta = {
        ...this.costs.meta,
        ...meta
      }
      return await this.getCosts()
    },
    async createCost(form) {
      const cost = new ApplicantCost(form)
      return await cost.save()
    }
  }
})
