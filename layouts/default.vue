<template>
  <div>
    <AppNavbar />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    class: "scroll-smooth",
  },
});
</script>
