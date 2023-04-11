<template>
  <div>
    <button @click="CountUpEmit()">Count up emit</button>
  </div>
</template>

<script>
export default {
  name: 'CountUpButton',
  methods: {
    CountUpEmit() {
      this.$emit('countUpEmit', 1)
    }
  }
}
</script>

<style>

</style>