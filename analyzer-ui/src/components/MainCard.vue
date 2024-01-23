<template>
  <div class="flex flex-col items-center justify-center h-5/6 ">
    <div class="bg-white flex flex-col h-full max-w-96 justify-between p-5 rounded-xl shadow-2xl">
      <div class="flex flex-col gap-10">
        <h1 class="text-xl font-bold">
          Hello, Welcome to Spreadsheet Analysis
        </h1>
        <p class="text-center">
          Here you can upload your subscriber spreadsheet and generate a beaultiful chart
        </p>
      </div>
      <img
        class="h-72 w-72 mx-auto"
        src="/304cb74aa473e95497fe1a0f4f59d76c.jpg"
        alt="spreadsheet"
      >

      <button
        class="w-full bg-green-500 py-2 rounded-lg hover:bg-green-900 transition-colors duration-300 ease-in-out text-white font-bold"
        @click="goTo('/analysis')"
      >
        Go to analysis page
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goTo(route) {
        this.$router.push(route)
      }
    }
  }
</script>

<style scoped />
