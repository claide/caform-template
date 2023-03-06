<template>
  <div class="mt-4 flex items-center justify-between">
    <div class="hidden sm:block">
      <span class="text-sm text-gray-700 dark:text-slate-400">
        Showing
        {{ " " }}
        <span class="font-medium">{{ props.from }}</span>
        {{ " " }}
        to
        {{ " " }}
        <span class="font-medium">{{ props.to }}</span>
        {{ " " }}
        of
        {{ " " }}
        <span class="font-medium">{{ props.total }}</span>
        {{ " " }}
        results
      </span>
    </div>
    <ul class="flex items-center m-0 p-2 list-none flex-wrap justify-end">
      <li v-if="!hideFirstButton" class="flex items-center">
        <ChevronDoubleLeftIcon
          class="relative block w-5 h-5 mx-1 my-0 stroke-current hover:stroke-slate-700 transition-all"
          :class="
            isPrevControlsActive
              ? 'stroke-slate-700 cursor-pointer transition-all'
              : 'stroke-slate-400  hover:stroke-slate-400 cursor-not-allowed'
          "
          @click="goToFirst"
        />
      </li>
      <li class="flex items-center">
        <ChevronLeftIcon
          class="relative block w-5 h-5 mx-1 my-0 stroke-current hover:stroke-slate-700 transition-all"
          :class="
            isPrevControlsActive
              ? 'stroke-slate-700 cursor-pointer transition-all'
              : 'stroke-slate-400  hover:stroke-slate-400 cursor-not-allowed'
          "
          @click="goToPrev"
        />
      </li>
      <AdminPaginationPages
        v-for="page in pagination"
        :key="`pagination-page-${page}`"
        :page="page"
        :current="modelValue"
        :active-color="activeColor"
        @update="updatePageHandler"
      />
      <li class="flex items-center">
        <ChevronRightIcon
          class="relative block w-5 h-5 mx-1 my-0 stroke-current hover:stroke-slate-700 transition-all"
          :class="
            isNextControlsActive
              ? 'stroke-slate-700 cursor-pointer transition-all'
              : 'stroke-slate-400  hover:stroke-slate-400 cursor-not-allowed'
          "
          @click="goToNext"
        />
      </li>
      <li v-if="!hideLastButton" class="flex items-center">
        <ChevronDoubleRightIcon
          class="relative block w-5 h-5 mx-1 my-0 stroke-current hover:stroke-slate-700 transition-all"
          :class="
            isNextControlsActive
              ? 'stroke-slate-700 cursor-pointer transition-all'
              : 'stroke-slate-400  hover:stroke-slate-400 cursor-not-allowed'
          "
          @click="goToLast"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import {
  ChevronDoubleRightIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
  pages: {
    type: Number,
    default: 0,
  },
  rangeSize: {
    type: Number,
    default: 1,
  },
  modelValue: {
    type: Number,
    default: 0,
  },
  from: {
    type: Number,
    default: 0,
  },
  to: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
  activeColor: {
    type: String,
    default: "#5046E5",
  },
  hideFirstButton: {
    type: Boolean,
    default: false,
  },
  hideLastButton: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const pagination = computed(() => {
  const res = [];
  const minPaginationElems = 5 + props.rangeSize * 2;

  let rangeStart =
    props.pages <= minPaginationElems ? 1 : props.modelValue - props.rangeSize;
  let rangeEnd =
    props.pages <= minPaginationElems
      ? props.pages
      : props.modelValue + props.rangeSize;

  rangeEnd = rangeEnd > props.pages ? props.pages : rangeEnd;
  rangeStart = rangeStart < 1 ? 1 : rangeStart;

  if (props.pages > minPaginationElems) {
    const isStartBoundaryReached = rangeStart - 1 < 3;
    const isEndBoundaryReached = props.pages - rangeEnd < 3;

    if (isStartBoundaryReached) {
      rangeEnd = minPaginationElems - 2;
      for (let i = 1; i < rangeStart; i++) {
        res.push(i);
      }
    } else {
      res.push(1);
      res.push(null);
    }

    if (isEndBoundaryReached) {
      rangeStart = props.pages - (minPaginationElems - 3);
      for (let i = rangeStart; i <= props.pages; i++) {
        res.push(i);
      }
    } else {
      for (let i = rangeStart; i <= rangeEnd; i++) {
        res.push(i);
      }
      res.push(null);
      res.push(props.pages);
    }
  } else {
    for (let i = rangeStart; i <= rangeEnd; i++) {
      res.push(i);
    }
  }

  return res;
});

const updatePageHandler = (params) => {
  emit("update:modelValue", params);
};

// controls
const isPrevControlsActive = computed(() => {
  return props.modelValue > 1;
});
const isNextControlsActive = computed(() => {
  return props.modelValue < props.pages;
});

const goToFirst = () => {
  if (isPrevControlsActive.value) {
    emit("update:modelValue", 1);
  }
};
const goToPrev = () => {
  if (isPrevControlsActive.value) {
    emit("update:modelValue", props.modelValue - 1);
  }
};

const goToLast = () => {
  if (isNextControlsActive.value) {
    emit("update:modelValue", props.pages);
  }
};
const goToNext = () => {
  if (isNextControlsActive.value) {
    emit("update:modelValue", props.modelValue + 1);
  }
};
</script>
