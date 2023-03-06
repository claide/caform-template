<template>
  <section>
    <div class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen">
      <nuxt-link
        to="/"
        class="flex items-center mb-10 text-2xl font-semibold text-dark dark:text-white"
      >
        <nuxt-img
          v-if="colorMode === 'light'"
          src="/img/caf-logo-black.svg"
          sizes="sm:80px md:100w lg:120px"
          width="120"
          height="48"
        />
        <nuxt-img
          v-else
          src="/img/logo-admin.svg"
          sizes="sm:80px md:100w lg:120px"
          width="120"
          height="48"
        />
      </nuxt-link>

      <div class="w-full mx-auto sm:max-w-md md:max-w-6xl mt-2">
        <nuxt-img
          v-if="errorCode.statusCode === 404"
          src="/img/404-error.png"
          sizes="sm:200px md:100w lg:380px"
          class="mx-auto mb-12 md:mb-20"
          format="webp"
        />
        <nuxt-img
          v-else
          src="/img/401-error.png"
          sizes="sm:200px md:100w lg:380px"
          class="mx-auto mb-12 md:mb-20"
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
