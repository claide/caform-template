<template>
  <section class="py-5 lg:py-20">
    <div class="flex flex-col justify-center items-center px-6 py-8 lg:py-0">
      <div class="w-full md:mt-0 sm:max-w-md xl:p-0">
        <nuxt-link
          to="/"
          class="flex items-center mb-10 text-2xl font-semibold text-dark dark:text-white"
        >
          <nuxt-img
            src="https://costapplicationform.s3.ap-southeast-1.amazonaws.com/static/caf-logo-black.svg"
            sizes="sm:80px md:100w lg:120px"
            width="120"
            height="48"
          />
        </nuxt-link>
        <div class="space-y-4 md:space-y-6">
          <h1
            class="text-xl font-medium leading-tight tracking-tight text-dark md:text-2xl dark:text-white"
          >
            Sign in to your account
          </h1>

          <LoginForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  colorMode: "light",
  layout: "empty",
  middleware: ["guest"],
});

useHead({
  title: "Login",
});
</script>
