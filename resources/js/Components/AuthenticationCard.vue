<template>
  <div
    class="min-h-screen place-content-center w-full flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-white"
  >
    <div>
      <slot name="logo" />
    </div>

    <div
      class="w-full sm:max-w-xl mt-2 px-6 py-4 overflow-hidden sm:rounded-lg"
    >
      <slot />
    </div>
  </div>
</template>
