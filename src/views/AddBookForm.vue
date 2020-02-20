<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <h1>本編集</h1>
      </v-flex>

      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
               <v-text-field v-model="book.title" label="タイトル"></v-text-field>
               <v-text-field v-model="book.genre" label="ジャンル"></v-text-field>
               <v-text-field v-model="book.thought" label="感想"></v-text-field>
               <v-text-field v-model="book.date" label="日付"></v-text-field>
               <v-btn @click="$router.push({ name: 'books' })">キャンセル</v-btn>
               <v-btn color="info" @click="submit">保存</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      book: {}
    }
  },
  methods: {
    submit () {
      this.addBook(this.book)
      this.$router.push({ name: 'books' })
      this.book = {}
    },
    addBook(book) {
      this.$store.commit('addBook', book)
    }
  }
}
</script>