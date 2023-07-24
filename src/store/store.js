import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      favorite: 0,
    }
  },
  mutations: {
    favorite(state) {
      state.favorite++
    },
  }
})

export default store