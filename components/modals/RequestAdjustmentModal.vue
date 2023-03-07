<template>
  <AppModal ref="modal">
    <template #title>Request Adjustment</template>
    <form @submit="onSubmit">
      <div class="px-6 pb-6">
        <div class="space-y-4">
          <div>
            <label
              for="adjustment_reason"
              class="block text-sm font-medium text-gray-700"
            >
              Add Reason
            </label>
            <div class="mt-1">
              <textarea
                type="text"
                v-model="reason"
                name="adjustment_reason"
                rows="7"
                class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded text-dark"
              />
              <ErrorMessage class="text-red-700 text-sm" name="name" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-gray-200 px-4 py-3 sm:py-4 sm:flex sm:flex-row-reverse sm:px-6"
      >
        <button
          type="submit"
          class="inline-flex w-full justify-center rounded-full border border-transparent bg-[#6158CD] px-4 py-2 text-base font-medium text-white hover:bg-[#5045ca] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-2 sm:w-auto sm:text-sm"
        >
          Submit
        </button>
        <button
          type="button"
          class="mt-3 inline-flex w-full justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          @click.prevent="show(false)"
        >
          Cancel
        </button>
      </div>
    </form>
  </AppModal>
</template>

<script setup>
import { Field, ErrorMessage, useForm, useField } from "vee-validate";
import * as yup from "yup";

const modal = ref(null);
const props = defineProps({
  cost: {
    type: Object,
    default() {
      return {};
    },
  },
});

const validationSchema = yup.object({
  adjustment_reason: yup.string().label("Reason").required(),
});

const { handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    adjustment_reason: "",
  },
});

const { value: reason } = useField("adjustment_reason");

const onSubmit = handleSubmit(async (values) => {
  try {
    await useBaseFetch(`/cost/costs/${props.cost.id}/adjust`, {
      method: "POST",
      body: values,
    });
    show(false);
  } catch {}
});

const show = (opened = true) => {
  modal.value.show(opened);
};

defineExpose({
  show,
});
</script>
