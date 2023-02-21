<template>
  <ColorScheme placeholder="" tag="span">
    <button
      class="p-1 text-gray-400"
      v-if="colorMode.preference === 'system'"
      @click="$colorMode.preference = 'light'"
    >
      <ComputerDesktopIcon class="h-5 stroke-current" />
    </button>
    <button
      class="p-1 text-gray-400"
      v-if="colorMode.preference === 'light'"
      @click="$colorMode.preference = 'dark'"
    >
      <SunIcon class="h-5 stroke-current" />
    </button>
    <button
      class="p-1 text-gray-400"
      v-if="colorMode.preference === 'dark'"
      @click="$colorMode.preference = 'system'"
    >
      <MoonIcon class="h-5 stroke-current" />
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
