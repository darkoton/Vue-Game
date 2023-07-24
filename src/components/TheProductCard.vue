<template>
  <div class="card">
    <div class="card__favorite" @click="favorite()">
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
        <h3 class="card__title">{{ game.title }}</h3>
        <div class="card__description">{{ game.ru.description }}</div>
      </div>
      <div class="card__price" v-if="game.state == 'released'">
        <span v-if="game.discount" class="discount">
          Стоимость: {{ game.discount }}$
          <span class="start">{{ game.price }}$ </span>
        </span>

        <span v-else> Стоимость: {{ game.price }}$ </span>
      </div>
      <router-link class="card__submit" to="#">
        {{ game.state != "released" ? "Скоро" : "Купить" }}
      </router-link>
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
    return {};
  },

  methods: {
    favorite() {
      if (
        !JSON.parse(localStorage.favorites).find((el) => el.id == this.game.id)
      ) {
        let fav = JSON.parse(localStorage.favorites);
        let game = this.game;

        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = "0" + dd;
        if (mm < 10) mm = "0" + mm;

        game.dateAdded = dd + "." + mm + "." + yyyy;

        fav.push(game);
        localStorage.setItem("favorites", JSON.stringify(fav));
      } else {
        let fav = JSON.parse(localStorage.favorites);
        fav.splice(
          fav.findIndex((el) => el.id == this.game.id),
          1
        );
        localStorage.setItem("favorites", JSON.stringify(fav));
      }

      this.$store.commit("favorite");
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
    margin-bottom: 10px;
    color: #fff;
    @include adaptiv-font(18, 14);
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

  &.favorite {
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

  &.basket {
    & .card__submit {
      opacity: 0.5;
      pointer-events: none;
      color: transparent;

      &::after {
        content: "В корзине";
        display: block;
        color: #000;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
      }
    }
  }
}
</style>