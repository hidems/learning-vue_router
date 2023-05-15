<template>
  <div>
    <h1>Item</h1>
    <router-link to="1">Item 1</router-link><br>
    <router-link to="2">Item 2</router-link><br>
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  created() {
    console.log('Created')
  },
  watch: {
    $route(to, from) {
      console.log(to)
      console.log(from)
    }
  },
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm('Do you really want to leave?')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
}
</script>

<style>

</style>