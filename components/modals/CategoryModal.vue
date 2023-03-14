<template>
  <AppModal ref="modal">
    <template #title>
      <span v-if="isEditing">Update category</span>
      <span v-else>Add new cost category</span>
    </template>

    <form @submit="onSubmit">
      <div class="px-6 pb-6">
        <div class="space-y-4">
          <div>
            <label for="code" class="block text-sm font-medium text-gray-700">
              Code
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="code"
                v-model="code"
                class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded text-dark"
              />
              <ErrorMessage class="text-red-700 text-sm" name="code" />
            </div>
          </div>

          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="name"
                v-model="name"
                class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded text-dark"
              />
              <ErrorMessage class="text-red-700 text-sm" name="name" />
            </div>
          </div>

          <div>
            <label for="parent" class="block text-sm font-medium text-gray-700">
              Parent
            </label>
            <select
              name="parent_id"
              v-model="parentId"
              class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded text-dark"
            >
              <option
                v-for="option in categoryStore.categories.data"
                :key="option.id"
                :value="option.id"
              >
                {{ option.code }}
                <span v-if="option.code && option.name"> - </span>
                {{ option.name }}
              </option>
            </select>
            <ErrorMessage class="text-red-700 text-sm" name="parent_id" />
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
          <span v-if="isEditing">Update category</span>
          <span v-else>Add category</span>
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
import { ErrorMessage, useForm, useField } from "vee-validate";
import { useCategoryStore } from "@/store/categories";
import * as yup from "yup";

const modal = ref(null);
const emit = defineEmits(["submitted"]);
const categoryStore = useCategoryStore();
const isSubmitting = ref(false);

const props = defineProps({
  category: {
    type: Object,
    default() {
      return {};
    },
  },
});

const validationSchema = yup.object({
  code: yup.string().label("Code").required(),
  name: yup.string().label("Name"),
  parent_id: yup.number().nullable().label("Parent"),
});

const show = (opened = true) => {
  modal.value.show(opened);
};

const { handleSubmit, resetForm } = useForm({
  validationSchema,
});

const { value: code } = useField("code");
const { value: name } = useField("name");
const { value: parentId } = useField("parentId");

const isEditing = computed(() => {
  return props.category.id;
});

const onSubmit = handleSubmit(async (values) => {
  isSubmitting.value = true;
  try {
    await categoryStore.updateOrCreateCategory(values);
    await categoryStore.getCategories();
    isSubmitting.value = false;
    show(false);
  } catch {
    isSubmitting.value = false;
  }
});

onMounted(async () => {
  await categoryStore.getCategories();
});

watch(
  () => props.category,
  (values) => {
    resetForm({ values });
  }
);

defineExpose({
  show,
});
</script>
