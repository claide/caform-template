<template>
  <div class="min-h-full">
    <AdminNavbar />
    <div class="container mx-auto min-h-full px-2 lg:px-0">
      <slot />
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
</script>
