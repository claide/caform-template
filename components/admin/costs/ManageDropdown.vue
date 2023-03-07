<template>
  <div class="text-right">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex justify-center rounded-full border border-primary p-1 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:border-white"
        >
          <ChevronDownIcon
            class="h-3 w-3 text-primary dark:text-white"
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
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-50 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-[#121A29] dark:border-gray-600 z-10"
        >
          <div class="px-1 py-1">
            <template v-for="(item, index) in operationItems">
              <MenuItem v-slot="{ active }" v-if="item.show" :key="index">
                <button
                  @click="item.action"
                  :class="[
                    active
                      ? 'bg-[#EBEAF4] text-primary dark:bg-black'
                      : 'text-dark',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white text-dark',
                  ]"
                >
                  {{ item.text }}
                </button>
              </MenuItem>
            </template>
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
import Cost from "@/models/Cost";

const props = defineProps({
  cost: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits([
  "viewBreakdowns",
  "deleteCost",
  "manageCost",
  "viewInvoices",
  "requestAdjustment",
]);

const operationItems = computed(() => {
  return [
    {
      text: "Mark as Paid",
      action: markAsPaid,
      show: props.cost.status == 2,
    },
    {
      text: "Reject payment",
      action: rejectPayment,
      show: props.cost.status == 2,
    },
    {
      text: "Approve",
      action: approveCost,
      show: props.cost.status !== 2 && props.cost.status !== 4,
    },
    {
      text: "Reject",
      action: rejectCost,
      show: props.cost.status !== 3 && props.cost.status !== 4,
    },
    {
      text: "Request Adjustment",
      action: requestAdjustment,
      show: props.cost.status !== 4,
    },
    {
      text: "View breakdowns",
      action: viewBreakdowns,
      show: props.cost.breakdowns.length,
    },
    {
      text: "View invoices",
      action: viewInvoices,
      show: props.cost.invoice_files.length,
    },
    { text: "Delete", action: deleteCost, show: true },
  ];
});

const viewBreakdowns = () => {
  emit("viewBreakdowns", props.cost);
};

const viewInvoices = () => {
  emit("viewInvoices", props.cost);
};

const deleteCost = () => {
  emit("deleteCost", props.cost);
};

const markAsPaid = () => {
  emit("manageCost", props.cost, 4);
};

const rejectPayment = () => {
  emit("manageCost", props.cost, 5);
};

const approveCost = () => {
  emit("manageCost", props.cost, 2);
};

const rejectCost = () => {
  emit("manageCost", props.cost, 3);
};

const requestAdjustment = () => {
  emit("requestAdjustment", props.cost);
};
</script>
