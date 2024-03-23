<script setup>
const logoUrl = import.meta.env.VITE_APP_LOGO;
const titleApp = import.meta.env.VITE_APP_NAME;
</script>

<template>
  <Link :href="'/'" class="flex align-middle">
    <img :src="logoUrl" alt="Logo" width="40" />
    <span class="text-md pl-3 pt-2 !font-bold !font-poppins font">{{
      titleApp
    }}</span>
  </Link>
</template>
