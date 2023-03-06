<template>
  <ColorScheme placeholder="" tag="span">
    <button
      class="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset hover:bg-gray-100 hover:text-gray-500 text-gray-400"
      v-if="colorMode.preference === 'system'"
      @click="$colorMode.preference = 'light'"
    >
      <ComputerDesktopIcon class="w-6 h-6 stroke-current" />
    </button>
    <button
      class="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset hover:bg-gray-100 hover:text-gray-500 text-gray-400"
      v-if="colorMode.preference === 'light'"
      @click="$colorMode.preference = 'dark'"
    >
      <SunIcon class="w-6 h-6 stroke-current" />
    </button>
    <button
      class="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset hover:bg-gray-100 hover:text-gray-500 text-gray-400"
      v-if="colorMode.preference === 'dark'"
      @click="$colorMode.preference = 'system'"
    >
      <MoonIcon class="w-6 h-6 stroke-current" />
    </button>
  </ColorScheme>
</template>

<script setup>
import {
  ComputerDesktopIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/vue/24/outline";

const colorMode = useColorMode();
</script>
