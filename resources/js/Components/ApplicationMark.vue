<script setup>
const logoUrl = import.meta.env.VITE_APP_LOGO;
</script>

<template>
  <img :src="logoUrl" height="25" alt="Logo" />
</template>
