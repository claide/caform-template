<template>
  <div class="container grid gap-4 md:gap-7 lg:grid-cols-12">
    <nuxtLink
      to="/"
      v-for="(item, index) in prices"
      :key="item.id"
      class="hidden sm:block border-2 border-dark rounded-lg px-3 py-4 lg:col-span-3 text-center text-dark hover:bg-purple-100 transition-colors delay-75"
    >
      <div class="font-bold text-2xl mb-2">{{ item.title }}</div>
      <div class="text-[#767676] mb-8">{{ item.sub }}</div>
      <div class="text-[#8E2DFE] font-bold text-3xl">£ {{ item.price }}</div>
      <div class="font-bold text-dark mb-8">{{ item.credits }} credits</div>
      <span class="text-primary underline inline-block mb-4"
        >See all features</span
      >
    </nuxtLink>

    <div class="sm:hidden mx-auto w-full max-w-md rounded-2xl bg-white sm:p-2">
      <Disclosure
        v-slot="{ open }"
        v-for="(item, index) in prices"
        :key="item.id"
        class="mb-2"
        as="div"
      >
        <DisclosureButton
          class="flex items-center w-full rounded-lg bg-primary px-2 py-3 text-left text-base font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75"
          :class="{ 'rounded-b-none': open }"
        >
          <RiArrowDownSLine
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-white mr-2 fill-current"
          />
          <span>{{ item.title }}</span>
          <span
            :class="{
              'bg-[#D1F1F2] text-[#0a5255]': item.id === 1 || item.id === 2,
              'bg-[#F2D2D1] text-[#69211e]': item.id === 3,
              'bg-[#F1F2D1] text-[#60621a]': item.id === 4,
            }"
            class="text-xs font-medium mr-2 px-2.5 py-1 rounded ml-auto"
            >{{ item.credits }} credits</span
          >
        </DisclosureButton>
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-out"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <DisclosurePanel
            class="px-4 pt-4 pb-2 text-sm text-gray-500 bg-primary rounded-b-lg"
          >
            <div class="text-white mb-8">{{ item.sub }}</div>
            <div class="text-[#50E3FE] font-bold text-3xl">
              £ {{ item.price }}
            </div>
            <div class="font-bold text-indigo-200 mb-8">
              {{ item.credits }} credits
            </div>
            <span class="text-white underline inline-block mb-4"
              >See all features</span
            >
          </DisclosurePanel>
        </transition>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { RiArrowDownSLine } from "vue-remix-icons";

const prices = ref([
  {
    id: 1,
    title: "Starter",
    sub: "Invoice like a pro",
    price: 29.95,
    credits: 1250,
  },
  {
    id: 2,
    title: "Plus",
    sub: "Stay organized at all times",
    price: 59.99,
    credits: 2750,
  },
  {
    id: 3,
    title: "Pro",
    sub: "Accelerate your earnings",
    price: 99.99,
    credits: 6500,
  },
  {
    id: 4,
    title: "Enterprise",
    sub: "Pay staff in minutes",
    price: 249.95,
    credits: 17500,
  },
]);
</script>
