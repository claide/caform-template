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
                class="text-lg font-medium leading-6 flex items-center justify-between mb-6 px-6 pt-6 text-dark"
              >
                <slot name="title" class="">Popup</slot>
                <button
                  type="button"
                  class="bg-white rounded-md text-slate-400 hover:text-slate-500 focus:outline-none"
                  @click="show(false)"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-6 w-6 fill-current" />
                </button>
              </DialogTitle>
              <div class="mt-2">
                <!-- content goes here -->
                <slot></slot>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

import { XMarkIcon } from "@heroicons/vue/24/outline";

const isOpen = ref(false);

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
