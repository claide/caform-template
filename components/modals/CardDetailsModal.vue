<template>
  <AppModal ref="modal">
    <template #title>Card details</template>
    <form>
      <div class="px-1 pb-6">
        <div class="mt-8">
          <div class="flex flex-wrap gap-3 w-full p-5">
            <label class="relative w-full flex flex-col">
              <span
                class="block text-sm font-medium text-gray-700 dark:text-white"
                >Card number</span
              >
              <input
                class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 peer pl-10 leading-4"
                type="text"
                name="card_number"
                placeholder="0000 0000 0000"
              />
              <CreditCardIcon
                class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-5 w-5"
              />
            </label>

            <label class="relative flex-1 flex flex-col">
              <span
                class="block text-sm font-medium text-gray-700 dark:text-white"
                >Expire date</span
              >
              <input
                class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 peer pl-10 leading-4"
                type="text"
                name="expire_date"
                placeholder="MM/YY"
              />
              <CalendarIcon
                class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-5 w-5"
              />
            </label>

            <label class="relative flex-1 flex flex-col">
              <span
                class="flex gap-2 items-center text-sm font-medium text-gray-700 dark:text-white"
              >
                CVC/CVV
                <span class="relative group">
                  <span
                    class="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white z-50"
                  >
                    3 or 4 digits usually found at the back of card</span
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </span>
              <input
                class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 peer pl-10 leading-4"
                type="text"
                name="card_cvc"
                placeholder="&bull;&bull;&bull;"
              />
              <LockClosedIcon
                class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-5 w-5"
              />
            </label>
          </div>
        </div>
      </div>
      <div
        class="bg-gray-200 dark:bg-[#1A1B2D] px-4 py-3 sm:py-4 sm:flex sm:flex-row-reverse sm:px-6"
      >
        <button
          type="submit"
          class="inline-flex w-full justify-center rounded-full border border-transparent bg-primary px-4 py-2 text-base font-medium text-white hover:bg-[#5045ca] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-2 sm:w-auto sm:text-sm"
        >
          Save card
        </button>
      </div>
    </form>
  </AppModal>
</template>

<script setup>
import {
  CreditCardIcon,
  CalendarIcon,
  LockClosedIcon,
} from "@heroicons/vue/24/outline";

const modal = ref(null);

// const props = defineProps({
//   cost: {
//     type: Object,
//     default() {
//       return {};
//     },
//   },
// });

const show = (opened = true) => {
  modal.value.show(opened);
};

defineExpose({
  show,
});
</script>
