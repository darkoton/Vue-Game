import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      favorite: 0,
      basket: 0
    }
  },
  mutations: {
    favorite(state) {
      state.favorite++
    },
    basket(state) {
      state.basket++
    }
  }
})

export default store