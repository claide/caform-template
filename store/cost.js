import { defineStore } from "pinia";

export const useCostStore = defineStore('cost', {
  state: () => ({
    costs: {
      data: [],
      meta: {}
    }
  }),

  actions: {
    async getCosts () {
      this.costs = await fetch('https://my.api.mockaroo.com/costs.json?key=2a320bd0')
        .then((response) => response.json())
        .catch((err) => console.log('err', err))

      return this.costs
    }
  }
})
