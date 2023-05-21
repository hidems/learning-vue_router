<template>
  <div>
    <h1 class="border__red">HomeSub Component</h1>
    <button @click="checkProcessEnv">Display process.env</button>
    <p>process.env: {{ prosess_env }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prosess_env: ''
    }
  },
  methods: {
    checkProcessEnv() {
      this.prosess_env = process.env
    }
  }
}
</script>

<style scpoed lang="scss">
.border {
  &__red {
    border: 1px solid red;
  }
}
</style>