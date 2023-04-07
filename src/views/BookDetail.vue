<template>
  <div>
    <h1>Book Detail</h1>
    <p>Book ID: {{ id }}</p>
    <p>Book Title: {{ title }}</p>
    <p>Book Content: {{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'BookDetail',
  props: {
    id: Number,
    title: String,
    content: String,
  },
}
</script>

<style>

</style>