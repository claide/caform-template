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
      <div class="mt-5 flex lg:mt-0 lg:ml-4 px-2 lg:px-0">
        <button
          @click="addNewPartner"
          class="bg-[#6158CD] px-4 py-3 rounded-full text-sm font-medium hover:bg-[#5045ca] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 flex items-center text-white"
        >
          <PlusIcon class="w-5 h-5 mr-1" />
          Add new
        </button>
      </div>
    </div>

    <AdminPartnersTable @edit="onPartnerEdit" />
    <AdminPagination
      @update:modelValue="onPageChanged"
      v-model="partnerStore.partners.meta.current_page"
      :pages="partnerStore.partners.meta.last_page"
      :from="partnerStore.partners.meta.from"
      :to="partnerStore.partners.meta.to"
      :total="partnerStore.partners.meta.total"
    />
    <ModalsPartnerModal :partner="selectedPartner" ref="addPartner" />
  </section>
</template>

<script setup>
import { PlusIcon } from "@heroicons/vue/24/outline";
import { usePartnerStore } from "@/store/partners";

definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});

useHead({
  title: "Partners",
});

const partnerStore = usePartnerStore();
const addPartner = ref(null);
const selectedPartner = ref(null);

const onPageChanged = (page) => {
  partnerStore.setMeta({ current_page: page });
};

const addNewPartner = () => {
  selectedPartner.value = null;
  addPartner.value.show();
};

const onPartnerEdit = (partner) => {
  selectedPartner.value = partner;
  addPartner.value.show();
};
</script>
