<template>
  <div class="products">
    <ul class="products__list">
      <card v-for="game in filterGames" :key="game" :game="game" />
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
    filterId: {
      default: 0,
    },
    gamesParent: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  components: {
    card,
  },
  data() {
    return {
      games: [],
      favorites: [],
    };
  },
  computed: {
    filterGames() {
      if (!this.gamesParent.length) {
        return this.games.filter((el) => {
          return el.id != this.filterId;
        });
      }

      return this.gamesParent;
    },
  },
  methods: {
    getProducts() {
      this.$get(`/genres/${this.category}/games`).then((r) => {
        this.games = r.data;
      });
    },
  },

  watch: {
    category() {
      this.getProducts();
    },
  },
  mounted() {
    if (!this.gamesParent.length) {
      this.getProducts();
    }
  },
};
</script>

<style lang="scss" scoped>
.products {
  @include adaptiv-value(margin-bottom, 45, 20, 1);
  &__list {
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 280px));
    justify-items: center;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>