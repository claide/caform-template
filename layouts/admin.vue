<template>
  <div class="min-h-full">
    <AdminNavbar />
    <div class="container mx-auto min-h-full px-2 lg:px-0">
      <slot />
      <small class="text-sm text-gray-600 dark:text-slate-500 py-3">
        Version: {{ config.APP_VERSION }}
      </small>
    </div>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    class: "scroll-smooth min-h-full",
  },
  bodyAttrs: {
    class: "min-h-screen",
  },
});

const config = useRuntimeConfig();
</script>
