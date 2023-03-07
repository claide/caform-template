import CostCategory from '@/models/CostCategory'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: {
      data: [],
      meta: {}
    }
  }),

  actions: {
    async getCategories() {
      this.categories = await CostCategory
        .params({
          limit: 30,
          page: this.categories.meta.current_page
        })
        .get()
    },
    async updateOrCreateCategory(form) {
      const category = new CostCategory(form)
      return await category.save()
    },
    async setMeta(meta = {}) {
      this.categories.meta = {
        ...this.categories.meta,
        ...meta
      }
      await this.getCategories()
    }
  },
})
