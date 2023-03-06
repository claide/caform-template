<template>
  <form @submit.prevent="submitCost">
    <div class="space-y-4 sm:space-y-5">
      <div>
        <label
          for="applicant-name"
          class="block text-sm font-medium text-gray-700"
        >
          Applicant name
        </label>
        <div class="mt-1">
          <input
            type="text"
            id="applicant_name"
            name="applicant_name"
            v-model="applicantName"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          />
          <ErrorMessage class="text-red-700 text-sm" name="applicant_name" />
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div class="mt-1">
          <input
            id="email"
            type="email"
            name="email"
            v-model="email"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          />
          <ErrorMessage class="text-red-700 text-sm" name="email" />
        </div>
      </div>

      <div>
        <label for="invoice" class="block text-sm font-medium text-gray-700">
          Invoice number
        </label>
        <div class="mt-1">
          <input
            id="invoice_number"
            type="text"
            name="invoice_number"
            v-model="invoiceNumber"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          />
          <ErrorMessage class="text-red-700 text-sm" name="invoice_number" />
        </div>
      </div>

      <div>
        <label for="currency" class="block text-sm font-medium text-gray-700">
          Currency
        </label>
        <div class="mt-1">
          <select
            id="currency"
            as="select"
            name="currency"
            v-model="currency"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          >
            <option
              v-for="currency in currencies"
              :value="currency"
              :key="currency"
            >
              {{ currency }}
            </option>
          </select>
          <ErrorMessage class="text-red-700 text-sm" name="currency" />
        </div>
      </div>

      <div>
        <label for="partner" class="block text-sm font-medium text-gray-700">
          Select partner
        </label>
        <div class="mt-1">
          <select
            as="select"
            id="cost_partner_id"
            name="cost_partner_id"
            v-model="costPartnerId"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          >
            <option
              v-for="partner in partners"
              :value="partner.id"
              :key="partner.id"
            >
              {{ partner.name }}
            </option>
          </select>
          <ErrorMessage class="text-red-700 text-sm" name="cost_partner_id" />
        </div>
      </div>

      <div>
        <label
          for="payment-method"
          class="block text-sm font-medium text-gray-700"
        >
          Payment method
        </label>
        <div class="mt-1">
          <select
            as="select"
            id="payment_method"
            name="payment_method"
            v-model="paymentMethod"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          >
            <option
              v-for="method in paymentMethods"
              :value="method.value"
              :key="method.value"
            >
              {{ method.label }}
            </option>
          </select>
          <ErrorMessage class="text-red-700 text-sm" name="payment_method" />
        </div>
      </div>

      <div
        class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-6 after:flex-1 after:border-t after:border-gray-300 after:mt-6"
      ></div>

      <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Beneficiary Information
        </h3>
        <p class="mt-1 text-sm text-gray-500 dark:text-[#818692]">
          Use a permanent address where you can receive mail.
        </p>
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
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
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
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
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
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
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
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          />
        </div>
      </div>

      <div v-if="showPaymentField(paymentMethod, [1])">
        <label for="country" class="block text-sm font-medium text-gray-700">
          Country
        </label>
        <div class="mt-1">
          <select
            name="payment_info.country_code"
            v-model="paymentInfo.country_code"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          >
            <option
              v-for="(country, code) in countries"
              :key="code"
              :value="code"
            >
              {{ country }}
            </option>
          </select>
        </div>
      </div>

      <div v-if="showPaymentField(paymentMethod, [1, 2, 3])">
        <label for="account" class="block text-sm font-medium text-gray-700">
          IBAN account number
        </label>
        <div class="mt-1">
          <input
            type="text"
            name="payment_info.iban_account_number"
            v-model="paymentInfo.iban_account_number"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          />
        </div>
      </div>
      <div v-if="showPaymentField(paymentMethod, [1])">
        <label for="swift-code" class="block text-sm font-medium text-gray-700">
          Swift code
        </label>
        <div class="mt-1">
          <input
            type="text"
            name="payment_info.swift_code"
            v-model="paymentInfo.swift_code"
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
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
            class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded"
          />
        </div>
      </div>

      <AppFileUploader :files="invoiceFiles" @remove-file="removeFile">
        Attach invoice
      </AppFileUploader>

      <div
        class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-6 after:flex-1 after:border-t after:border-gray-300 after:mt-6"
      />

      <div class="flex justify-between items-ceter w-full">
        <h3 class="text-lg font-medium text-gray-900">Breakdowns</h3>
        <button
          @click.prevent="addNewBreakdown"
          class="border border-gray-300 py-1 px-2 rounded text-sm"
        >
          Add new
        </button>
      </div>

      <CostBreakdown v-if="breakdowns.length > 0" :breakdowns="breakdowns" />
    </div>
    <button
      type="submit"
      class="bg-primary hover:bg-[#5045ca] text-white text-base font-medium py-3 px-6 rounded-full mr-3 w-full block mt-6"
    >
      Send
    </button>

    <ModalsBreakdownModal
      @submitted="onBreakdownSubmitted"
      ref="addBreakdown"
    />
  </form>
</template>

<script setup>
import allCountries from "@/utils/countries";
import { useForm, useField, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { usePartnerStore } from "@/store/partners";
import { useCostStore } from "@/store/cost";
import includes from "lodash/includes";

const partnerStore = usePartnerStore();
const costStore = useCostStore();
const countries = ref(allCountries);
const addBreakdown = ref(null);

const schema = yup.object({
  applicant_name: yup.string().label("Applicant name").required(),
  email: yup.string().required().label("Email").email(),
  invoice_number: yup.string().label("Invoice number").required(),
  currency: yup.string().label("Currency").required(),
  cost_partner_id: yup.number().label("Partner").required(),
  payment_method: yup.number().label("Payment method").required(),
});

const costForm = useForm({
  initialValues: {
    payment_method: 1,
    currency: "USD",
    payment_info: {},
    invoice_file: [],
    breakdowns: [],
  },
  validationSchema: schema,
});
const { handleSubmit, setErrors, resetForm } = costForm

const { value: applicantName } = useField("applicant_name");
const { value: email } = useField("email");
const { value: invoiceNumber } = useField("invoice_number");
const { value: paymentMethod } = useField("payment_method");
const { value: currency } = useField("currency");
const { value: paymentInfo } = useField("payment_info");
const { value: invoiceFiles } = useField("invoice_file");
const { value: costPartnerId } = useField("cost_partner_id");
const { value: breakdowns } = useField("breakdowns");

const partners = computed(() => {
  return partnerStore.partners.data;
});
const currencies = ["USD", "GBP", "EUR"];
const paymentMethods = [
  { label: "Wiretransfer", value: 1 },
  { label: "Bitsafe", value: 2 },
  { label: "SEPA", value: 3 },
];

const removeFile = (index) => {
  invoiceFiles.value.splice(index, 1);
};

const addNewBreakdown = () => {
  addBreakdown.value.show();
};

const showPaymentField = (selectedPaymentMethod, paymentMethods = []) => {
  return includes(paymentMethods, selectedPaymentMethod);
};

const onBreakdownSubmitted = (breakdown) => {
  breakdowns.value.push(breakdown);
};

const submitCost = handleSubmit(async (values) => {
  try {
    await costStore.createCost(values);
    resetForm()
  } catch (e) {
    setErrors(e.errors);
  }
});

onMounted(() => {
  partnerStore.getPartners();
});
</script>
