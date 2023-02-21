<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="px-2 lg:px-0">
    <div
      class="-mx-4 mt-8 shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg"
    >
      <table
        class="min-w-full text-sm divide-y divide-gray-300 text-dark dark:text-gray-400"
      >
        <thead class="bg-gray-50 dark:bg-[#3b3a4a] dark:text-gray-400">
          <tr>
            <th
              scope="col"
              class="hidden py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6 lg:table-cell"
            ></th>
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left text-sm font-semibold sm:table-cell"
            >
              Code
            </th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">
              <span class="hidden sm:block">Name</span>
              <span class="sm:hidden">Details</span>
            </th>
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left text-sm font-semibold lg:table-cell"
            >
              Parent
            </th>
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left text-sm font-semibold sm:table-cell"
            >
              Date Created
            </th>
            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span class="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="category in categoryStore.categories"
            :key="category.id"
            class="bg-white border-b dark:bg-[#232234] dark:border-gray-700"
          >
            <td
              class="hidden w-full max-w-0 py-3 pl-4 pr-3 text-sm text-gray-500 sm:w-auto sm:max-w-none sm:pl-6 lg:table-cell"
            >
              {{ category.id }}
            </td>
            <td class="hidden sm:table-cell px-3 py-3 text-sm text-gray-500">
              {{ category.code }}
            </td>
            <td class="px-3 py-3 text-sm font-medium">
              {{ category.name }}
              <dl class="lg:hidden font-normal">
                <dt class="sr-only md:hidden">Code</dt>
                <dd class="mt-1 truncate text-xs text-gray-500 md:hidden">
                  {{ category.code }}
                </dd>
              </dl>
            </td>
            <td class="hidden px-3 py-3 text-sm text-gray-500 lg:table-cell">
              {{ category.parent }}
            </td>
            <td class="hidden px-3 py-3 text-sm text-gray-500 sm:table-cell">
              {{ category.date_created }}
            </td>
            <td class="px-3 py-3 text-sm text-gray-500">
              <AdminCategoriesManageDropdown />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useCategoryStore } from "@/store/categories";

const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.getCategories();
});
</script>
