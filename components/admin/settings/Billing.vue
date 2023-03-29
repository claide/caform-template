<template>
  <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
    <div class="mb-6 border-b dark:border-b-gray-700 pb-4">
      <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
        Billing
      </h3>
      <p class="mt-1 text-sm text-slate-500">
        Update your payment information.
      </p>
    </div>

    <div class="grid divide-y dark:divide-gray-700">
      <div class="md:grid md:grid-cols-3 md:gap-6 py-6 first:pt-0">
        <div class="md:col-span-1 mb-4">
          <div>
            <h4 class="font-medium leading-6 text-gray-900 dark:text-white">
              Contact email
            </h4>
            <p class="mt-1 text-sm text-slate-500">
              Where should payment reports be sent?
            </p>
          </div>
        </div>
        <div class="md:col-span-2">
          <div class="sm:px-4 space-y-4">
            <div class="flex items-center">
              <input
                v-model="alternativeEmail"
                type="radio"
                value="false"
                id="radio-email-1"
                name="radio-email"
                class="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="radio-email-1"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Send to my account email <br />
                <small class="text-slate-500">maxsmith@yahue.com</small></label
              >
            </div>
            <div class="flex items-center">
              <input
                v-model="alternativeEmail"
                type="radio"
                id="radio-email-2"
                value="true"
                name="radio-email"
                class="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="radio-email-2"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Send to alternative email</label
              >
            </div>

            <div v-if="alternativeEmail === 'true'" class="px-6">
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 dark:text-white"
                >Email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="md:grid md:grid-cols-3 md:gap-6 py-6">
        <div class="md:col-span-1 mb-4">
          <div class="">
            <h4 class="font-medium leading-6 text-gray-900 dark:text-white">
              Card details
            </h4>
            <p class="mt-1 text-sm text-slate-500">
              Select default payment method.
            </p>
          </div>
        </div>
        <div class="md:col-span-2 sm:px-4 space-y-4">
          <button
            @click="onAddNewCard"
            class="bg-transparent border dark:border-gray-600 dark:text-white rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-black hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6158CD] items-center"
          >
            <PlusIcon class="w-5 h-5 mr-2" /> Add new payment details
          </button>
        </div>
      </div>
    </div>
    <ModalsCardDetailsModal ref="cardDetailsModal" />
  </div>
</template>

<script setup>
import { PlusIcon } from "@heroicons/vue/24/outline";

const alternativeEmail = ref(false);
const cardDetailsModal = ref(null);

const onAddNewCard = () => {
  cardDetailsModal.value.show();
};
</script>
