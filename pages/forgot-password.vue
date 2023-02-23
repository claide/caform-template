<template>
  <section>
    <div class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen">
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
        <div class="p-6 sm:p-8">
          <h1
            class="text-xl font-medium leading-tight tracking-tight text-dark md:text-2xl dark:text-white mb-6"
          >
            Forgot your password?
          </h1>
          <p class="text-base text-[#767676] mb-6">
            Enter your primary email address and we’ll send you instructions on
            how to reset your password.
          </p>
          <div class="space-y-4 md:space-y-6">
            <form>
              <div>
                <input
                  type="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded focus:ring-primary focus:border-primary block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary mb-4"
                  placeholder="Enter your email"
                />
              </div>

              <button
                type="submit"
                class="w-full text-white bg-primary hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-base px-5 py-4 text-center"
              >
                Send Reset Instructions
              </button>
            </form>
          </div>
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
  title: "Forgot Password",
});
</script>
