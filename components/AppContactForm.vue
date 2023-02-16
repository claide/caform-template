<template>
  <div>
    <form>
      <div class="space-y-4 md:space-y-4">
        <div>
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded focus:ring-primary focus:border-primary block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary mb-4"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <input
            type="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded focus:ring-primary focus:border-primary block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary mb-4"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <textarea
            rows="4"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded focus:ring-primary focus:border-primary block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary mb-4"
            placeholder="Enter your message"
          />
        </div>
      </div>

      <button
        type="submit"
        class="w-full max-w-[290px] sm:max-w[272px] mx-auto block text-white bg-primary hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-base px-5 py-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-8"
      >
        Send
      </button>
    </form>
  </div>
</template>
