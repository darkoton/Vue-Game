<template>
  <div class="products">
    <ul class="products__list">
      <card
        v-for="game in games"
        :key="game"
        :game="game"
        :class="{
          favorite: favorites.find((el) => el.id == game.id),
          basket: basket.find((el) => el.id == game.id),
        }"
        @favorite="getFavorite"
        @basket="getBasket"
      />
    </ul>
  </div>
</template>

<script>
import card from "@/components/TheProductCard.vue";

export default {
  props: {
    category: {
      default: 1,
    },
  },
  components: {
    card,
  },
  data() {
    return {
      games: [],
      favorites: [],
      basket: [],
    };
  },
  methods: {
    getProducts() {
      this.$get(`/genres/${this.category}/games`)
        .then((r) => {
          this.games = r.data;
        })
        .then(() => {
          this.favorites = localStorage.favorites
            ? JSON.parse(localStorage.favorites)
            : [];
        });
    },
    getFavorite() {
      this.favorites = localStorage.favorites
        ? JSON.parse(localStorage.favorites)
        : [];
    },
    getBasket() {
      this.basket = localStorage.basket ? JSON.parse(localStorage.basket) : [];
    },
  },
  watch: {
    category() {
      this.getProducts();
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
.products {
  @include adaptiv-value(margin-bottom, 45, 20, 1);
  &__list {
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-items: center;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>