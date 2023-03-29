<template>
  <div class="py-8">
    <section>
      <div class="md:flex md:items-center md:justify-between">
        <div class="min-w-0 flex-1 px-2 lg:px-0">
          <h2
            class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-white"
          >
            Settings
          </h2>
        </div>
      </div>

      <div class="bg-white dark:bg-[#121A29] rounded-md mt-8 p-6">
        <div class="flex flex-wrap sm:flex-nowrap mb-3">
          <div class="mr-5">
            <img
              class="w-40 h-40 rounded"
              src="https://i.pravatar.cc/300?img=18
"
              alt="Default avatar"
            />
          </div>
          <div class="flex-grow">
            <div class="flex justify-between items-start flex-wrap mb-2">
              <div class="flex flex-col">
                <div class="flex items-center mb-2">
                  <div class="font-bold mr-2 text-xl">Max Smith</div>
                </div>
                <div class="flex flex-wrap mb-4 text-sm">
                  <div class="flex item-center text-slate-500 mr-5">
                    <BriefcaseIcon class="w-5 h-5 mr-1" /> Aiveek
                  </div>
                  <div class="flex item-center text-slate-500">
                    <EnvelopeIcon class="w-5 h-5 mr-1" /> maxsmith@yahue.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <AppCard>
        <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
          <TabGroup vertical>
            <TabList class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
              <nav class="space-y-1">
                <Tab
                  v-for="item in navigation"
                  :key="item.name"
                  as="template"
                  v-slot="{ selected }"
                >
                  <a
                    :href="item.href"
                    :class="[
                      selected
                        ? 'bg-gray-50 dark:bg-[#1b273c] dark:text-white text-indigo-700 hover:text-indigo-700 hover:bg-white dark:hover:text-white'
                        : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-[#1b273c] dark:text-slate-500',
                      'group rounded-md px-3 py-2 flex items-center text-sm font-medium cursor-pointer',
                    ]"
                    :aria-current="selected ? 'page' : undefined"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        selected
                          ? 'text-indigo-500 group-hover:text-indigo-500 dark:text-white dark:group-hover:text-white'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                      ]"
                      aria-hidden="true"
                    />
                    <span class="truncate">
                      {{ item.name }}
                    </span>
                  </a>
                </Tab>
              </nav>
            </TabList>

            <TabPanels class="md:px-6 lg:px-0 lg:col-span-9">
              <TabPanel>
                <AdminSettingsAccount />
              </TabPanel>
              <TabPanel>
                <AdminSettingsSecurity />
              </TabPanel>
              <TabPanel>
                <AdminSettingsBilling />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </AppCard>
    </section>
  </div>
</template>

<script setup>
import {
  BriefcaseIcon,
  EnvelopeIcon,
  UserCircleIcon,
  KeyIcon,
  CreditCardIcon,
} from "@heroicons/vue/24/outline";

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

definePageMeta({
  layout: "admin",
  middleware: "auth",
});

useHead({
  title: "Settings",
});

const navigation = [
  { name: "Account", icon: UserCircleIcon, current: true },
  { name: "Password", icon: KeyIcon, current: false },
  { name: "Billing", icon: CreditCardIcon, current: false },
];
</script>
