<template>
  <div>
    <h1>Book Detail</h1>
    <p>Book ID: {{ id }}</p>
    <p>Book Title: {{ title }}</p>
    <p>Book Content: {{ content }}</p>
    <p>Book ID: {{ books[bookIndex].id }}</p>
    <p>Book Title: {{ books[bookIndex].title }}</p>
    <p>Book Content: {{ books[bookIndex].content }}</p>

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
  data() {
    return {
      bookIndex: this.$route.params.id - 1,
      books: [
        {
          id: 1,
          title: 'The Hobbit',
          content: 'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.',
        },
        {
          id: 2,
          title: 'The Lord of the Rings',
          content: 'The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien\'s 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.',
        },
        {
          id: 3,
          title: 'The Silmarillion',
          content: 'The Silmarillion is an unfinished mythopoeic history of the world written by J. R. R. Tolkien. It was published posthumously in 1977, nine years after Tolkien\'s death, with a foreword by his son Christopher Tolkien. The Silmarillion is a compilation of earlier and unconnected tales, legends, and poems about the First Age of Tolkien\'s fictional universe. It is set in the same world as The Hobbit and The Lord of the Rings, but more than 3,000 years before the events of those books.',
        },
      ],
    }
  },
  created() {
    if (this.$route.params.id > this.books.length) {
      this.$router.push({
        name: 'BookList',
      })
    }

  }
}
</script>

<style>

</style>