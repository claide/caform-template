<template>
  <section class="py-8">
    <div class="md:flex md:items-center md:justify-between mb-8">
      <div class="min-w-0 flex-1 px-2 lg:px-0">
        <h2
          class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-white"
        >
          Top up credits
        </h2>
      </div>
    </div>
    <div class="px-2 lg:px-0">
      <div class="grid grid-cols-4 gap-4">
        <div
          @click="onSelectItem(item.id)"
          v-for="(item, index) in prices"
          class="bg-transparent rounded-lg p-2 md:p-4 pb-0 border-2 border-[#212737] col-span-4 md:col-span-1 relative flex flex-row cursor-pointer"
        >
          <div class="flex flex-col w-full space-y-2">
            <div class="uppercase text-sm flex items-center">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1360 1344"
                class="w-5 h-5 text-dark dark:text-white fill-current mr-2"
              >
                <path
                  class="cls-1"
                  d="M680,82.69C354.53,82.69,90.69,346.53,90.69,672S354.53,1261.31,680,1261.31,1269.31,997.47,1269.31,672,1005.47,82.69,680,82.69ZM663.41,333a31.11,31.11,0,0,1,31.13-29.88h36a43.44,43.44,0,0,1,41.69,31.07l85.37,286.49c-29.9-34.73-79.68-54.52-79.68-54.52L666.8,348.31A30.94,30.94,0,0,1,663.41,333ZM493.72,314.56a37.51,37.51,0,0,1,26.89-22.31l26.57-5.66a53,53,0,0,1,56.16,24L758,561.48c-59.72-14.89-129.41-9.81-129.41-9.81L496.9,349.32a37.36,37.36,0,0,1-3.18-34.76ZM900,910.09a239,239,0,0,1-459.86-90.7v-2a21.54,21.54,0,0,1,22.24-21.47l73.29,2a19.72,19.72,0,0,1,19,19.53v1.95a124.43,124.43,0,1,0,248.63-8C799.7,754.59,748,701.33,691.12,696a124.28,124.28,0,0,0-86.35,24,30.76,30.76,0,0,1-40.83-4.68l-36.59-42.61a27.94,27.94,0,0,1,3.49-40.06,238.44,238.44,0,0,1,160.16-51c126.09,6.1,226.63,111.45,227,237.2A238,238,0,0,1,900,910.09Zm19.66-208.9-45.67-68.65L822.78,378.69a30.93,30.93,0,0,1,30.34-37h31.43A35.1,35.1,0,0,1,917,363.32a35,35,0,0,1,2.64,13.4Z"
                />
                <path
                  class="cls-1"
                  d="M1291.21,413.79A665.31,665.31,0,1,0,1343.36,672,661,661,0,0,0,1291.21,413.79ZM680,1304.25c-349.18,0-632.25-283.07-632.25-632.25S330.82,39.75,680,39.75,1312.25,322.82,1312.25,672,1029.18,1304.25,680,1304.25Z"
                />
              </svg>
              CAF Credtis
            </div>
            <div
              class="text-indigo-900 dark:text-indigo-500 text-xl md:text-2xl font-medium"
            >
              {{ item.credits }}
            </div>
            <div class="flex-1 text-center w-full hidden md:block">
              <img
                :src="item.img"
                :alt="item.title"
                class="max-w-[8rem] mx-auto"
                :class="{
                  'max-w-[5rem] lg:max-w-[7rem] mx-auto': item.id === 1,
                }"
              />
            </div>
            <button
              class="bg-indigo-700 hover:bg-[#5045ca] text-white rounded-b md:rounded text-lg p-2 md:p-3 -mx-2 md:-mx-0"
            >
              £ {{ item.price }}
            </button>
          </div>
          <div class="block md:hidden absolute right-4">
            <img
              :src="item.img"
              :alt="item.title"
              class="max-w-[60px] mx-auto"
              :class="{
                'max-w-[2rem] mx-auto': item.id === 1,
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

useHead({
  title: "Store",
});

const prices = ref([
  {
    id: 1,
    title: "Starter",
    sub: "Invoice like a pro",
    price: 29.95,
    credits: 1250,
    img: "https://assets.costapplicationform.com/static/coin1-min.png",
  },
  {
    id: 2,
    title: "Plus",
    sub: "Stay organized at all times",
    price: 59.99,
    credits: 2750,
    img: "https://assets.costapplicationform.com/static/coin2.png",
  },
  {
    id: 3,
    title: "Pro",
    sub: "Accelerate your earnings",
    price: 99.99,
    credits: 6500,
    img: "https://assets.costapplicationform.com/static/coin3.png",
  },
  {
    id: 4,
    title: "Enterprise",
    sub: "Pay staff in minutes",
    price: 249.95,
    credits: 17500,
    img: "https://assets.costapplicationform.com/static/coin4.png",
  },
]);

const selectedItem = ref(null);

const onSelectItem = (item) => {
  console.log("item", item);
};
</script>
