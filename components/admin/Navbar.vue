<template>
  <Disclosure
    as="header"
    class="shadow w-full bg-white dark:bg-[#04091B] dark:text-white border-b dark:border-b-[#38404C] md:border-none"
    v-slot="{ open }"
  >
    <div class="mx-auto px-2 lg:px-0">
      <div
        class="container mx-auto relative py-2 md:py-3 flex justify-between items-center"
      >
        <div class="relative z-10 px-2 flex lg:px-0">
          <div class="flex-shrink-0 flex items-center">
            <img
              v-if="colorMode.preference === 'light'"
              class="block w-[80px] sm:w-[120px]"
              src="https://costapplicationform.s3.ap-southeast-1.amazonaws.com/static/caf-logo-black.svg"
              sizes="sm:80px md:100w lg:120px"
            />

            <img
              v-else
              class="block w-[80px] sm:w-[120px]"
              src="https://costapplicationform.s3.ap-southeast-1.amazonaws.com/static/logo-admin.svg"
              sizes="sm:80px md:100w lg:120px"
            />
          </div>
        </div>
        <div class="relative z-10 flex items-center lg:hidden">
          <AppColorModePicker />
          <AdminAccountMenu @logout="logout" />
          <!-- Mobile menu button -->
          <DisclosureButton
            class="rounded-md p-2 inline-flex items-center justify-center text-slate-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
          <div class="mx-1">
            <AppColorModePicker />
          </div>
          <AdminAccountMenu @logout="logout" />
        </div>
      </div>
      <nav
        class="hidden lg:flex lg:border-t lg:border-t-gray-200 bg-[#212737] dark:border-0"
        aria-label="Global"
      >
        <div class="container mx-auto lg:py-2 lg:space-x-8">
          <nuxt-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.link"
            :class="[
              item.link === currentPath
                ? 'bg-[#404a5b] dark:bg-[#121A29] text-white'
                : 'text-gray-900 hover:bg-gray-50',
              'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium hover:bg-[#404a5b] dark:hover:bg-[#121A29] text-white',
            ]"
            :aria-current="item.current ? 'page' : undefined"
          >
            {{ item.name }}
          </nuxt-link>
        </div>
      </nav>
    </div>

    <DisclosurePanel
      v-slot="{ close }"
      as="nav"
      class="lg:hidden"
      aria-label="Global"
    >
      <div class="pt-2 pb-3 px-2 space-y-1">
        <nuxt-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.link"
          @click="close()"
          :class="[
            item.link === currentPath
              ? 'bg-[#f9f9f9] dark:bg-[#1a1a1e] text-slate-400 dark:text-[#6158CD]'
              : 'text-slate-400 hover:bg-gray-50 hover:text-gray-300',
            'block rounded-md py-2 px-3 text-sm font-medium ',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</nuxt-link
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { useAdminPages } from "@/composables/admin-pages";
import { useAuthStore } from "@/store/auth";

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
  UserIcon,
} from "@heroicons/vue/24/outline";

const colorMode = useColorMode();
const route = useRoute();
const currentPath = ref(route);
const authStore = useAuthStore();

const navigation = [
  {
    name: "Costs",
    link: "/admin",
  },
  {
    name: "Categories",
    link: "/admin/categories",
  },
  {
    name: "Partners",
    link: "/admin/partners",
  },
];

const logout = async () => {
  try {
    await authStore.logout();
    return navigateTo("/login");
  } catch {}
};

watchEffect(() => {
  currentPath.value = useAdminPages(route.path);
});
</script>
