<script setup>
import { Link } from "@inertiajs/vue3";
const titleApp = import.meta.env.VITE_APP_NAME;
const logoUrl = import.meta.env.VITE_APP_LOGO;
</script>

<template>
  <Link :href="'/'" class="flex align-middle">
    <img :src="logoUrl" alt="Logo" width="60" />
    <span class="text-h4 pl-3 pt-2 !font-bold !font-poppins font">{{
      titleApp
    }}</span>
  </Link>
</template>
