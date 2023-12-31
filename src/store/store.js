import axios from '@/axios/base';
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      favorites: localStorage.favorites ? JSON.parse(localStorage.favorites) : [],
      basket: localStorage.basket ? JSON.parse(localStorage.basket) : [],
      games: [],
      theme: "dark"
    }
  },
  actions: {
    async getSearch({ commit }, search = "") {
      if (search.length) {
        let games = await axios.axios2
          .get(process.env.VUE_APP_BACKEND_URL2 + `/games?filter=${search}`)

        commit("setSearchResult", games.data)
        return
      }
      commit("setSearchResult", [])

    }
  },
  getters: {
    searchResult(state) {
      return state.games;
    },
  },
  mutations: {
    setSearchResult(state, value) {
      state.games = value;
    },
    changeTheme(state) {
      localStorage.theme == "dark" ?
        localStorage.setItem('theme', 'light')
        : localStorage.setItem('theme', 'dark')

      state.theme = localStorage.theme
    },
    favorite(state, game) {
      let fav = JSON.parse(localStorage.favorites);
      if (
        !fav.find((el) => el.id == game.id)
      ) {

        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = "0" + dd;
        if (mm < 10) mm = "0" + mm;

        game.dateFavoriteAdded = dd + "." + mm + "." + yyyy;

        fav.push(game);
        localStorage.setItem("favorites", JSON.stringify(fav));
      } else {
        fav.splice(
          fav.findIndex((el) => el.id == game.id),
          1
        );
        localStorage.setItem("favorites", JSON.stringify(fav));
      }

      state.favorites = fav
    },
    basket(state, game) {
      let basket = JSON.parse(localStorage.basket);

      if (
        !basket.find((el) => el.id == game.id)
      ) {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = "0" + dd;
        if (mm < 10) mm = "0" + mm;

        game.dateBasketAdded = dd + "." + mm + "." + yyyy;

        basket.push(game);
        localStorage.setItem("basket", JSON.stringify(basket));
      } else {
        basket.splice(
          basket.findIndex((el) => el.id == game.id),
          1
        );
        localStorage.setItem("basket", JSON.stringify(basket));
      }
      state.basket = basket
    },
    selectLanguage(state, language) {
      localStorage.setItem("language", language)
    }
  }
})

export default store