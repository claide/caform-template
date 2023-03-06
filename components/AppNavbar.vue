<template>
  <Disclosure
    as="nav"
    class="fixed border-gray-200 z-10 w-full top-0 transition delay-100 navbar"
    :class="[!topOfPage ? 'bg-white md:py-3' : 'md:bg-transparent md:py-6']"
    v-slot="{ open }"
  >
    <div
      :class="{ 'bg-white': open }"
      class="container flex flex-wrap items-center justify-between mx-auto md:px-4 px-2 sm:px-4"
    >
      <div class="relative w-full flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" />
            <XMarkIcon v-else class="block h-6 w-6" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <nuxt-img
              class="block w-[80px] sm:w-[120px]"
              src="/img/caf-logo-black.svg"
              sizes="sm:80px md:100w lg:120px"
            />
          </div>
          <div class="hidden ml-auto sm:block">
            <div class="flex items-center space-x-4">
              <nuxt-link
                v-for="(item, index) in menu"
                :key="item.index"
                :to="item.link"
                :class="[
                  item.current ? 'text-secondary' : 'text-primary',
                  'px-3 py-2 rounded-md text-base font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
              >
                {{ item.name }}
              </nuxt-link>
              <nuxt-link
                to="/login"
                class="bg-black hover:bg-indigo-700 text-white block text-base py-4 px-7 rounded-full"
                >Login</nuxt-link
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        ></div>
      </div>
    </div>

    <DisclosurePanel
      v-slot="{ close }"
      :class="{ 'bg-white': open }"
      class="sm:hidden"
    >
      <div :class="{ open: 'bg-white' }" class="space-y-1 px-2 pt-2 pb-3">
        <nuxt-link
          v-for="item in menu"
          :key="item.name"
          :to="item.link"
          @click="close"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-primary hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</nuxt-link
        >
        <DisclosureButton
          as="a"
          href="login"
          class="text-primary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Login</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const menu = ref([
  {
    name: "Home",
    link: "/",
    current: false,
  },
  {
    name: "Features",
    link: "features",
    current: false,
  },
  {
    name: "Pricing",
    link: "pricing",
    current: false,
  },
  {
    name: "FAQ",
    link: "faq",
    current: false,
  },
  {
    name: "Contact Us",
    link: "contact-us",
    current: false,
  },
]);

const topOfPage = ref(true);
const isOpenMenu = ref(false);

onBeforeMount(() => {
  window.addEventListener("scroll", onUpdateScroll);
});

const onUpdateScroll = () => {
  if (window.pageYOffset > 0) {
    if (topOfPage.value) {
      topOfPage.value = false;
    }
  } else if (!topOfPage.value) topOfPage.value = true;
};
</script>
