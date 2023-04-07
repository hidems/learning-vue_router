<template>
  <div>
    <h1>Book List</h1>
    <ul>
      <li
        v-for="book in books"
        :key="book.id"
        @click="showBookDetail(book.id)">
        {{ book.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  data() {
    return {
      bookIndex: -1,
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
  methods: {
    showBookDetail(id) {
      this.bookIndex = id - 1
      this.$router.push({
        name: 'BookDetail',
        params: {
          id: this.books[this.bookIndex].id,
          title: this.books[this.bookIndex].title,
          content: this.books[this.bookIndex].content,
        }
      })
    },
  },
}
</script>

<style>

</style>