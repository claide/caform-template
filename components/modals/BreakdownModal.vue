<template>
  <AppModal ref="modal">
    <template #title>Add cost breakdown</template>
    <form @submit="submit">
      <div class="px-6 pb-6">
        <div class="space-y-4">
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700">
              Title
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="title"
                v-model="title"
                class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded"
              />
              <ErrorMessage class="text-red-700 text-sm" name="title" />
            </div>
          </div>

          <div>
            <label
              for="category"
              class="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <div class="mt-1">
              <select
                v-model="costCategoryId"
                name="cost_category_id"
                class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded"
              >
                <option
                  :key="category.id"
                  v-for="category in categoryStore.categories.data"
                  :value="category.id"
                >
                  {{ category.name }}
                  <span v-if="category.code && category.name"> - </span>
                  {{ category.code }}
                </option>
              </select>
              <ErrorMessage
                class="text-red-700 text-sm"
                name="cost_category_id"
              />
            </div>
          </div>

          <div>
            <label for="period" class="block text-sm font-medium text-gray-700">
              Date period
            </label>
            <div class="mt-1">
              <VueDatePicker
                v-model="date"
                range
                teleport-center
                :enableTimePicker="false"
              >
              </VueDatePicker>
              <ErrorMessage class="text-red-700 text-sm" name="date" />
            </div>
          </div>

          <div>
            <label for="amount" class="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="amount"
                v-model="amount"
                class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded"
              />
              <ErrorMessage class="text-red-700 text-sm" name="amount" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-gray-200 px-4 py-3 sm:py-4 sm:flex sm:flex-row-reverse sm:px-6"
      >
        <button
          type="submit"
          class="inline-flex w-full justify-center rounded-full border border-transparent bg-primary px-4 py-2 text-base font-medium text-white hover:bg-[#5045ca] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-2 sm:w-auto sm:text-sm"
          @click="submit"
        >
          <span v-if="isEditing">Update breakdown</span>
          <span v-else>Add breakdown</span>
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
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { Form, Field, ErrorMessage, useField, useForm } from "vee-validate";
import { useCategoryStore } from "@/store/categories";
import * as yup from "yup";
import dayjs from "dayjs";
import find from "lodash/find";
import isEmpty from "lodash/isEmpty";

const modal = ref(null);
const emit = defineEmits(["submitted", "updated"]);
const isEditing = ref(false);
const categoryStore = useCategoryStore();
const props = defineProps({
  breakdown: {
    type: Object,
    default: () => {},
  },
  currency: {
    type: String,
    default: 'GBP'
  }
});

const validationSchema = yup.object({
  title: yup.string().label("Title").required(),
  cost_category_id: yup.number().label("Cost category ID").required(),
  amount: yup.number().label("Amount").required(),
});

const { handleSubmit, resetForm } = useForm({
  validationSchema,
});

const { value: title } = useField("title");
const { value: costCategoryId } = useField("cost_category_id");
const { value: amount } = useField("amount");
const { value: date } = useField("date");

const show = (opened = true) => {
  modal.value.show(opened);
};

const submit = handleSubmit((values) => {
  const category = find(categoryStore.categories.data, (category) => {
    return category.id === values.cost_category_id;
  });

  values.currency = props.currency;
  values.category_text = `${category.code || ""} ${category.name || ""}`;

  if (values.date) {
    values.period_from = dayjs(values.date[0]).format("YYYY-MM-DD");
    values.period_to = dayjs(values.date[1]).format("YYYY-MM-DD");
    delete values.date;
  }
  resetForm();
  if (isEditing.value) {
    emit("updated", values);
  } else {
    emit("submitted", values);
  }
  isEditing.value = false;
  show(false);
});

onMounted(async () => {
  await categoryStore.getCategories();
});

watch(
  () => props.breakdown,
  (values) => {
    if (!isEmpty(values)) {
      isEditing.value = true;
      values.date = [values.period_from, values.period_to];
    } else {
      isEditing.value = false;
    }
    resetForm({ values });
  }
);

defineExpose({
  show,
});
</script>
