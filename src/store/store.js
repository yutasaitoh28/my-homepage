import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    books: []
  },
  mutations: {
    toggleSideMenu (state) {
      state.drawer = !state.drawer
    },
    addBook (state, book) {
      state.books.push(book)
    }
  },
  actions: {
    toggleSideMenu ({ commit }) {
      commit('toggleSideMenu')
    },
    addBooks ({ commit }, book) {
      commit('addBook', book)
    }
  }
})
