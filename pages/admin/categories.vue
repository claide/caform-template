<template>
  <section class="py-8">
    <div class="md:flex md:items-center md:justify-between">
      <div class="min-w-0 flex-1 px-2 lg:px-0">
        <h2
          class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-white"
        >
          Categories
        </h2>
      </div>
      <div class="mt-5 flex lg:mt-0 lg:ml-4 px-2 lg:px-0">
        <button
          @click="addNewCategory"
          class="bg-[#6158CD] px-4 py-3 rounded-full text-sm font-medium hover:bg-[#5045ca] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 flex items-center text-white"
        >
          <PlusIcon class="w-5 h-5 mr-1" />
          Add new
        </button>
      </div>
    </div>

    <AdminCategoriesTable @edit="onCategoryEdit" />
    <AdminPagination
      @update:modelValue="onPageChanged"
      v-model="categoryStore.categories.meta.current_page"
      :pages="categoryStore.categories.meta.last_page"
      :from="categoryStore.categories.meta.from"
      :to="categoryStore.categories.meta.to"
      :total="categoryStore.categories.meta.total"
    />

    <ModalsCategoryModal :category="selectedCategory" ref="addCategory" />
  </section>
</template>

<script setup>
import { PlusIcon } from "@heroicons/vue/24/outline";
import { useCategoryStore } from "@/store/categories";

definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});

useHead({
  title: "Categories",
});

const categoryStore = useCategoryStore();
const addCategory = ref(null);
const selectedCategory = ref(null);

const onPageChanged = (page) => {
  categoryStore.setMeta({ current_page: page });
};

const addNewCategory = () => {
  addCategory.value.show();
};

const onCategoryEdit = (category) => {
  selectedCategory.value = category;
  addCategory.value.show();
};
</script>
