<template>
  <div class="error-page">
    <h1 v-if="error.statusCode === 404">404 - Page Not Found</h1>
    <h1 v-else>Oops! Something went wrong</h1>
    <p>{{ error.statusMessage || 'The page you are looking for does not exist.' }}</p>
    <NuxtLink to="/" class="btn">Go Back Home</NuxtLink>
  </div>
</template>

<script setup>

definePageMeta({
  middleware: 'not-found'
})

defineProps(['error'])
</script>

<style scoped>
.error-page {
  text-align: center;
  padding: 50px;
}
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>
