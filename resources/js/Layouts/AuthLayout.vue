<script setup>
const getImageUrl = (imageName) => `/storage/images/${imageName}`;
</script>

<template>
  <div class="max-h-screen">
    <VRow class="">
      <VCol
        cols="0"
        sm="6"
        md="7"
        lg="9"
        class="bg-gray-100 hidden sm:flex justify-center max-h-screen"
      >
        <VImg
          :src="getImageUrl('auth_vector.png')"
          alt="Auth POS Image"
          max-height="90%"
        />
      </VCol>
      <VCol cols="12" sm="6" md="5" lg="3" class="flex align-middle">
        <main class="p-0 w-full flex justify-center align-middle items-center">
          <slot />
        </main>
      </VCol>
    </VRow>
  </div>
</template>
