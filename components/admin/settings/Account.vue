<template>
  <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
    <form>
      <div class="mb-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
          Personal Information
        </h3>
        <p class="mt-1 text-sm text-slate-500">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>

      <fieldset>
        <div class="grid grid-cols-4 gap-6">
          <div class="col-span-4 sm:col-span-2">
            <label
              for="first-name"
              class="block text-sm font-medium text-gray-700 dark:text-white"
              >First name</label
            >
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
          </div>
          <div class="col-span-4 sm:col-span-2">
            <label
              for="last-name"
              class="block text-sm font-medium text-gray-700 dark:text-white"
              >Last name</label
            >
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
          </div>

          <div class="col-span-4 sm:col-span-3">
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 dark:text-white"
              >Email</label
            >
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
          </div>

          <div class="col-span-4 sm:col-span-2">
            <label
              for="company"
              class="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Company
            </label>
            <div class="mt-1 rounded-md shadow-sm flex">
              <input
                type="text"
                name="company"
                id="company"
                autocomplete="company"
                class="bg-gray-50 borderfocus:ring-primary focus:border-primary text-sm block w-full min-w-0 rounded-none rounded-l sm:text-sm border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
              <span
                class="bg-gray-50 border border-l-0 border-gray-300 rounded-r px-3 inline-flex items-center text-gray-500 sm:text-sm"
              >
                costapplicationform.com
              </span>
            </div>
          </div>
        </div>
      </fieldset>
      <div class="mt-8 border-t dark:border-gray-700 text-right py-4 sm:px-6">
        <button
          type="submit"
          class="bg-[#6158CD] border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6158CD]"
        >
          Save changes
        </button>
      </div>
    </form>
  </div>
</template>
