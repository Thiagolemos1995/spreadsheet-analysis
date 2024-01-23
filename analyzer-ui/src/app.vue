<script setup lang="ts">
import '@/assets/css/tailwind.css'
</script>

<template>
  <main class="bg-gradient-to-r from-green-900 via-green-500 to-green-900 h-full">
    <LayoutHeader />
    <div class="p-8">
      <nuxt-page />
    </div>
  </main>
</template>

<style scoped lang="css" />
