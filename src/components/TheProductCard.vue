<template>
  <div
    class="card"
    :class="{
      inFavorite: $store.state.favorites.find((el) => el.id == game.id),
    }"
    @click="$router.push('/product/' + game.genreId + '/' + game.id)"
  >
    <div class="card__favorite" @click.stop="favorite">
      <img src="@/assets/img/card/heart.png" alt="" />
      <img src="@/assets/img/card/heart-active.png" alt="" />
    </div>

    <span v-if="game.discount" class="percent"
      >-{{ 100 - (game.discount / game.price).toFixed(2) * 100 }}%</span
    >

    <div class="card__top">
      <div class="card__img">
        <img :src="game.uploadImg" alt="" />
      </div>
    </div>
    <div class="card__bottom">
      <div class="card__text">
        <router-link
          :to="'/product/' + game.genreId + '/' + game.id"
          class="card__title"
          >{{ game.title }}</router-link
        >
        <div class="card__description">
          {{ $i18n.locale == "ru" ? game.ru.description : game.en.description }}
        </div>
      </div>
      <div class="card__price" v-if="game.state == 'released'">
        <span v-if="game.discount" class="discount">
          {{ $t("message.price") }}: {{ game.discount }}$
          <span class="start">{{ game.price }}$ </span>
        </span>

        <span v-else> {{ $t("message.price") }}: {{ game.price }}$ </span>
      </div>
      <button
        class="card__submit"
        :class="{
          inBasket: $store.state.basket.find((el) => el.id == game.id),
        }"
        :disabled="game.state != 'released'"
        @click.stop="basket"
      >
        {{
          game.state != "released"
            ? $t("message.soon")
            : $store.state.basket.find((el) => el.id == game.id)
            ? $t("message.inBasket")
            : $t("message.buy")
        }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    favorite() {
      this.$store.commit("favorite", this.game);
    },
    basket() {
      if (this.$store.state.basket.find((el) => el.id == this.game.id)) {
        this.$router.push("/basket");
        return;
      }

      this.$store.commit("basket", this.game);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
  max-width: 282px;
  height: 600px;
  max-height: 600px;
  border-radius: 10px;
  background: #222;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-family: $fontJura;
  overflow: hidden;

  @media (max-width: 1200px) {
    max-width: 350px;
  }

  &__top {
    position: relative;
    max-height: 282px;
    overflow: hidden;
    height: 100%;
  }
  .percent {
    z-index: 2;
    position: absolute;
    @include adaptiv-font(20, 10);
    font-family: $fontPressStart;
    background: #111;
    top: 5px;
    left: -100%;
    @include adaptiv-value(padding, 10, 8, 1);
    color: #38d991;
    transition: all 0.3s ease-out 0s;
  }
  &__img {
    img {
      width: 100%;
    }
    @include adaptiv-value-width(max-width, 90, 70, 600, 1);
    @include adaptiv-value-width(max-height, 80, 60, 600, 1);
    max-width: 100%;
    max-height: 282px;
    transition: all 0.3s ease 0s;
  }
  &__favorite {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    z-index: 2;

    img {
      transition: all 0.4s ease 0s;
      &:nth-child(2) {
        opacity: 0;
        position: absolute;
        left: 0;
        top: 0;
        &.active {
          opacity: 1;
          z-index: 3;
        }
      }
    }

    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        img:first-child {
          opacity: 0;
        }
        img:last-child {
          opacity: 1;
        }
      }
    }
  }
  &__bottom {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 25px 12px 15px 12px;
    @include adaptiv-value(padding-top, 25, 10, 1);
  }
  &__text {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }
  &__title {
    @include adaptiv-font(18, 14);
    margin-bottom: 10px;
    color: #fff;
    font-weight: 600;
    transition: all 0.3s ease 0s;
  }
  &__description {
    color: #9d9d9d;
    font-size: 13px;
    line-height: 14px;
    margin-bottom: 30px;
  }
  &__price {
    color: #38d991;
    font-family: $fontPressStart;
    font-size: 13px;
    @include adaptiv-font(13, 10);
    line-height: 14px;
    margin-bottom: 15px;
    .discount {
      position: relative;
    }
    .start {
      position: absolute;
      right: 0;
      top: -20px;
      @include adaptiv-font(13, 7);
      color: rgba(#38d991, 0.3);
      &::after {
        content: "";
        width: calc(100% + 10px);
        height: 0.5px;
        background: #38d991;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
      }
    }
  }
  &__submit {
    position: relative;
    color: #000;
    font-family: $fontPressStart;
    @include adaptiv-font(13, 10);
    font-weight: 400;
    line-height: 14px;
    background: #38d991;
    border: 2px solid #38d991;
    display: block;
    text-align: center;
    @include adaptiv-padding(12, 4, 0, 0, 1);

    &:disabled {
      background: rgba(56, 217, 145, 0.3);
      border-color: rgba(56, 217, 145, 0.3);
      pointer-events: none;
    }

    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        color: #38d991;
        background: transparent;
      }
    }

    &.inBasket {
      background: rgba(56, 217, 145, 0.3);
      border-color: rgba(56, 217, 145, 0.3);
      color: rgb(20, 20, 20);
    }
  }

  @media (any-hover: hover) {
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &:hover {
      .percent {
        left: 0;
      }
      & .card__img {
        transform: scale(1.1);
      }
      & .card__title {
        color: #38d991;
      }
    }
  }
  @media (max-width: 600px) {
    align-items: center;
    flex-direction: row;
    max-width: 100%;
    padding: 10px;
    height: auto;
    &__top {
      display: flex;
      align-items: center;
    }
    &__img {
      height: 100%;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    &__bottom {
      padding: 0;
      margin-left: 10px;
    }
    &__description {
      display: none;
    }
    &__submit {
      width: 140px;
    }

    & .percent {
      left: auto;
      right: 0;
      top: auto;
      bottom: 10px;
    }
    & .start {
      top: 50%;
      right: calc(-50% + 10px);
      transform: translate(-50%, -50%);
    }
  }

  &.inFavorite {
    & .card__favorite {
      img {
        &:nth-child(1) {
          opacity: 0;
        }
        &:nth-child(2) {
          opacity: 1;
        }
      }

      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          img {
            &:nth-child(1) {
              opacity: 1;
            }
            &:nth-child(2) {
              opacity: 0;
            }
          }
        }
      }
    }
  }
}

.dark {
  .card {
    background: #222;
    color: #fff;

    .percent {
      background: #111;
      color: #38d991;
    }
    &__title {
      color: #fff;
    }
    &__description {
      color: #9d9d9d;
    }
    &__price {
      color: #38d991;

      .start {
        color: rgba(#38d991, 0.3);
        &::after {
          background: #38d991;
        }
      }
    }
  }
}

.light {
  .card {
    background: #e0e0e0;
    color: #000;

    .percent {
      background: rgba(17, 17, 17, 0.5);
      color: #38d991;
    }
    &__title {
      color: #000;
    }
    &__description {
      color: #4f4f4f;
    }
    &__price {
      color: #22be78;

      .start {
        color: rgba(#1caf6d, 0.3);
        &::after {
          background: #1caf6d;
        }
      }
    }
  }
}
</style>