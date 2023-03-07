<template>
  <div class="relative overflow-x-auto">
    <table
      class="min-w-full text-sm divide-y divide-[#2B333F] text-dark dark:text-slate-400"
    >
      <thead class="bg-gray-50 dark:bg-[#212737] dark:text-slate-400">
        <tr>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">
            Category
          </th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">
            Title
          </th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">
            Currency
          </th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">
            Amount
          </th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">
            Period
          </th>
          <th
            scope="col"
            class="px-3 py-3.5 text-left text-sm font-semibold"
          ></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in breakdowns"
          :key="index"
          class="bg-white border-b dark:bg-[#121A29] dark:border-[#2B333F]"
        >
          <td class="p-2 text-sm font-medium">
            {{ item.cost_category_id }}
          </td>
          <td class="p-2 text-sm font-medium">
            {{ item.title }}
          </td>
          <td class="p-2 text-sm font-medium">
            {{ item.currency }}
          </td>
          <td class="p-2 text-sm font-medium">
            {{ item.amount }}
          </td>
          <td class="p-2 text-sm font-medium">
            {{ item.period_from }} - {{ item.period_to }}
          </td>
          <td class="p-2 text-sm font-medium align-middle">
            <div class="flex items-center">
              <button
                @click.prevent="updateBreakdown(item)"
                class="p-1 inline-flex border rounded-full text-purple-700 border-purple-700 mr-1"
              >
                <PencilIcon class="h-3 w-3" />
              </button>
              <button
                @click.prevent="deleteBreakdown(index)"
                class="p-1 inline-flex border rounded-full text-red-700 border-red-700"
              >
                <XMarkIcon class="h-3 w-3" />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { XMarkIcon, PencilIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  breakdowns: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["edit"]);

const deleteBreakdown = (index) => {
  props.breakdowns.splice(index, 1);
};

const updateBreakdown = (item) => {
  emit('edit', item)
};
</script>
