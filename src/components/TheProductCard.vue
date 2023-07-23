<template>
  <div class="card">
    <div class="card__top">
      <span v-if="game.discount" class="percent"
        >-{{ 100 - (game.discount / game.price).toFixed(2) * 100 }}%</span
      >
      <div class="card__favorite">
        <img src="@/assets/img/card/heart.png" alt="" />
        <img src="@/assets/img/card/heart-active.png" alt="" />
      </div>
      <div class="card__img">
        <img :src="game.uploadImg" alt="" />
      </div>
    </div>
    <div class="card__bottom">
      <div class="card__text">
        <h3 class="card__title">{{ game.title }}</h3>
        <div class="card__description">{{ game.description }}</div>
      </div>
      <div class="card__price" v-if="game.state == 'released'">
        <span v-if="game.discount" class="discount">
          Стоимость: {{ game.discount }}$
          <span class="start">{{ game.price }} </span>
        </span>

        <span v-else> Стоимость: {{ game.price }}$ </span>
      </div>
      <button class="card__submit" :disabled="game.state != 'released'">
        {{ game.state != "released" ? "Скоро" : "В корзину" }}
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

  data() {
    return {
      test: "/Rust.png",
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
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
  &__top {
    position: relative;
    max-height: 282px;
    overflow: hidden;
    height: 100%;

    .percent {
      z-index: 2;
      position: absolute;
      font-size: 20px;
      font-family: $fontPressStart;
      background: #222;
      top: 5px;
      left: -100%;
      padding: 10px;
      color: #38d991;
      transition: all 0.3s ease-out 0s;
    }
  }
  &__img {
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
    @include adaptiv-value(paddig-top, 25, 10, 1);
  }
  &__text {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }
  &__title {
    margin-bottom: 10px;
    color: #fff;
    font-size: 18px;
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
    line-height: 14px;
    margin-bottom: 15px;
    .discount {
      position: relative;
    }
    .start {
      position: absolute;
      right: 0;
      top: -20px;
      color: rgba(#38d991, 0.3);
      &::after {
        content: "";
        width: calc(100% + 10px);
        height: 1px;
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
    color: #000;
    font-family: $fontPressStart;
    font-size: 13px;
    font-weight: 400;
    line-height: 14px;
    background: #38d991;
    border: 2px solid #38d991;
    display: block;
    width: 100%;
    @include adaptiv-padding(12, 8, 0, 0, 1);

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
}
</style>