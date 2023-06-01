<template>
  <div>
    <label for="document" class="block text-sm font-medium text-gray-700">
      <slot />
    </label>
    <div class="mt-1">
      <div class="relative overflow-hidden inline-block hover:cursor-pointer">
        <button
          class="bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary block w-full text-base rounded py-1.5 px-6">
          Select files
        </button>
        <input multiple type="file" name="document" accept=".doc,.docx,.pdf,.png,.jpg,.jpeg"
          class="absolute left-0 top-0 opacity-0 hover:cursor-pointer" @change="handleFileUpload" />
      </div>
    </div>

    <div class="mt-3">
      <span v-for="(file, index) in files" :key="file.name"
        class="inline-flex items-center px-2 py-1 mr-2 mb-2 text-sm font-medium text-indigo-800 bg-indigo-100 rounded dark:bg-indigo-900 dark:text-indigo-300">
        {{ file.name || file.file_name }}
        <button @click="removeFile(index)"
          class="nline-flex items-center p-0.5 ml-2 text-sm text-indigo-400 bg-transparent rounded-sm hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-800 dark:hover:text-indigo-300">
          <svg class="w-3.5 h-3.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </span>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["change", "remove-file"]);

const props = defineProps({
  files: { type: Array, required: true },
});

const files = ref(props.files);

const handleFileUpload = (event) => {
  const newFiles = event.target.files;
  for (let i = 0; i < newFiles.length; i++) {
    files.value.push(newFiles[i]);
  }
  emits("change", props.files);
};

const removeFile = (index) => {
  // files.value = files.value.filter((file, i) => i !== index);
  emits("remove-file", index);
};

watchEffect(() => {
  files.value = props.files;
});
</script>
