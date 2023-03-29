<template>
  <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
    <div class="mb-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
        Password & Security
      </h3>
      <p class="mt-1 text-sm text-slate-500">Change your password</p>
    </div>

    <form>
      <fieldset>
        <div class="grid grid-cols-3 gap-6">
          <div class="col-span-3 sm:col-span-2">
            <label
              for="current-password"
              class="block text-sm font-medium text-gray-700 dark:text-white"
              >Current password</label
            >
            <input
              type="password"
              name="password"
              id="password"
              class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
          </div>
          <div class="col-span-3 sm:col-span-2">
            <label
              for="new-password"
              class="block text-sm font-medium text-gray-700 dark:text-white"
              >New password</label
            >
            <input
              type="password"
              name="new-password"
              class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-sm rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
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
    </form>
  </div>
</template>
