<template>
  <footer class="relative bg-primary text-white">
    <div class="container max-w-8xl mx-auto py-12 sm:py-20 px-4">
      <div class="grid mx-auto gap-y-10 lg:gap-24 lg:grid-cols-12">
        <div class="mb-6 md:mb-0 mr-auto lg:col-span-3">
          <nuxt-link to="/" class="flex items-center">
            <img
              src="/img/caf-logo-all-white.svg"
              sizes="sm:100vw md:100w lg:120px"
              width="120"
              height="48"
              format="webp"
            />
          </nuxt-link>
        </div>
        <div
          class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 lg:col-span-6"
        >
          <div>
            <h2 class="mb-6 text-base font-medium uppercase">Pages</h2>
            <ul>
              <li v-for="(item, index) in pages" :key="index" class="mb-3">
                <nuxt-link :to="item.link" class="hover:text-indigo-200">{{
                  item.name
                }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-base font-medium uppercase">Helpful links</h2>
            <ul>
              <li
                v-for="(item, index) in helpfulLinks"
                :key="index"
                class="mb-3"
              >
                <nuxt-link :to="item.link" class="hover:text-indigo-200">{{
                  item.name
                }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr
        class="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-white sm:text-center"
          >&copy; 2023
          <a href="#" class="hover:underline">Cost Application Form</a>. All
          Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const pages = ref([
  {
    name: "Featues",
    link: "features",
  },
  {
    name: "Pricing",
    link: "pricing",
  },
  {
    name: "FAQ",
    link: "faq",
  },
  {
    name: "Contact Us",
    link: "contact-us",
  },
]);

const helpfulLinks = ref([
  {
    name: "Privacy Policy",
    link: "privacy-policy",
  },
  {
    name: "Terms of Use",
    link: "terms-of-use",
  },
  {
    name: "Accessibility",
    link: "accessibility",
  },
]);
</script>
