<template>
  <div class="products">
    <div class="products__wrapper">
      <div class="products__container _container">
        <div class="products__body">
          <ul class="products__list">
            <card v-for="game in games" :key="game" :game="game" />
          </ul>
        </div>
      </div>
    </div>
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
    };
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
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
.products {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(282px, 1fr));
  }
}
</style>