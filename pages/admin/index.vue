<template>
  <section class="py-8">
    <div class="lg:flex lg:items-center lg:justify-between">
      <div class="min-w-0 flex-1">
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
  </section>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const onFilterUpdated = (value, key) => {
  console.log("value", value);
};
</script>
