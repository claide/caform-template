<template>
  <AppModal ref="modal">
    <template #title>Cost breakdowns</template>
    <div class="px-6 pb-6">
      <div
        class="-mx-4 mt-8 shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg"
      >
        <table v-if="cost" class="min-w-full text-sm divide-y text-dark">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="hidden px-3 py-3.5 text-left text-xs font-semibold sm:table-cell"
              >
                Title
              </th>
              <th
                scope="col"
                class="hidden lg:table-cell px-3 py-3.5 text-left text-xs font-semibold"
              >
                Amount
              </th>
              <th
                scope="col"
                class="hidden md:table-cell px-3 py-3.5 text-left text-xs font-semibold"
              >
                Currency
              </th>
              <th
                scope="col"
                class="hidden px-3 py-3.5 text-left text-xs font-semibold sm:table-cell"
              >
                Category
              </th>
              <th
                scope="col"
                class="hidden px-3 py-3.5 text-left text-xs font-semibold sm:table-cell"
              >
                Period
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="breakdown in cost.breakdowns"
              :key="breakdown.id"
              class="bg-white border-b"
            >
              <td
                class="hidden sm:table-cell p-2 text-sm text-gray-500 dark:text-[#818692]"
              >
                {{ breakdown.title }}
              </td>
              <td
                class="hidden sm:table-cell p-2 text-sm text-gray-500 dark:text-[#818692]"
              >
                {{ breakdown.amount }}
              </td>
              <td
                class="hidden sm:table-cell p-2 text-sm text-gray-500 dark:text-[#818692]"
              >
                {{ breakdown.currency }}
              </td>
              <td
                class="hidden sm:table-cell p-2 text-sm text-gray-500 dark:text-[#818692]"
              >
                <span v-if="breakdown.category">
                  {{ breakdown.category.code }}
                  <span
                    v-if="breakdown.category.code && breakdown.category.name"
                  >
                    -
                  </span>
                  {{ breakdown.category.name }}
                </span>
              </td>
              <td
                class="hidden sm:table-cell p-2 text-sm text-gray-500 dark:text-[#818692]"
              >
                {{ breakdown.period_from }}
                <span v-if="breakdown.period_from && breakdown.period_to"
                  >to</span
                >
                {{ breakdown.period_to }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AppModal>
</template>

<script setup>
const modal = ref(null);

const props = defineProps({
  cost: {
    type: Object,
    default() {
      return {};
    },
  },
});

const show = (opened = true) => {
  modal.value.show(opened);
};

defineExpose({
  show,
});
</script>
