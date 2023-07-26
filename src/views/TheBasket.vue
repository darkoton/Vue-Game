<template>
  <div class="basket">
    <div class="basket__wrapper">
      <div class="basket__container _container">
        <div class="basket__body" v-if="this.$store.state.basket.length">
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
        <div class="basket__body" v-else>
          <div class="basket__empty">
            <div class="basket__empty-img">
              <img src="@/assets/img/basket/basket.svg" alt="" />
            </div>
            <h2 class="basket__empty-title">Корзина пуста</h2>
            <router-link class="basket__empty-button" to="/"
              >Вернуться</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/product/TheCard.vue";

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
  &__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    &-title {
      font-size: 30px;
      color: #38d991;
      font-family: $fontJura;
      font-weight: bold;
      margin-bottom: 10px;
    }
    &-button {
      padding: 5px 10px;
      font-size: 25px;
      border-radius: 5px;
      font-weight: bold;
      color: #000;
      background: #38d991;
      border: 2px solid #38d991;
      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          background: transparent;
          color: #38d991;
        }
      }
    }

    &-img {
      width: 100%;
      max-width: 200px;
      margin-bottom: 20px;
    }
  }
}
</style>