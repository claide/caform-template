<template>
  <div class="relative mt-10 md:mt-[5rem] page page-contact">
    <img
      src="https://assets.costapplicationform.com/static/particle-yellow.png"
      alt="header particles"
      format="webp"
      class="page-contact-particle-yellow"
    />
    <img
      src="https://assets.costapplicationform.com/static/particle-blue.png"
      alt="header particles"
      format="webp"
      class="page-contact-particle-blue top-[22rem] md:top-[48%]"
    />
    <img
      src="https://assets.costapplicationform.com/static/particle-red.png"
      alt="header particles"
      format="webp"
      class="page-contact-particle-red"
    />
    <section class="px-4 py-16 lg:py-24">
      <div class="container max-w-8xl mx-auto md:px-4">
        <h1
          class="mb-4 text-[34px] font-medium tracking-tight md:text-[56px] leading-tight md:mb-12 text-dark text-center max-w-[860px] mx-auto"
        >
          Contact Us
        </h1>
        <p
          class="text-center text-[#767676] text-lg md:text-xl mb-24 max-w-[1080px] mx-auto"
        >
          Reach out to us with confidence! Whether you have questions, special
          requests, or simply need assistance setting things up with CAF, our
          support team is here for you. Simply fill out the form and we'll be in
          touch promptly. We can't wait to hear from you! team.
        </p>

        <AppContactForm class="max-w-[390px] mx-auto" />
      </div>
    </section>

    <!-- <AppCta /> -->
  </div>
</template>

<script setup>
definePageMeta({
  colorMode: "light",
});

useHead({
  title: "Contact Us",
});
</script>
