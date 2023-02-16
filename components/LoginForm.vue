<template>
  <div>
    <a
      href="#!"
      class="p-3 font-medium text-sm leading-snug rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-full flex justify-center items-center bg-[#4386F4] hover:bg-[#1C6DF2] text-white text-center relative"
    >
      <RiGoogleFill class="w-5 h-5 fill-current absolute left-3" />
      <span>Sign in with Google</span>
    </a>
    <div
      class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
    >
      <p class="text-center font-medium mx-4 mb-0 text-dark">or</p>
    </div>
    <form class="space-y-4 md:space-y-6" action="#">
      <div>
        <input
          type="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded focus:ring-primary focus:border-primary block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary mb-4"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <input
          type="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded focus:ring-primary focus:border-primary block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary mb-4"
          placeholder="Enter your password"
        />
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required=""
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="remember" class="text-gray-500 dark:text-gray-300"
              >Remember me</label
            >
          </div>
        </div>
        <nuxt-link
          to="forgot-password"
          class="text-sm text-dark font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Forgot password?
        </nuxt-link>
      </div>
      <button
        type="submit"
        class="w-full text-white bg-primary hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-base px-5 py-4 text-center"
      >
        Sign in
      </button>
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?
        <nuxt-link
          to="/"
          class="font-medium text-primary-600 hover:underline dark:text-primary-500 text-primary"
          >Sign up</nuxt-link
        >
      </p>
    </form>
  </div>
</template>

<script setup>
import { RiGoogleFill } from "vue-remix-icons";
</script>
