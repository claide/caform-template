import { defineStore } from "pinia";

import CostCategory from '@/models/CostCategory'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: {
      data: [],
      meta: {}
    }
  }),

  actions: {
    async getCategories () {
      this.categories = await CostCategory.get()
    }
  }
})
