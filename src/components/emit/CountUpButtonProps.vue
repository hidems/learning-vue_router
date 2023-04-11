<template>
  <div>
    <button @click="countUpProps()">Count up props</button>
  </div>
</template>

<script>
export default {
  props: {
    handleAddNumber: {
      type: Function,
      required: true
    }
  },
  methods: {
    countUpProps() {
      this.handleAddNumber(1)
    }
  }
}
</script>

<style>

</style>