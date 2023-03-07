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
                @update:model-value="onFilterUpdated($event, 'payment_method')"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5 flex lg:mt-0 lg:ml-4">
        <AdminCostsMenuDropdown
          @exportPayments="exportPayment"
          @exportInvoices="exportInvoices"
        />
      </div>
    </div>

    <AdminCostsTable />
    <AdminPagination
      @update:modelValue="onPageChanged"
      v-model="costStore.costs.meta.current_page"
      :pages="costStore.costs.meta.last_page"
      :from="costStore.costs.meta.from"
      :to="costStore.costs.meta.to"
      :total="costStore.costs.meta.total"
    />
  </section>
</template>

<script setup>
import { useCostStore } from "@/store/cost";

definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});

useHead({
  title: "Costs",
});

const costStore = useCostStore();

const onFilterUpdated = async (value, key) => {
  costStore.filters[key] = value;
  await costStore.getCosts();
};

const exportPayment = async () => {
  const { data } = await useBaseFetch("/cost/costs/generate-export-payment", {
    method: "POST",
  });
  window.location.replace(useCostExport(data.url, costStore.filters));
};

const exportInvoices = async () => {
  const { data } = await useBaseFetch("/cost/costs/generate-zip-download", {
    method: "POST",
  });
  window.location.replace(useCostExport(data.url, costStore.filters));
};

const onPageChanged = (page) => {
  costStore.setMeta({ current_page: page });
};
</script>
