<template>
  <div class="basket">
    <div class="basket__wrapper">
      <div class="basket__container _container">
        <div class="basket__body" v-if="$store.state.basket.length">
          <div class="basket__top">
            <div class="basket__title">{{ $t("message.basket") }}</div>
            <button class="basket__clear" @click="clear">
              {{ $t("message.cleare") }} <i class="icon-trash"></i>
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

          <div class="basket__confirm">
            <div class="basket__left">
              <div class="basket__value">
                {{ $t("message.totalProducts") }}:
                {{ $store.state.basket.length }}
              </div>
              <div class="basket__price">
                {{ $t("message.totalAmount") }}:
                {{
                  $store.state.basket.reduce(
                    (accumulator, currentValue) =>
                      accumulator + +currentValue.price,
                    (initialValue = 0)
                  )
                }}$
              </div>
            </div>

            <div class="basket__button">{{ $t("message.buy") }}</div>
          </div>
        </div>
        <div class="basket__body" v-else>
          <div class="basket__empty">
            <div class="basket__empty-img">
              <img src="@/assets/img/basket/basket.svg" alt="" />
            </div>
            <h2 class="basket__empty-title">{{ $t("message.basketEmpty") }}</h2>
            <router-link class="basket__empty-button" to="/">{{
              $t("message.back")
            }}</router-link>
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
  & * {
    transition: all 0.3s ease 0s;
  }

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
  &__confirm {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
  }
  &__left {
    display: flex;
    flex-direction: column;
    @include adaptiv-value(row-gap, 20, 10, 1);
  }
  &__price,
  &__value {
    @include adaptiv-font(20, 16);
    color: #fff;
    @include adaptiv-value(margin-left, 30, 10, 1);
  }
  &__button {
    @include adaptiv-font(20, 16);
    color: #000;
    background: #38d991;
    border: 2px solid #38d991;
    @include adaptiv-padding(15, 10, 30, 20, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        background: transparent;
        color: #38d991;
      }
    }
  }
  &__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    &-title {
      @include adaptiv-font(30, 25);
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

.dark {
  .basket {
    &__title {
      color: #38d991;
    }
    &__clear {
      color: #38d991;
    }
    &__value,
    &__price {
      color: #fff;
    }
  }
}

.light {
  .basket {
    &__title {
      color: #000;
    }
    &__clear {
      color: #00a35a;
    }
    &__value,
    &__price {
      color: #000;
    }
  }
}
</style>