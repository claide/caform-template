<template>
  <div>
    <AppNavbar />
    <slot />
    <!-- <AppFaq /> -->
    <AppCta />
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
