<template>
  <section>
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <nuxt-link
        to="/"
        class="flex items-center mb-10 text-2xl font-semibold text-dark dark:text-white"
      >
        <nuxt-img
          src="/img/caf-logo-black.svg"
          sizes="sm:80px md:100w lg:120px"
          width="120"
          height="48"
        />
      </nuxt-link>

      <div
        class="w-full bg-white rounded-xl border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
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
});

useHead({
  title: "Login",
});
</script>
