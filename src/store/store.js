import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      favorites: localStorage.favorites ? JSON.parse(localStorage.favorites) : [],
      basket: localStorage.basket ? JSON.parse(localStorage.basket) : [],
      language: "RU"
    }
  },
  mutations: {
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
    }
  }
})

export default store