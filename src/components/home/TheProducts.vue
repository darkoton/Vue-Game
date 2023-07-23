<template>
  <div class="products">
    <ul class="products__list">
      <card v-for="game in games" :key="game" :game="game" />
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
  @include adaptiv-value(margin-bottom, 45, 20, 1);
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(282px, 1fr));
  }
}
</style>