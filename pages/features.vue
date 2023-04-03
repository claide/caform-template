<template>
  <div class="relative mt-10 md:mt-[5rem] page">
    <img
      src="https://assets.costapplicationform.com/static/particle-yellow.png"
      alt="header particles"
      format="webp"
      class="page-particle-yellow"
    />
    <img
      src="https://assets.costapplicationform.com/static/particle-blue.png"
      alt="header particles"
      format="webp"
      class="page-particle-blue"
    />
    <img
      src="https://assets.costapplicationform.com/static/particle-red.png"
      alt="header particles"
      format="webp"
      class="page-particle-red"
    />
    <section class="px-4 py-16 lg:py-24">
      <div class="container max-w-8xl mx-auto md:px-4">
        <h1
          class="mb-4 text-[34px] font-medium tracking-tight md:text-[56px] leading-tight md:mb-12 text-dark text-center max-w-[860px] mx-auto"
        >
          Features
        </h1>
        <p
          class="text-center text-[#767676] text-lg md:text-xl mb-24 max-w-[1080px] mx-auto"
        >
          Revolutionize the way you do business with our intelligent tools that
          will elevate your game to new heights.
        </p>
      </div>
    </section>
    <AppCta />
  </div>
</template>

<script setup>
definePageMeta({
  colorMode: "light",
});

useHead({
  title: "Features",
});
</script>
