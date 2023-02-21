import { defineStore } from "pinia";

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: {
      data: [],
      meta: {}
    }
  }),

  actions: {
    async getCategories () {
      this.categories = await fetch('https://my.api.mockaroo.com/cost_categories.json?key=2a320bd0')
        .then((response) => response.json())
        .catch((err) => console.log('err', err))

      return this.categories
    }
  }
})
