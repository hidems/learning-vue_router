<template>
  <div>
    <h1>404 - Page Not Found</h1>
    <button @click="goToHome">Go Back</button>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    goToHome() {
      this.$router.push({ name: 'home' });
    }
  }
}
</script>

<style>

</style>