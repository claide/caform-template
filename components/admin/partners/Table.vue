<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="px-2 lg:px-0">
    <div
      class="-mx-4 mt-8 shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg"
    >
      <table
        class="min-w-full text-sm divide-y dark:divide-[#2B333F] text-dark dark:text-slate-400"
      >
        <thead class="bg-gray-50 dark:bg-[#212737] dark:text-slate-400">
          <tr>
            <th
              scope="col"
              class="hidden py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6 lg:table-cell"
            ></th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">
              <span class="hidden sm:block">Name</span>
              <span class="sm:hidden">Details</span>
            </th>
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left text-sm font-semibold lg:table-cell"
            >
              Payment Method
            </th>
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left text-sm font-semibold sm:table-cell"
            >
              Date Created
            </th>
            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span class="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="partner in partnerStore.partners.data"
            :key="partner.id"
            class="bg-white border-b dark:bg-[#121A29] dark:border-gray-700"
          >
            <td
              class="hidden w-full max-w-0 py-3 pl-4 pr-3 text-sm text-gray-500 dark:text-[#818692] sm:w-auto sm:max-w-none sm:pl-6 lg:table-cell"
            >
              {{ partner.id }}
            </td>
            <td class="px-3 py-3 text-sm font-medium">
              <span class="dark:text-white">{{ partner.name }}</span>
              <dl class="lg:hidden font-normal">
                <dt class="sr-only md:hidden">Code</dt>
                <dd
                  class="mt-1 truncate text-xs text-gray-500 dark:text-[#818692] md:hidden"
                >
                  {{ partner.paymentMethodText }}
                </dd>
                <dt class="sr-only md:hidden">Date created</dt>
                <dd
                  class="mt-1 truncate text-xs text-gray-500 dark:text-[#818692] md:hidden"
                >
                  {{ partner.createdAt }}
                </dd>
              </dl>
            </td>
            <td
              class="hidden px-3 py-3 text-sm text-gray-500 dark:text-[#818692] lg:table-cell"
            >
              {{ partner.paymentMethodText }}
            </td>
            <td
              class="hidden px-3 py-3 text-sm text-gray-500 dark:text-[#818692] sm:table-cell"
            >
              {{ partner.createdAt }}
            </td>
            <td class="px-3 py-3 text-sm text-gray-500 dark:text-[#818692]">
              <AdminCategoriesManageDropdown
                @edit="onPartnerEdit"
                @remove="onPartnerDelete"
                :item="partner"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <ConfirmModal ref="confirmModal" />
  </div>
</template>

<script setup>
import { usePartnerStore } from "@/store/partners";
import ConfirmModal from "@/components/modals/ConfirmModal";

const partnerStore = usePartnerStore();
const confirmModal = ref(null);

const onPartnerEdit = (partner) => {
  console.log(partner);
};

const onPartnerDelete = async (partner) => {
  const confirmed = await confirmModal.value.show(
    "Are you sure to delete this partner?"
  );

  if (confirmed) {
    try {
      await partner.delete();
      await partnerStore.getPartners();
    } catch {}
  }
};

onMounted(() => {
  partnerStore.getPartners();
});
</script>
