<template>
  <section class="py-8">
    <div class="md:flex md:items-center md:justify-between">
      <div class="min-w-0 flex-1 px-2 lg:px-0">
        <h2
          class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-white"
        >
          Costs
        </h2>
        <div
          class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-4"
        >
          <div class="mt-2 flex items-center text-sm text-gray-500">
            <div class="mt-1 w-full">
              <AdminCostsStatusSelector
                @update:model-value="onFilterUpdated($event, 'status')"
              />
            </div>
          </div>
          <div class="mt-2 flex items-center text-sm text-gray-500">
            <div class="mt-1 w-full">
              <AdminCostsPaymentSelector
                @update:model-value="onFilterUpdated($event, 'payment')"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5 flex lg:mt-0 lg:ml-4">
        <AdminCostsMenuDropdown />
      </div>
    </div>

    <AdminCostsTable />
    <AdminPagination />
  </section>
</template>

<script setup>
import { useCostStore } from "@/store/cost";

definePageMeta({
  layout: "admin",
});

const costStore = useCostStore();

const onFilterUpdated = (value, key) => {
  console.log("value", value);
};
</script>
