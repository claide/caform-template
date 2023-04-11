<template>
  <div
    class="block bg-white rounded-none md:rounded-xl px-6 py-11 md:shadow-lg w-auto"
  >
    <h2
      class="text-center font-medium text-2xl md:text-3xl leading-normal mb-4 text-dark"
    >
      Create your account
    </h2>
    <p class="text-base text-[#767676] mb-12 text-center">
      Empower your finances by registering with CAF
    </p>
    <Form @submit="onSubmit" :validation-schema="schema">
      <div class="grid gap-4 mb-4 md:grid-cols-2">
        <div>
          <Field
            type="text"
            id="first_name"
            name="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded focus:ring-primary focus:border-primary block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            placeholder="Enter first name"
          />
          <ErrorMessage name="first_name" class="text-red-700 text-sm" />
        </div>
        <div>
          <Field
            type="text"
            id="last_name"
            name="last_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded focus:ring-primary focus:border-primary block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            placeholder="Enter last name"
          />
          <ErrorMessage name="last_name" class="text-red-700 text-sm" />
        </div>
      </div>

      <div class="mb-4">
        <Field
          name="company"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded focus:ring-primary focus:border-primary block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
          placeholder="Enter company name"
        />
        <ErrorMessage name="company" class="text-red-700 text-sm" />
      </div>

      <div class="mb-4">
        <Field
          type="email"
          name="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded focus:ring-primary focus:border-primary block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
          placeholder="Enter your email"
        />
        <ErrorMessage name="email" class="text-red-700 text-sm" />
      </div>

      <div class="mb-4">
        <Field
          type="password"
          name="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded focus:ring-primary focus:border-primary block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
          placeholder="Create password"
        />
        <ErrorMessage name="password" class="text-red-700 text-sm" />
      </div>

      <p class="text-[#767676] mb-12">
        By proceeding, you agree to the
        <nuxt-link
          to="/terms-and-conditions"
          class="underline hover:text-primary"
          >Terms and Conditions</nuxt-link
        >
      </p>

      <button
        type="submit"
        class="bg-secondary text-white w-full rounded-full p-4 text-lg font-medium"
      >
        Create account
      </button>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { object, string } from "yup";

const schema = object({
  first_name: string().label("First name").required(),
  last_name: string().label("Last name").required(),
  email: string().label("Email").required().email(),
  company: string().label("Company").required(),
  password: string().label("Password").min(6).required(),
});

const onSubmit = (values) => {
  console.log("values", values);
};
</script>
