<template>
  <div class="px-2 lg:px-0">
    <div
      class="-mx-4 mt-8 shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg"
    >
      <table
        class="min-w-full text-sm divide-y divide-[#2B333F] text-dark dark:text-gray-400"
      >
        <thead class="bg-gray-50 dark:bg-[#212737] dark:text-gray-400">
          <tr>
            <th
              scope="col"
              class="hidden py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6 lg:table-cell"
            ></th>
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left text-sm font-semibold sm:table-cell"
            >
              Partner
            </th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">
              <span class="hidden md:block">Applicant</span>
              <span class="md:hidden">Details</span>
            </th>
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left text-sm font-semibold lg:table-cell"
            >
              Invoice #
            </th>
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left text-sm font-semibold lg:table-cell"
            >
              Currency
            </th>
            <th
              scope="col"
              class="hidden lg:table-cell px-3 py-3.5 text-left text-sm font-semibold"
            >
              Amount
            </th>
            <th
              scope="col"
              class="hidden lg:table-cell px-3 py-3.5 text-left text-sm font-semibold"
            >
              Payment Method
            </th>
            <th
              scope="col"
              class="hidden md:table-cell px-3 py-3.5 text-left text-sm font-semibold"
            >
              Status
            </th>
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left text-sm font-semibold sm:table-cell"
            >
              Date Created
            </th>
            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="cost in costStore.costs"
            :key="cost.id"
            class="bg-white border-b dark:bg-[#121A29] dark:border-[#2B333F]"
          >
            <td
              class="hidden w-full max-w-0 py-3 pl-4 pr-3 text-sm text-gray-500 dark:text-[#818692] sm:w-auto sm:max-w-none sm:pl-6 lg:table-cell"
            >
              {{ cost.id }}
            </td>
            <td
              class="hidden sm:table-cell px-3 py-3 text-sm text-gray-500 dark:text-[#818692]"
            >
              {{ cost.partner }}
            </td>
            <td class="px-3 py-3 text-sm font-medium">
              <span class="dark:text-white">{{ cost.applicant }}</span>
              <div
                class="hidden md:block text-gray-500 dark:text-[#818692] text-xs"
              >
                {{ cost.email }}
              </div>
              <dl class="lg:hidden font-normal">
                <dt class="sr-only md:hidden">Email</dt>
                <dd
                  class="mt-1 truncate text-xs text-gray-500 dark:text-[#818692] md:hidden"
                >
                  {{ cost.email }}
                </dd>
                <dt class="sr-only md:hidden">Partner</dt>
                <dd class="mt-1 truncate text-xs md:hidden">
                  Partner: {{ cost.partner }}
                </dd>
                <dt class="sr-only">Invoice #</dt>
                <dd class="mt-1 truncate text-xs">
                  Invoice #: {{ cost.invoice_number }}
                </dd>
                <dt class="sr-only">Amount</dt>
                <dd class="mt-1 truncate text-xs">
                  Amount: {{ cost.currency }} {{ cost.amount }}
                </dd>
                <dt class="sr-only">Payment method</dt>
                <dd class="mt-1 truncate text-xs">
                  Payment Method: {{ cost.payment_method }}
                </dd>
                <dt class="sr-only md:hidden">Status</dt>
                <dd class="mt-1 truncate text-xs md:hidden">
                  <span
                    :class="{
                      'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300':
                        cost.status === 'Paid',
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300':
                        cost.status === 'Pending',
                      'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300':
                        cost.status === 'Approved',
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300':
                        cost.status === 'Unpaid',
                    }"
                    class="text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
                    >{{ cost.status }}</span
                  >
                </dd>
              </dl>
            </td>
            <td
              class="hidden px-3 py-3 text-sm text-gray-500 dark:text-[#818692] lg:table-cell"
            >
              {{ cost.invoice_number }}
            </td>
            <td
              class="hidden px-3 py-3 text-sm text-gray-500 dark:text-[#818692] lg:table-cell"
            >
              {{ cost.currency }}
            </td>
            <td
              class="hidden px-3 py-3 text-sm text-gray-500 dark:text-[#818692] lg:table-cell"
            >
              {{ cost.amount }}
            </td>
            <td
              class="hidden px-3 py-3 text-sm text-gray-500 dark:text-[#818692] lg:table-cell"
            >
              {{ cost.payment_method }}
            </td>
            <td
              class="hidden md:table-cell px-3 py-3 text-sm text-gray-500 dark:text-[#818692]"
            >
              <span
                :class="{
                  'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300':
                    cost.status === 'Paid',
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300':
                    cost.status === 'Pending',
                  'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300':
                    cost.status === 'Approved',
                  'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300':
                    cost.status === 'Unpaid',
                }"
                class="text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
                >{{ cost.status }}</span
              >
            </td>
            <td
              class="hidden px-3 py-3 text-sm text-gray-500 dark:text-[#818692] sm:table-cell"
            >
              {{ cost.date_created }}
            </td>
            <td class="px-3 py-3 text-sm text-gray-500 dark:text-[#818692]">
              <AdminCostsManageDropdown />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useCostStore } from "@/store/cost";

const costStore = useCostStore();

onMounted(() => {
  costStore.getCosts();
});
</script>
