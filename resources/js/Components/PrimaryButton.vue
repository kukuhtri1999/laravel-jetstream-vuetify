<script setup>
defineProps({
  type: {
    type: String,
    default: 'submit',
  },
});
</script>

<template>
  <button
    :type="type"
    class="w-full text-center justify-center inline-flex items-center px-4 py-3 ml-0 bg-primary border border-transparent rounded-md font-semibold text-md text-white uppercase tracking-widest hover:bg-secondary focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
  >
    <slot />
  </button>
</template>
