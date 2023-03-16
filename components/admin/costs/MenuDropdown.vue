<template>
  <div class="w-full md:w-56 text-right">
    <Menu as="div" class="relative inline-block text-left w-full md:w-auto">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-full bg-[#6158CD] px-4 py-3 text-sm font-medium text-white hover:bg-[#5045ca] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Export
          <ChevronDownIcon
            class="ml-2 -mr-1 h-5 w-5 text-indigo-200 hover:text-indigo-100"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-50 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-[#121A29] dark:border-gray-600"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active
                    ? 'bg-[#EBEAF4] text-primary dark:bg-black'
                    : 'text-dark',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white text-dark',
                ]"
                @click="emit('exportCosts')"
              >
                <DocumentArrowUpIcon
                  :active="active"
                  class="mr-2 h-5 w-5 text-primary dark:text-white"
                  aria-hidden="true"
                />
                Export Costs
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active
                    ? 'bg-[#EBEAF4] text-primary dark:bg-black'
                    : 'text-dark',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white text-dark',
                ]"
                @click="emit('exportInvoices')"
              >
                <DocumentArrowUpIcon
                  :active="active"
                  class="mr-2 h-5 w-5 text-primary dark:text-white"
                  aria-hidden="true"
                />
                Export Invoices
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                @click="emit('exportPayments')"
                :class="[
                  active
                    ? 'bg-[#EBEAF4] text-primary dark:bg-black'
                    : 'text-dark',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white text-dark',
                ]"
              >
                <DocumentArrowUpIcon
                  :active="active"
                  class="mr-2 h-5 w-5 text-primary dark:text-white"
                  aria-hidden="true"
                />
                Export Payments
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import {
  ChevronDownIcon,
  DocumentArrowUpIcon,
} from "@heroicons/vue/24/outline";

const emit = defineEmits(['exportPayments', 'exportInvoices'])
</script>
