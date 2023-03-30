<template>
  <div class="px-2 lg:px-0">
    <div
      class="-mx-4 mt-8 shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg"
    >
      <table
        class="min-w-full text-sm divide-y dark:divide-[#2B333F] text-dark dark:text-slate-400"
      >
        <thead class="bg-gray-50 dark:bg-[#212737] dark:text-slate-400">
          <tr>
            <th
              scope="col"
              class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6 w-12"
            ></th>
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left text-sm font-semibold sm:table-cell"
            >
              Code
            </th>
            <th
              scope="col"
              class="px-3 py-3.5 text-left text-sm font-semibold md:w-72"
            >
              <span class="hidden lg:block">Name</span>
              <span class="lg:hidden">Details</span>
            </th>
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left text-sm font-semibold lg:table-cell md:w-72"
            >
              Parent
            </th>
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left text-sm font-semibold lg:table-cell"
            >
              Total USD
            </th>
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left text-sm font-semibold lg:table-cell"
            >
              Total GBP
            </th>
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left text-sm font-semibold lg:table-cell"
            >
              Total EURO
            </th>
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left text-sm font-semibold md:table-cell"
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
            v-for="category in categoryStore.categories.data"
            :key="category.id"
            class="bg-white border-b dark:bg-[#121A29] dark:border-[#2B333F]"
          >
            <td
              class="w-12 max-w-0 py-3 pl-4 pr-3 text-sm text-gray-500 dark:text-[#818692] sm:w-auto sm:max-w-none sm:pl-6"
            >
              {{ category.id }}
            </td>
            <td
              class="hidden sm:table-cell px-3 py-3 text-sm text-gray-500 dark:text-[#818692]"
            >
              {{ category.code }}
            </td>
            <td class="px-3 py-3 text-sm font-medium">
              <span class="dark:text-white">{{ category.name }}</span>
              <dl class="lg:hidden font-normal">
                <dt class="sr-only md:hidden">Code</dt>
                <dd
                  class="mt-1 truncate text-xs text-gray-500 dark:text-[#818692] md:hidden"
                >
                  Code: {{ category.code }}
                </dd>
                <dd
                  class="mt-1 truncate text-xs text-gray-500 dark:text-[#818692] lg:hidden"
                >
                  Parent:
                  <span v-if="category.parent">
                    {{ category.parent.code }}
                    <span v-if="category.parent.code && category.parent.name">
                      -
                    </span>
                    {{ category.parent.name }}
                  </span>
                </dd>
                <dd
                  class="mt-1 truncate text-xs text-gray-500 dark:text-[#818692] lg:hidden"
                >
                  Total USD: 1,200
                </dd>
                <dd
                  class="mt-1 truncate text-xs text-gray-500 dark:text-[#818692] lg:hidden"
                >
                  Total GBP: 1,200
                </dd>
                <dd
                  class="mt-1 truncate text-xs text-gray-500 dark:text-[#818692] lg:hidden"
                >
                  Total EURO: 1,200
                </dd>
              </dl>
            </td>
            <td
              class="hidden px-3 py-3 text-sm text-gray-500 dark:text-[#818692] lg:table-cell"
            >
              <span v-if="category.parent">
                {{ category.parent.code }}
                <span v-if="category.parent.code && category.parent.name">
                  -
                </span>
                {{ category.parent.name }}
              </span>
            </td>
            <td class="hidden lg:table-cell"></td>
            <td class="hidden lg:table-cell"></td>
            <td class="hidden lg:table-cell"></td>

            <td
              class="hidden px-3 py-3 text-sm text-gray-500 dark:text-[#818692] md:table-cell"
            >
              {{ category.createdAt }}
            </td>
            <td class="px-3 py-3 text-sm text-gray-500 dark:text-[#818692]">
              <AdminCategoriesManageDropdown
                @edit="onCategoryEdit"
                @remove="onCategoryDelete"
                :item="category"
              />
            </td>
          </tr>
        </tbody>
        <tfoot
          class="bg-gray-50 dark:bg-[#212737] hidden lg:table-footer-group"
        >
          <tr class="font-semibold text-dark dark:text-slate-400">
            <th scope="row" class="px-6 py-3 text-base">Total</th>
            <td class="px-6 py-3"></td>
            <td class="px-6 py-3"></td>
            <td class="px-6 py-3"></td>
            <td class="px-6 py-3">$21,000</td>
            <td class="px-6 py-3">£21,000</td>
            <td class="px-6 py-3">€21,000</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>

    <ConfirmModal ref="confirmModal" />
  </div>
</template>

<script setup>
import { useCategoryStore } from "@/store/categories";
import ConfirmModal from "@/components/modals/ConfirmModal";

const categoryStore = useCategoryStore();
const confirmModal = ref(null);

const emit = defineEmits(["edit"]);

const onCategoryEdit = (category) => {
  emit("edit", category);
};

const onCategoryDelete = async (category) => {
  const confirmed = await confirmModal.value.show(
    "Are you sure to delete this category?"
  );

  if (confirmed) {
    try {
      await category.delete();
      await categoryStore.getCategories();
    } catch {}
  }
};

onMounted(() => {
  categoryStore.getCategories();
});
</script>
