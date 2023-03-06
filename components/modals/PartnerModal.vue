<template>
  <AppModal ref="modal">
    <template #title>Add new cost partner</template>
    <form @submit="onSubmit">
      <div class="px-6 pb-6">
        <div class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div class="mt-1">
              <Field
                type="text"
                name="name"
                class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded text-dark"
              />
              <ErrorMessage class="text-red-700 text-sm" name="name" />
            </div>
          </div>

          <div>
            <label
              for="pament_method"
              class="block text-sm font-medium text-gray-700"
            >
              Payment Method
            </label>
            <div class="mt-1">
              <Field
                as="select"
                name="payment_method"
                class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded text-dark"
              >
                <option value="" disabled>Select payment method</option>
                <option
                  v-for="(option, index) in paymentMethods"
                  :key="index"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </Field>
              <ErrorMessage
                class="text-red-700 text-sm"
                name="payment_method"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-gray-200 px-4 py-3 sm:py-4 sm:flex sm:flex-row-reverse sm:px-6"
      >
        <button
          type="submit"
          class="inline-flex w-full justify-center rounded-full border border-transparent bg-[#6158CD] px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-2 sm:w-auto sm:text-sm"
        >
          Add partner
        </button>
        <button
          type="button"
          class="mt-3 inline-flex w-full justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          @click="show(false)"
        >
          Cancel
        </button>
      </div>
    </form>
  </AppModal>
</template>

<script setup>
import { Field, ErrorMessage, useForm } from "vee-validate";
import * as yup from "yup";

const modal = ref(null);
const paymentMethods = [
  { label: "Wiretransfer", value: 1 },
  { label: "Bitsafe", value: 2 },
  { label: "SEPA", value: 3 },
];

const validationSchema = yup.object({
  name: yup.string().label("Name").required(),
  payment_method: yup.string().label("Payment method").required(),
});

const { handleSubmit } = useForm({
  validationSchema,
});

const onSubmit = handleSubmit((values) => {
  console.log("values", values);
  emit("submitted", values);
  show(false);
});

const show = (opened = true) => {
  modal.value.show(opened);
};

defineExpose({
  show,
});
</script>
