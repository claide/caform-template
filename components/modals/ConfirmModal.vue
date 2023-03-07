<template>
  <AppModal ref="modal" :show-title="false">
    <div class="p-6 text-center">
      <svg
        aria-hidden="true"
        class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
        {{ options.message }}
      </h3>
      <button
        @click="confirm"
        type="button"
        class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
      >
        {{ options.confirmMessage }}
      </button>
      <button
        @click="cancel"
        type="button"
        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
      >
        {{ options.cancelMessage }}
      </button>
    </div>
  </AppModal>
</template>

<script setup>
const modal = ref(null);

let options = reactive({
  message: "",
  confirmMessage: "Yes, I'm sure",
  cancelMessage: "No, cancel",
});
const promiseResolved = ref(null);

const show = (message, customOptions = {}) => {
  promiseResolved.value = null;
  options = {
    ...options,
    ...customOptions,
    message,
  };
  modal.value.show();

  return new Promise((resolve) => {
    promiseResolved.value = resolve;
  });
};

const confirm = () => {
  promiseResolved.value(true);
  modal.value.show(false);
};

const cancel = () => {
  promiseResolved.value(false);
  modal.value.show(false);
};

defineExpose({
  show,
});
</script>
