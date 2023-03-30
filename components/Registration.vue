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

    <div class="grid gap-4 mb-4 md:grid-cols-2">
      <div>
        <input
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded focus:ring-primary focus:border-primary block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
          placeholder="Enter first name"
        />
      </div>
      <div>
        <input
          type="text"
          id="last_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded focus:ring-primary focus:border-primary block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
          placeholder="Enter last name"
        />
      </div>
    </div>

    <input
      type="text"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded focus:ring-primary focus:border-primary block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary mb-4"
      placeholder="Enter company name"
    />

    <input
      type="email"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded focus:ring-primary focus:border-primary block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary mb-4"
      placeholder="Enter your email"
    />

    <input
      type="password"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded focus:ring-primary focus:border-primary block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary mb-4"
      placeholder="Create password"
    />

    <p class="text-[#767676] mb-12">
      By proceeding, you agree to the
      <nuxt-link to="/terms-and-conditions" class="underline hover:text-primary"
        >Terms and Conditions</nuxt-link
      >
    </p>

    <button
      type="submit"
      class="bg-secondary text-white w-full rounded-full p-4 text-lg font-medium"
    >
      Create account
    </button>
  </div>
</template>
