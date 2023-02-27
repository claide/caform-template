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
    </div>

    <AdminCategoriesTable />
    <AdminPagination
      v-model="categoryStore.categories.meta.current_page"
      :from="categoryStore.categories.meta.from"
      :to="categoryStore.categories.meta.to"
      :total="categoryStore.categories.meta.total"
    />
  </section>
</template>

<script setup>
import { useCategoryStore } from "@/store/categories";

definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});

useHead({
  title: "Categories",
});

const categoryStore = useCategoryStore();
</script>
