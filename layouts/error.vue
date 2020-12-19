<template>
  <div class="w-screen h-screen p-4 flex items-center justify-center">
    <div
      class="w-panel max-w-full z-20 p-4 md:p-6 bg-white border-4 border-lime-200 shadow-lg rounded-lg flex flex-col items-center"
    >
      <header class="font-bold text-xl md:text-2xl text-center uppercase pb-6">
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>An error occurred</h1>
      </header>
      <nuxt-link class="button" to="/">Home page</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
