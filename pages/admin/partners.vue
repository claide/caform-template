<template>
  <section class="py-8">
    <div class="md:flex md:items-center md:justify-between">
      <div class="min-w-0 flex-1 px-2 lg:px-0">
        <h2
          class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-white"
        >
          Partners
        </h2>
      </div>
    </div>

    <AdminPartnersTable />
    <AdminPagination
      v-model="partnerStore.partners.meta.current_page"
      :from="partnerStore.partners.meta.from"
      :to="partnerStore.partners.meta.to"
      :total="partnerStore.partners.meta.total"
    />
  </section>
</template>

<script setup>
import { usePartnerStore } from "@/store/partners";

definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});

useHead({
  title: "Partners",
});

const partnerStore = usePartnerStore();
</script>
