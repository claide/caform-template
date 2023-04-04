<template>
  <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
    <div class="mb-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
        Password & Security
      </h3>
      <p class="mt-1 text-sm text-slate-500">Change your password</p>
    </div>

    <Form @submit="onSubmit" :validation-schema="schema">
      <fieldset>
        <div class="grid grid-cols-3 gap-6 gap-y-4">
          <div class="col-span-3 sm:col-span-2">
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 dark:text-white"
              >Current password</label
            >
            <Field
              type="password"
              name="password"
              id="password"
              class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
            <ErrorMessage name="password" class="text-red-700 text-sm" />
          </div>
          <div class="col-span-3 sm:col-span-2">
            <label
              for="passwordConfirmation"
              class="block text-sm font-medium text-gray-700 dark:text-white"
              >Confirm password</label
            >
            <Field
              type="password"
              id="passwordConfirmation"
              name="passwordConfirmation"
              class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
            <ErrorMessage
              name="passwordConfirmation"
              class="text-red-700 text-sm"
            />
          </div>

          <div class="col-span-3 sm:col-span-2 text-right">
            <button
              type="submit"
              class="bg-[#6158CD] border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6158CD]"
            >
              Save changes
            </button>
          </div>
        </div>
      </fieldset>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const props = defineProps({
  user: {
    type: Object,
    default() {
      return {};
    },
  },
});

const schema = yup.object().shape({
  password: yup.string().min(6).required().label("Password"),
  passwordConfirmation: yup
    .string()
    .required()
    .label("Confirm password")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});
</script>
