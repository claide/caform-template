import { defineStore } from "pinia";

export const usePartnerStore = defineStore('partner', {
  state: () => ({
    partners: {
      data: [],
      meta: {}
    }
  }),

  actions: {
    async getPartners () {
      this.partners = await fetch('https://my.api.mockaroo.com/cost_partners.json?key=2a320bd0')
        .then((response) => response.json())
        .catch((err) => console.log('err', err))

      return this.partners
    }
  }
})
