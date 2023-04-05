<template>
  <div class="text-center py-10">
    <FolderOpenIcon class="mx-auto h-12 w-12 text-gray-400 outline-current" />

    <slot name="title">
      <h3
        name="title"
        class="mt-2 text-sm font-medium text-dark dark:text-slate-400"
      >
        No data
      </h3>
    </slot>
    <p class="mt-1 text-sm text-gray-500 dark:text-slate-400">
      There are no records to display.
    </p>
  </div>
</template>

<script setup>
import { XMarkIcon, FolderOpenIcon } from "@heroicons/vue/24/outline";
</script>
