import Partner from '@/models/CostPartner'

export const usePartnerStore = defineStore('partner', {
  state: () => ({
    partners: {
      data: [],
      meta: {}
    }
  }),

  actions: {
    async getPartners () {
      this.partners = await Partner.get()
    }
  }
})
