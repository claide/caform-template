<template>
  <AppModal ref="modal">
    <template #title>Add cost breakdown</template>
    <div class="px-6 pb-6">
      <div class="space-y-4">
        <div>
          <label for="title" class="block text-sm font-medium text-gray-700">
            Title
          </label>
          <div class="mt-1">
            <input
              type="text"
              name="title"
              class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded"
            />
          </div>
        </div>

        <div>
          <label for="category" class="block text-sm font-medium text-gray-700">
            Category
          </label>
          <div class="mt-1">
            <select
              name="category"
              class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded"
            >
              <option>USD</option>
              <option>GBP</option>
              <option>EUR</option>
            </select>
          </div>
        </div>

        <div>
          <label for="period" class="block text-sm font-medium text-gray-700">
            Date period
          </label>
          <div class="mt-1">
            <VueDatePicker
              ref="datePicker"
              range
              teleport="#datepicker-container"
              v-model="date"
            ></VueDatePicker>
          </div>
        </div>
        <div id="datepicker-container"></div>

        <div>
          <label for="amount" class="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <div class="mt-1">
            <input
              type="text"
              name="amount"
              class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      class="bg-gray-200 px-4 py-3 sm:py-4 sm:flex sm:flex-row-reverse sm:px-6"
    >
      <button
        type="button"
        class="inline-flex w-full justify-center rounded-full border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-2 sm:w-auto sm:text-sm"
        @click="show(false)"
      >
        Add breakdown
      </button>
      <button
        type="button"
        class="mt-3 inline-flex w-full justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        @click="show(false)"
      >
        Cancel
      </button>
    </div> -->
  </AppModal>
</template>

<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const modal = ref(null);
const date = ref();

const show = (opened = true) => {
  modal.value.show(opened);
};

defineExpose({
  show,
});
</script>
