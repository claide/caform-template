<template>
  <Disclosure
    as="header"
    class="bg-white shadow w-full dark:bg-dark dark:text-white"
    v-slot="{ open }"
  >
    <div class="mx-auto px-2 sm:px-0">
      <div
        class="container mx-auto relative h-16 flex justify-between items-center"
      >
        <div class="relative z-10 px-2 flex lg:px-0">
          <div class="flex-shrink-0 flex items-center">
            <nuxt-img
              v-if="colorMode.preference === 'light'"
              class="block w-[80px] sm:w-[120px]"
              src="/img/caf-logo-black.svg"
              sizes="sm:80px md:100w lg:120px"
            />
            <nuxt-img
              v-else
              class="block w-[80px] sm:w-[120px]"
              src="/img/caf-logo-all-white.svg"
              sizes="sm:80px md:100w lg:120px"
            />
          </div>
        </div>
        <div class="relative z-10 flex items-center lg:hidden">
          <AppColorModePicker />
          <!-- Mobile menu button -->
          <DisclosureButton
            class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
          <div class="mr-3">
            <AppColorModePicker />
          </div>
          <button
            type="button"
            class="flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="sr-only">Logout</span>
            <ArrowLeftOnRectangleIcon
              class="h-6 w-6 rotate-180"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      <nav
        class="hidden lg:flex bg-white lg:border-t lg:border-t-gray-200 dark:bg-[#000000] dark:border-0"
        aria-label="Global"
      >
        <div class="container mx-auto lg:py-2 lg:space-x-8">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            :class="[
              item.current
                ? 'bg-gray-100 text-gray-900 dark:bg-[#1E1F27] dark:text-white'
                : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
              'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium dark:hover:bg-[#1E1F27] dark:text-white',
            ]"
            :aria-current="item.current ? 'page' : undefined"
          >
            {{ item.name }}
          </a>
        </div>
      </nav>
    </div>

    <DisclosurePanel as="nav" class="lg:hidden" aria-label="Global">
      <div class="pt-2 pb-3 px-2 space-y-1">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-100 text-gray-900 dark:text-dark'
              : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
            'block rounded-md py-2 px-3 text-base font-medium dark:text-white',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
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
import {
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  ComputerDesktopIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/vue/24/outline";

const colorMode = useColorMode();

const navigation = [
  { name: "Costs", href: "#", current: true },
  { name: "Categories", href: "#", current: false },
  { name: "Partners", href: "#", current: false },
  { name: "Settings", href: "#", current: false },
];
</script>
