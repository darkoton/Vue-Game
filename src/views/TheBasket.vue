<template>
  <div class="basket">
    <div class="basket__wrapper">
      <div class="basket__container _container">
        <div class="basket__body">
          <div class="basket__top">
            <div class="basket__title">Корзина</div>
            <button class="basket__clear" @click="clear">
              Очистить <i class="icon-trash"></i>
            </button>
          </div>

          <ul class="basket__list">
            <card
              v-for="game in $store.state.basket"
              :key="game"
              :game="game"
              :type="'basket'"
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
      localStorage.setItem("basket", JSON.stringify([]));
      this.$store.state.basket = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.basket {
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