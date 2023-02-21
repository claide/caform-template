<template>
  <li>
    <span
      v-if="page === null"
      class="flex items-center justify-center w-7 h-7 my-0 mx-1"
    >
      <EllipsisHorizontalIcon class="w-2 h-2 stroke-slate-500" />
    </span>
    <button
      v-else
      class="flex items-center justify-center w-7 h-7 my-0 mx-1 text-black rounded border-transparent cursor-pointer outline-0 select-none hover:bg-indigo-100"
      type="button"
      :aria-label="`Go to page ${page}`"
      :class="{
        'bg-indigo-600 text-white hover:bg-indigo-600 hover:text-white':
          isActive,
      }"
      @click="clickHandler"
    >
      {{ page }}
    </button>
  </li>
</template>

<script setup>
import { EllipsisHorizontalIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  page: {
    type: Number,
    default: null,
  },
  current: {
    type: Number,
    default: 0,
  },
  activeColor: {
    type: String,
    default: "#5046E5",
  },
});

const emit = defineEmits(["update"]);

const isActive = computed(() => {
  return props.page === props.current;
});

const clickHandler = () => {
  emit("update", props.page);
};
</script>
