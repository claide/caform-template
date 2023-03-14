<template>
  <AppModal ref="modal">
    <template #title>
      <span v-if="isEditing">Update {{ props.partner.name }}</span>
      <span v-else>Add new cost partner</span>
    </template>
    <form @submit="onSubmit">
      <div class="px-6 pb-6">
        <div class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div class="mt-1">
              <input
                type="text"
                v-model="name"
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
              <select
                v-model="paymentMethod"
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
              </select>
              <ErrorMessage
                class="text-red-700 text-sm"
                name="payment_method"
              />
            </div>
          </div>

          <div class="mt-6" v-if="showPaymentField(paymentMethod, [1, 2, 3])">
            <label
              for="beneficiary"
              class="block text-sm font-medium text-gray-700"
            >
              Beneficiary name
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="payment_info.name"
                v-model="paymentInfo.name"
                class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded text-dark"
              />
            </div>
          </div>

          <div v-if="showPaymentField(paymentMethod, [1])">
            <label for="street" class="block text-sm font-medium text-gray-700">
              Street
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="payment_info.street"
                v-model="paymentInfo.street"
                class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded text-dark"
              />
            </div>
          </div>

          <div v-if="showPaymentField(paymentMethod, [1])">
            <label for="city" class="block text-sm font-medium text-gray-700">
              City
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="payment_info.city"
                v-model="paymentInfo.city"
                class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded text-dark"
              />
            </div>
          </div>

          <div v-if="showPaymentField(paymentMethod, [1])">
            <label for="postal" class="block text-sm font-medium text-gray-700">
              Postal code
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="payment_info.postal_code"
                v-model="paymentInfo.postal_code"
                class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded text-dark"
              />
            </div>
          </div>

          <div v-if="showPaymentField(paymentMethod, [1])">
            <label
              for="country"
              class="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <div class="mt-1">
              <select
                name="payment_info.country_code"
                v-model="paymentInfo.country_code"
                class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded text-dark"
              >
                <option
                  v-for="(country, code) in allCountries"
                  :key="code"
                  :value="code"
                >
                  {{ country }}
                </option>
              </select>
            </div>
          </div>

          <div v-if="showPaymentField(paymentMethod, [1, 2, 3])">
            <label
              for="account"
              class="block text-sm font-medium text-gray-700"
            >
              IBAN account number
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="payment_info.iban_account_number"
                v-model="paymentInfo.iban_account_number"
                class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded text-dark"
              />
            </div>
          </div>
          <div v-if="showPaymentField(paymentMethod, [1])">
            <label
              for="swift-code"
              class="block text-sm font-medium text-gray-700"
            >
              Swift code
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="payment_info.swift_code"
                v-model="paymentInfo.swift_code"
                class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded text-dark"
              />
            </div>
          </div>
          <div v-if="showPaymentField(paymentMethod, [1, 2, 3])">
            <label for="notes" class="block text-sm font-medium text-gray-700">
              Notes
            </label>
            <div class="mt-1">
              <textarea
                rows="5"
                name="payment_info.notes"
                v-model="paymentInfo.notes"
                class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded text-dark"
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
          class="inline-flex w-full justify-center rounded-full border border-transparent bg-[#6158CD] px-4 py-2 text-base font-medium text-white hover:bg-[#5045ca] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-2 sm:w-auto sm:text-sm"
        >
          <AppSpinner v-if="isSubmitting" />
          <span v-if="isEditing">Update partner</span>
          <span v-else>Add partner</span>
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
import includes from "lodash/includes";
import allCountries from "@/utils/countries";
import { usePartnerStore } from "@/store/partners";

const modal = ref(null);
const partnerStore = usePartnerStore();
const isSubmitting = ref(false);
const paymentMethods = [
  { label: "Wiretransfer", value: 1 },
  { label: "Bitsafe", value: 2 },
  { label: "SEPA", value: 3 },
  { label: "ACH", value: 4 },
];

const props = defineProps({
  partner: {
    type: Object,
    default() {
      return {
        payment_info: {},
      };
    },
  },
});

const isEditing = computed(() => {
  return props.partner;
});

const validationSchema = yup.object({
  name: yup.string().label("Name").required(),
  payment_method: yup.number().label("Payment method").required(),
});

const { handleSubmit, resetForm } = useForm({
  validationSchema,
  initialValues: {
    payment_info: {},
  },
});

const { value: name } = useField("name");
const { value: paymentMethod } = useField("payment_method");
const { value: paymentInfo } = useField("payment_info");

const showPaymentField = (selectedPaymentMethod, paymentMethods = []) => {
  return includes(paymentMethods, selectedPaymentMethod);
};

const onSubmit = handleSubmit(async (values) => {
  isSubmitting.value = true;
  try {
    await partnerStore.updateOrCreatePartner(values);
    await partnerStore.getPartners();
    isSubmitting.value = false;
    show(false);
  } catch (e) {
    isSubmitting.value = false;
  }
});

const show = (opened = true) => {
  modal.value.show(opened);
};

watch(
  () => props.partner,
  (values) => {
    resetForm({ values });
  }
);

defineExpose({
  show,
});
</script>
