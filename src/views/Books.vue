  
<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>最近読んだ本一覧</h1>
      </v-flex>

      <v-flex xs12 mt-5 mr-5 text-xs-right>
        <router-link :to="{ name: 'book_edit' }">
          <v-btn color="info">
            読後の本追加
          </v-btn>
        </router-link>
      </v-flex>
      <v-flex xs12 mt-3 justify-center>
        <v-data-table :headers='headers' :items='books'>
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.title }}</td>
            <td class="text-xs-left">{{ props.item.genre }}</td>
            <td class="text-xs-left">{{ props.item.thought }}</td>
            <td class="text-xs-left">{{ props.item.date }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  created () {
    this.books = this.$store.state.books
  },
  data () {
    return {
      headers: [
        { text: 'タイトル', value: 'title' },
        { text: 'ジャンル', value: 'genre' },
        { text: '感想', value: 'thought' },
        { text: '日付', value: 'date' }
      ],
      books: []
    }
  }
}
</script>