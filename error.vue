<template>
  <section>
    <div class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen">
      <nuxt-link
        to="/"
        class="flex items-center mb-10 text-2xl font-semibold text-dark dark:text-white"
      >
        <img
          v-show="colorMode.preference === 'light'"
          src="https://assets.costapplicationform.com/static/caf-logo-black.svg"
          sizes="sm:80px md:100w lg:120px"
          width="120"
          height="48"
        />
        <img
          v-show="colorMode.preference != 'light'"
          src="https://assets.costapplicationform.com/static/logo-admin.svg"
          sizes="sm:80px md:100w lg:120px"
          width="120"
          height="48"
        />
      </nuxt-link>

      <div class="w-full mx-auto sm:max-w-md md:max-w-6xl mt-2">
        <img
          v-show="errorCode.statusCode === 404"
          src="https://assets.costapplicationform.com/static/404-error.png"
          class="mx-auto mb-12 md:mb-20 max-w-[16rem] lg:max-w-[23rem] w-auto"
          format="webp"
        />
        <img
          v-show="errorCode.statusCode != 404"
          src="https://assets.costapplicationform.com/static/401-error.png"
          class="mx-auto mb-12 md:mb-20 max-w-[16rem] lg:max-w-[23rem] w-auto"
          format="webp"
        />
        <div class="text-2xl md:text-4xl font-medium text-center mb-6">
          The page you were looking for cannot be found.
        </div>
        <div class="text-xl md:text-2xl text-[#767676] text-center mb-10">
          It's likely an incorrect or outdated link.
        </div>
        <div class="text-center py-20 text-[#767676]">
          Error code: {{ errorCode.statusCode }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "empty",
});

const props = defineProps({
  error: Object,
});

const colorMode = useColorMode();
const errorCode = ref(props.error);

const handleError = () => clearError({ redirect: "/" });
</script>
