<template>
  <div class="relative mt-10 md:mt-[5rem] page">
    <nuxt-img
      src="/img/particle-yellow.png"
      alt="header particles"
      format="webp"
      class="page-particle-yellow"
    />
    <nuxt-img
      src="/img/particle-blue.png"
      alt="header particles"
      format="webp"
      class="page-particle-blue"
    />
    <nuxt-img
      src="/img/particle-red.png"
      alt="header particles"
      format="webp"
      class="page-particle-red"
    />
    <section class="px-4 py-16 lg:py-24">
      <div class="container max-w-8xl mx-auto md:px-4">
        <h1
          class="mb-4 text-[34px] font-medium tracking-tight md:text-[56px] leading-tight md:mb-12 text-dark text-center max-w-[860px] mx-auto"
        >
          Cost-effective solutions, transparent invoicing.
        </h1>
        <p class="text-center text-[#767676] text-lg md:text-xl mb-24">
          Efficiently manage your costs, effortlessly track your invoices.
        </p>

        <AppPricing />
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
  title: "Pricing",
});
</script>
