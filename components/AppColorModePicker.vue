<template>
  <ColorScheme placeholder="" tag="div">
    <button
      class="text-slate-400 hover:bg-[#F9F9F9] dark:hover:bg-[#1a1a1e] hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-1 p-2 transition-all rounded-lg ease-in-out delay-75"
      v-if="colorMode.preference === 'system'"
      @click="$colorMode.preference = 'light'"
    >
      <ComputerDesktopIcon class="w-6 h-6 stroke-current" />
    </button>
    <button
      class="text-slate-400 hover:bg-[#F9F9F9] dark:hover:bg-[#1a1a1e] hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-1 p-2 transition-all rounded-lg ease-in-out delay-75"
      v-else-if="colorMode.preference === 'light'"
      @click="$colorMode.preference = 'dark'"
    >
      <SunIcon class="w-6 h-6 stroke-current" />
    </button>
    <button
      class="text-slate-400 hover:bg-[#F9F9F9] dark:hover:bg-[#1a1a1e] hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-1 p-2 transition-all rounded-lg ease-in-out delay-75"
      v-else
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
