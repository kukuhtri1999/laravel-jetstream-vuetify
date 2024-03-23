<script setup>
import { computed } from "vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps({
  href: String,
  active: Boolean,
});

const classes = computed(() => {
  return props.active
    ? "inline-flex bg-greenlight items-center p-1 pl-2 border-r-4 border-solid border-primary text-sm font-medium leading-5 text-primary focus:outline-none focus:border-primary-600 transition duration-150 ease-in-out"
    : "inline-flex items-center p-1 pl-2 border-primary text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out";
});
</script>

<template>
  <Link :href="href" :class="classes">
    <slot />
  </Link>
</template>
<style>
.border-primary {
  border-color: #00a65a;
}
</style>
