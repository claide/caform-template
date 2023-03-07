<template>
  <div class="w-full relative z-10 md:w-52">
    <Listbox v-model="selectedItem">
      <div class="relative mt-1">
        <ListboxButton
          class="relative w-full cursor-default rounded bg-gray-50 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm dark:bg-[#111A29] dark:border-[#38404C] dark:placeholder-gray-400 dark:text-white border border-gray-300"
        >
          <span class="block truncate">{{ selectedPaymentMethod.name }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <ChevronUpDownIcon
              class="h-5 w-5 text-slate-400"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-50 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-[#111A29] dark:border-[#38404C]"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="status in paymentMethods"
              :key="status.name"
              :value="status.value"
              as="template"
            >
              <li
                :class="[
                  active
                    ? 'bg-[#EBEAF4] text-primary dark:bg-black'
                    : 'text-dark',
                  'relative cursor-default select-none py-2 pl-10 pr-4 dark:text-white text-dark',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ status.name }}</span
                >
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary dark:text-white"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup>
import _ from "lodash";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const props = defineProps({
  modelValue: {
    type: Number,
    default: null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const paymentMethods = [
  { name: "All Payment Methods", value: null },
  { name: "Wiretransfer", value: 1 },
  { name: "Bitsafe", value: 2 },
  { name: "SEPA", value: 3 },
  { name: "ACH", value: 4 },
];

const selectedItem = ref(props.modelValue);
const selectedPaymentMethod = computed(() => {
  return _.find(paymentMethods, (status) => {
    return status.value === selectedItem.value;
  });
});

watch(selectedItem, (value) => {
  emit("update:modelValue", value);
});
</script>
