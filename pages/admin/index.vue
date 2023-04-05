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
          class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-4 lg:items-baseline"
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
          <div class="mt-2 flex items-center text-sm text-gray-500">
            <div class="mt-1 w-full md:w-60 lg:w-72">
              <VueDatePicker
                v-model="dateFilter"
                @update:model-value="onPeriodUpdated"
                range
                :enableTimePicker="false"
                placeholder="Select period"
                calendar-cell-class-name="rounded-full"
                :dark="colorMode.preference != 'light'"
              >
                <template #action-row="{ selectDate }">
                  <div class="w-full flex items-center justify-center">
                    <button
                      class="py-2 px-4 bg-[#7f7fdb] text-white rounded"
                      @click="selectDate"
                    >
                      Select Date
                    </button>
                  </div>
                </template>
              </VueDatePicker>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5 flex lg:mt-0 lg:ml-4">
        <AdminCostsMenuDropdown
          @exportPayments="exportPayment"
          @exportInvoices="exportInvoices"
          @exportCosts="exportCosts"
        />
      </div>
    </div>

    <AdminCostsTable />
    <AdminPagination
      v-if="costStore.costs.data.length != 0"
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
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import dayjs from "dayjs";
import isEmpty from "lodash/isEmpty";
import { format } from "date-fns";

definePageMeta({
  layout: "admin",
  middleware: ["tenant", "auth"],
});

useHead({
  title: "Costs",
});

const colorMode = useColorMode();
const costStore = useCostStore();
const dateFilter = ref(null);

const onPeriodUpdated = (value) => {
  dateFilter.value = value;

  if (isEmpty(value)) {
    onFilterUpdated("", "period");
  } else {
    const dates = [
      dayjs(value[0]).format("YYYY-MM-DD"),
      dayjs(value[1]).format("YYYY-MM-DD"),
    ];
    onFilterUpdated(dates.toString(), "period");
  }
};

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

const exportCosts = async () => {
  const { data } = await useBaseFetch("/cost/costs/generate-export", {
    method: "POST",
  });
  window.location.replace(useCostExport(data.url, costStore.filters));
};

const onPageChanged = (page) => {
  costStore.setMeta({ current_page: page });
};
</script>
