<template>
  <div class="favorites">
    <div class="favorites__wrapper">
      <div class="favorites__container _container">
        <div class="favorites__body">
          <div class="favorites__top">
            <h2 class="favorites__title">Избраное</h2>
            <button class="favorites__clear" @click="clear">
              Очистить <i class="icon-trash"></i>
            </button>
          </div>

          <ul class="favorites__list">
            <card
              v-for="game in $store.state.favorites"
              :key="game"
              :game="game"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/favorites/TheCard.vue";

export default {
  components: {
    card,
  },

  data() {
    return {};
  },
  methods: {
    clear() {
      localStorage.setItem("favorites", JSON.stringify([]));
      this.$store.state.favorites = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.favorites {
  &__top {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  &__title {
    font-family: $fontJura;
    font-size: 30px;
    color: #38d991;
    font-weight: bold;
  }
  &__clear {
    font-size: 20px;
    color: #38d991;
    opacity: 0.5;
    background: transparent;
    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        opacity: 1;
      }
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin-top: 20px;
  }
}
</style>