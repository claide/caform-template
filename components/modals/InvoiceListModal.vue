<template>
  <AppModal ref="modal">
    <template #title>Invoice Files</template>

    <table
      v-if="cost"
      class="min-w-full text-sm divide-y dark:divide-[#2B333F] text-dark dark:text-slate-400"
    >
      <thead class="bg-gray-50 dark:bg-[#212737] dark:text-slate-400">
        <tr>
          <th
            scope="col"
            class="hidden px-3 py-3.5 text-left text-sm font-semibold sm:table-cell"
          >
            #
          </th>
          <th
            scope="col"
            class="hidden lg:table-cell px-3 py-3.5 text-left text-sm font-semibold"
          >
            File name
          </th>
          <th
            scope="col"
            class="hidden md:table-cell px-3 py-3.5 text-left text-sm font-semibold"
          ></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="file in cost.invoice_files"
          :key="file.id"
          class="bg-white border-b dark:bg-[#121A29] dark:border-[#2B333F]"
        >
          <td
            class="hidden sm:table-cell px-3 py-3 text-sm text-gray-500 dark:text-[#818692]"
          >
            {{ file.id }}
          </td>
          <td
            class="hidden sm:table-cell px-3 py-3 text-sm text-gray-500 dark:text-[#818692]"
          >
            {{ file.file_name }}
          </td>
          <td
            class="hidden sm:table-cell px-3 py-3 text-sm text-gray-500 dark:text-[#818692]"
          >
            <button
              @click.prevent="downloadFile(file)"
              class="border border-gray-300 py-1 px-2 rounded text-sm"
            >
              Download
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </AppModal>
</template>

<script setup>
const modal = ref(null);

const props = defineProps({
  cost: {
    type: Object,
    default() {
      return {};
    },
  },
});

const show = (opened = true) => {
  modal.value.show(opened);
};

const downloadFile = (file) => {
  window.open(file.url, '_blank')
}

defineExpose({
  show,
});
</script>
