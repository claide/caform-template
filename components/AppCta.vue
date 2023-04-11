<template>
  <section class="relative text-dark caf-cta">
    <div class="container max-w-[58rem] md:mx-auto px-4">
      <div
        class="bg-white border-4 border-primary p-10 md:p-20 flex flex-col md:flex-row items-center rounded-xl"
      >
        <div
          class="font-medium text-3xl text-dark text-center md:text-left mb-8 md:mb-0"
        >
          Start collecting cost applications
        </div>
        <a
          href="javascript:;"
          @click="goToRegistration('#registration')"
          class="rounded-full bg-secondary text-white font-medium text-base py-4 px-6 inline-block md:ml-auto"
          >Create account</a
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter, createRouter } from "vue-router";

const route = useRouter();

const goToRegistration = (anchor) => {
  if (route.currentRoute.value.name === "index") {
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    route.push({ path: "/" });
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>
