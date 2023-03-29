<template>
  <div class="mt-0 md:mt-[34px]">
    <section class="relative hero">
      <img
        class="hidden md:block w-full md:w-2/4 h-[32rem] md:h-screen"
        src="https://costapplicationform.s3.ap-southeast-1.amazonaws.com/static/home-bg.png"
        :style="{
          top: `-112px`,
          right: 0,
          position: `absolute`,
          backgroundSize: `contain`,
          zIndex: -1,
        }"
        format="webp"
      />
      <img
        src="https://costapplicationform.s3.ap-southeast-1.amazonaws.com/static/particle-yellow.png"
        alt="header particles"
        format="webp"
        class="hero-particle-yellow"
      />
      <img
        src="https://costapplicationform.s3.ap-southeast-1.amazonaws.com/static/particle-blue.png"
        alt="header particles"
        format="webp"
        class="hero-particle-blue"
      />
      <img
        src="https://costapplicationform.s3.ap-southeast-1.amazonaws.com/static/particle-red.png"
        alt="header particles"
        format="webp"
        class="hero-particle-red"
      />
      <div
        class="grid container px-4 py-8 mx-auto gap-y-20 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <div class="mr-auto place-self-start lg:col-span-7 md:mt-12">
          <h1
            class="max-w-2xl mb-4 text-[42px] font-medium tracking-tight md:text-[56px] leading-tight text-center md:text-left md:mb-16 text-dark"
          >
            Take control of your costs like a boss and unleash your costs
            administration potential.
          </h1>

          <nuxt-link
            to="/register"
            class="bg-primary hover:bg-[#5045ca] text-white text-base font-medium py-4 px-6 rounded-full mr-3 hidden md:inline-block"
            >Get started</nuxt-link
          >
          <nuxt-link
            to="/register"
            class="border border-primary text-primary text-base font-medium py-4 px-6 rounded-full hidden md:inline-block"
            >Contact sales</nuxt-link
          >
        </div>
        <div id="registration" class="lg:col-span-5 lg:flex mx-[-16px] md:mx-0">
          <Registration />
        </div>
      </div>
    </section>

    <section class="relative bg-[#F9F4F1] text-dark">
      <div
        class="grid container px-4 py-16 mx-auto gap-y-20 lg:gap-24 lg:py-24 lg:grid-cols-12"
      >
        <div class="mr-auto place-self-center lg:col-span-6">
          <img
            class="block rounded-xl"
            src="https://costapplicationform.s3.ap-southeast-1.amazonaws.com/static/caf-dashboard.png"
            sizes="sm:100vw md:100vw lg:704px"
            width="704"
            height="404"
            format="webp"
          />
        </div>

        <div class="lg:col-span-6">
          <h2 class="font-medium text-4xl md:text-5xl mb-6">CAF</h2>
          <p class="text-dark">
            The simple one stop solution for cost applications, cost approvals
            and export files for accounting. Manage your costs in one location.
          </p>
          <div class="grid md:grid-cols-2 gap-6 mt-8 mb-8">
            <div v-for="(item, index) in cafPoints" :key="index">
              <div class="font-bold text-primary text-2xl mb-2">
                {{ item.title }}
              </div>
              <div class="uppercase text-dark">{{ item.sub }}</div>
            </div>
          </div>

          <nuxt-link
            to="/features"
            class="bg-primary hover:bg-[#5045ca] text-white text-base font-medium py-4 px-6 rounded-full mr-3 inline-block"
            >Read more features</nuxt-link
          >
        </div>
      </div>
    </section>

    <section class="relative text-dark px-4 py-16 lg:py-24">
      <h2 class="font-medium text-4xl md:text-5xl mb-16 md:mb-24 text-center">
        Why choose us?
      </h2>
      <div class="grid container mx-auto gap-y-10 lg:gap-24 lg:grid-cols-12">
        <div
          v-for="(item, index) in cafFeatures"
          :key="index"
          class="text-center lg:col-span-4"
        >
          <img
            class="mx-auto mb-8"
            :src="item.img"
            sizes="sm:113px md:127px lg:137px"
            format="webp"
          />
          <h3 class="text-primary font-bold text-2xl mb-8">
            {{ item.title }}
          </h3>
          <p class="text-[#767676] text-base">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </section>

    <AppCta />
  </div>
</template>

<script setup>
definePageMeta({
  colorMode: "light",
  middleware: "guest",
});

useHead({
  title: "Home",
  ogTitle: "Cost Application Form",
  description:
    "Take control of your costs like a boss and unleash your costs administration potential",
  ogDescription:
    "Take control of your costs like a boss and unleash your costs administration potential",
});

const cafPoints = ref([
  {
    title: "Cost Application Form",
    sub: "BREAKDOWN OF COSTS",
  },
  {
    title: "Cost Approval",
    sub: "AUTOMATIC EMAIL UPDATES",
  },
  {
    title: "Cost Categories & Partners",
    sub: "AUTOMATIC EMAIL UPDATES",
  },
  {
    title: "Invoices",
    sub: "UPLOAD COST INVOICES",
  },
]);

const cafFeatures = ref([
  {
    img: "https://costapplicationform.s3.ap-southeast-1.amazonaws.com/static/100.png",
    title: "100% All-in-one",
    desc: `Cost applications, approvals, status update
    emails, categories, partners and export files.
    All-in-one.`,
  },
  {
    img: "https://costapplicationform.s3.ap-southeast-1.amazonaws.com/static/target.png",
    title: "Keeping it simple",
    desc: `The simplest solution for cost applications. No difficult accounting rules.`,
  },
  {
    img: "https://costapplicationform.s3.ap-southeast-1.amazonaws.com/static/coin.png",
    title: "Credit based",
    desc: `No monthly on-going subscriptions, just pay when you use the platform.`,
  },
]);
</script>
