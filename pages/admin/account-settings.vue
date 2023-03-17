<template>
  <section class="py-8">
    <div class="md:flex md:items-center md:justify-between">
      <div class="min-w-0 flex-1 px-2 lg:px-0">
        <h2
          class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-white"
        >
          Settings
        </h2>
      </div>
    </div>

    <div class="bg-white dark:bg-[#121A29] rounded-md mt-8 p-6">test</div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

useHead({
  title: "Settings",
});
</script>
