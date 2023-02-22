<template>
  <div>
    <div class="space-y-4 sm:space-y-5">
      <div>
        <label
          for="applicant-name"
          class="block text-sm font-medium text-gray-700"
        >
          Applicant name
        </label>
        <div class="mt-1">
          <input
            type="text"
            name="applicant-name"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          />
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div class="mt-1">
          <input
            type="email"
            name="email"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          />
        </div>
      </div>

      <div>
        <label for="invoice" class="block text-sm font-medium text-gray-700">
          Invoice number
        </label>
        <div class="mt-1">
          <input
            type="text"
            name="invoice"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          />
        </div>
      </div>

      <div>
        <label for="currency" class="block text-sm font-medium text-gray-700">
          Currency
        </label>
        <div class="mt-1">
          <select
            name="currency"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          >
            <option>USD</option>
            <option>GBP</option>
            <option>EUR</option>
          </select>
        </div>
      </div>

      <div>
        <label for="partner" class="block text-sm font-medium text-gray-700">
          Select partner
        </label>
        <div class="mt-1">
          <select
            name="partner"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          >
            <option>Adwords</option>
            <option>Nexclic</option>
            <option>Compado</option>
          </select>
        </div>
      </div>

      <div>
        <label
          for="payment-method"
          class="block text-sm font-medium text-gray-700"
        >
          Payment method
        </label>
        <div class="mt-1">
          <select
            name="payment-method"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          >
            <option>Wiretransfer</option>
            <option>Bitsafe</option>
            <option>SEPA</option>
          </select>
        </div>
      </div>

      <div
        class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-6 after:flex-1 after:border-t after:border-gray-300 after:mt-6"
      ></div>

      <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Beneficiary Information
        </h3>
        <p class="mt-1 text-sm text-gray-500 dark:text-[#818692]">
          Use a permanent address where you can receive mail.
        </p>
      </div>

      <div class="mt-6">
        <label
          for="beneficiary"
          class="block text-sm font-medium text-gray-700"
        >
          Beneficiary name
        </label>
        <div class="mt-1">
          <input
            type="text"
            name="beneficiary"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          />
        </div>
      </div>

      <div>
        <label for="street" class="block text-sm font-medium text-gray-700">
          Street
        </label>
        <div class="mt-1">
          <input
            type="text"
            name="street"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          />
        </div>
      </div>

      <div>
        <label for="city" class="block text-sm font-medium text-gray-700">
          City
        </label>
        <div class="mt-1">
          <input
            type="text"
            name="city"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          />
        </div>
      </div>

      <div>
        <label for="postal" class="block text-sm font-medium text-gray-700">
          Postal code
        </label>
        <div class="mt-1">
          <input
            type="text"
            name="postal"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          />
        </div>
      </div>

      <div>
        <label for="country" class="block text-sm font-medium text-gray-700">
          Country
        </label>
        <div class="mt-1">
          <select
            name="country"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          >
            <option
              v-for="(country, code) in countries"
              :key="code"
              :value="code"
            >
              {{ country }}
            </option>
          </select>
        </div>
      </div>

      <div>
        <label for="account" class="block text-sm font-medium text-gray-700">
          IBAN account number
        </label>
        <div class="mt-1">
          <input
            type="text"
            name="account"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          />
        </div>
      </div>
      <div>
        <label for="swift-code" class="block text-sm font-medium text-gray-700">
          Swift code
        </label>
        <div class="mt-1">
          <input
            type="text"
            name="swift-code"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          />
        </div>
      </div>
      <div>
        <label for="notes" class="block text-sm font-medium text-gray-700">
          Notes
        </label>
        <div class="mt-1">
          <textarea
            rows="5"
            name="notes"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          />
        </div>
      </div>

      <AppFileUploader :files="files" @remove-file="removeFile">
        Attach invoice
      </AppFileUploader>

      <div
        class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-6 after:flex-1 after:border-t after:border-gray-300 after:mt-6"
      ></div>

      <div class="flex justify-between items-ceter w-full">
        <h3 class="text-lg font-medium text-gray-900">Breakdowns</h3>
        <button
          @click="addNewBreakdown"
          class="border border-gray-300 py-1 px-2 rounded text-sm"
        >
          Add new
        </button>
      </div>
    </div>
    <button
      class="bg-primary hover:bg-indigo-700 text-white text-base font-medium py-3 px-6 rounded-full mr-3 w-full block mt-6"
    >
      Send
    </button>

    <ModalsBreakdownModal ref="addBreakdown" />
  </div>
</template>

<script setup>
import allCountries from "@/utils/countries";

const countries = ref(allCountries);
const files = ref([]);
const addBreakdown = ref(null);

const removeFile = (index) => {
  files.value.splice(index, 1);
};

const addNewBreakdown = () => {
  addBreakdown.value.show();
};
</script>
