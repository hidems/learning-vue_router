<template>
  <div class="about">
    <h1>This is an Route Info page</h1>
    <button @click="checkRouteInfo">Route Info</button><br>
    <button @click="$router.push('/')">Go Home</button>
  </div>
</template>

<script>
export default {
  name: 'RouteInfo',
  methods: {
    checkRouteInfo() {
      console.log(this.$route);
      console.log(this.$router);
    }
  }
}
</script>
