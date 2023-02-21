<template>
  <div>
    <AdminNavbar />
    <div class="container mx-auto px-2 lg:px-0">
      <slot />
    </div>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    class: "scroll-smooth",
  },
});
</script>
