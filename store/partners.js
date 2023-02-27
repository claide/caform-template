import Partner from '@/models/CostPartner'

export const usePartnerStore = defineStore('partner', {
  state: () => ({
    partners: {
      data: [],
      meta: {}
    }
  }),

  actions: {
    async getPartners() {
      this.partners = await Partner
        .params({
          limit: 30,
          page: this.partners.meta.current_page
        })
        .get()
    },
    async setMeta(meta = {}) {
      this.partners.meta = {
        ...this.partners.meta,
        ...meta
      }
      await this.getPartners()
    }
  }
})
