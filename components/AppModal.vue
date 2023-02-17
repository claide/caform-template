<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="stopClickOutside" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-70" />
      </TransitionChild>

      <div id="container" class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 flex items-center justify-between mb-6 px-6 pt-6"
              >
                <slot name="title" class="text-dark">Popup</slot>
                <button
                  type="button"
                  class="bg-white rounded-md text-slate-400 hover:text-slate-500 focus:outline-none"
                  @click="show(false)"
                >
                  <span class="sr-only">Close</span>
                  <RiCloseCircleFill
                    class="h-6 w-6 fill-current"
                    aria-hidden="true"
                  />
                </button>
              </DialogTitle>
              <div class="mt-2">
                <!-- content goes here -->
                <slot></slot>
              </div>
              <div
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
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
// import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

import { RiCloseCircleFill } from "vue-remix-icons";

const isOpen = ref(false);
// const cancelButtonRef = ref(null);

const show = (opened = true) => {
  isOpen.value = opened;
};

const stopClickOutside = () => {
  return () => null;
};

defineExpose({
  show,
});
</script>
