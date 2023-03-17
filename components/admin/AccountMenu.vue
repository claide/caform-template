<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton
      class="flex-shrink-0 text-slate-400 hover:bg-[#F9F9F9] dark:hover:bg-[#1a1a1e] hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-1 p-2 transition-all rounded-lg ease-in-out delay-75 flex items-center"
    >
      <div class="flex flex-col text-center justify-center mr-2 leading-none">
        <span class="font-medium text-red-500 text-xl leading-none">843</span>
        <span class="text-xs text-slate-600 dark:text-slate-400">credits</span>
      </div>
      <UserIcon class="h-6 w-6" />
    </MenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-[#111A29] dark:border-[#38404C]"
      >
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <nuxtLink
              :class="[
                active
                  ? 'bg-[#EBEAF4] text-primary dark:bg-black'
                  : 'text-dark',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white text-dark',
              ]"
              to="/admin/account-settings"
            >
              Settings
            </nuxtLink>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              @click="logout"
              :class="[
                active
                  ? 'bg-[#EBEAF4] text-primary dark:bg-black'
                  : 'text-dark',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white text-dark',
              ]"
              href="javascript:;"
            >
              Logout
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { UserIcon } from "@heroicons/vue/24/outline";

const emits = defineEmits(["logout"]);

const logout = () => {
  emits("logout");
};
</script>
