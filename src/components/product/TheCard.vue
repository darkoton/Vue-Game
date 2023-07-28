<template>
  <div
    class="card"
    :class="
      ({
        inBasket: $store.state.basket.find((el) => el.id == game.id),
      },
      'card-' + type)
    "
  >
    <div class="card__left" v-if="type == 'favorites'">
      <i class="card__move icon-move handle"></i>
    </div>
    <div class="card__main">
      <div class="card__img">
        <img :src="game.uploadImg" alt="" />
      </div>
      <div class="card__text">
        <router-link
          :to="'/product/' + game.genreId + '/' + game.id"
          class="card__title"
          >{{ game.title }}</router-link
        >
        <div class="card__realese">
          ДАТА ВЫХОДА: <span>{{ game.ru.releaseDate }}</span>
        </div>
        <div class="card__genres">
          <div class="card__genre" v-for="genre in game.ru.genres" :key="genre">
            {{ genre }}
          </div>
        </div>
      </div>

      <div class="card__right">
        <div class="card__submit">
          <div class="card__price" v-if="game.price">
            <div class="card__price-discount" v-if="game.discount">
              {{ game.price }}$
            </div>
            {{ game.discount ? game.discount : game.price }}$
          </div>
          <button
            v-if="type == 'favorites'"
            class="card__button"
            :disabled="game.state == 'in developing'"
            @click="
              $store.state.basket.find((el) => el.id == game.id)
                ? $router.push('/basket')
                : ($store.commit('basket', game), $router.push('/basket'))
            "
          >
            {{
              $store.state.basket.find((el) => el.id == game.id)
                ? "В корзине"
                : game.state == "in developing"
                ? "Скоро"
                : "В корзину"
            }}
          </button>
        </div>

        <div class="card__added-date">
          Добавлено
          <span>{{
            type == "favorites" ? game.dateFavoriteAdded : game.dateBasketAdded
          }}</span>
        </div>
      </div>
    </div>
    <div
      class="card__remove"
      @click="
        type == 'favorites'
          ? $store.commit('favorite', game)
          : $store.commit('basket', game)
      "
    >
      <span></span><span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "favoriteCard",
  props: ["game", "type"],
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  background: #111;
  @include adaptiv-padding(0, 0, 10, 3, 1);
  border-radius: 10px;
  color: #fff;
  position: relative;
  &__move {
    color: #fff;
    opacity: 0.6;
    @include adaptiv-font(30, 18);
    @include adaptiv-value-width(padding, 3, 5, 500, 1);
    @include adaptiv-value(margin-right, 10, 5, 1);
    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        opacity: 1;
      }
    }
  }
  &__main {
    display: flex;
    border-left: 1px solid #10412b;
    padding: 12px;
    @include adaptiv-value(padding, 12, 10, 0);

    width: 100%;
  }
  &__img {
    @include adaptiv-value(width, 300, 150, 0);
    @include adaptiv-value(height, 150, 75, 0);
    margin-right: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__text {
    flex: 1 1 auto;
    width: 100%;
  }
  &__title {
    @include adaptiv-font(25, 12);
    display: inline-block;
    margin-bottom: 10px;
    transition: all 0.3s ease 0s;
    color: #fff;
  }

  &__realese {
    font-size: 14px;
    @include adaptiv-font(14, 11);
    color: #777;
    margin-bottom: 10px;
    @media (max-width: 500px) {
      display: none;
    }
  }
  &__genres {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    row-gap: 3px;
    column-gap: 5px;
    @media (max-width: 540px) {
      display: none;
    }
  }
  &__genre {
    padding: 5px;
    font-size: 10px;
    background: #333;
    border-radius: 3px;
    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        color: #38d991;
      }
    }
  }
  &__right {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 120px;
    justify-content: flex-end;
  }
  &__submit {
    display: flex;
    background: rgba(29, 112, 73, 0.4);
    align-items: center;

    & .card__price {
      @include adaptiv-font(14, 12);
      height: 100%;
      @include adaptiv-padding(8, 5, 20, 10, 1);
      display: flex;
      flex-wrap: wrap;
      column-gap: 10px;
      color: #38d991;
      &-discount {
        color: #119258;
        position: relative;
        &::after {
          content: "";
          width: 100%;
          height: 2px;
          position: absolute;
          left: 0;
          top: 50%;
          display: block;
          transform: translateY(-50%);
          background: #38d991;
        }
      }
    }

    button {
      @include adaptiv-value(padding, 10, 5, 1);
      background: #38d991;
      border: 2px solid #38d991;
      font-weight: bold;
      @include adaptiv-font(14, 12);
      white-space: nowrap;
      position: relative;
      color: #000;
      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          color: #38d991;
          background: transparent;
        }
      }

      &:disabled {
        pointer-events: none;
        background: #165a3b;
        border-color: #165a3b;
      }
    }
  }
  &__added-date {
    position: absolute;
    bottom: 12px;
    right: 12px;
    font-size: 12px;
    color: #8f8f8f;

    span {
      color: #5e5e5e;
    }
  }

  &__remove {
    position: absolute;
    width: 15px;
    height: 15px;
    @include adaptiv-value(top, 12, 5, 1);
    @include adaptiv-value(right, 12, 5, 1);
    cursor: pointer;
    span {
      display: inline-block;
      width: 15px;
      height: 1px;
      background: #fff;
      position: absolute;
      top: 50%;
      left: 0;
      transition: all 0.3s ease 0s;

      &:nth-child(1) {
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        transform: rotate(-45deg);
      }
    }

    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        span {
          background: #d95038;
        }
      }
    }
  }

  @media (max-width: 500px) {
    padding: 10px;
    padding-left: 5px;

    &__main {
      padding: calc(10px + 2 * ((100vw - 320px) / 1600)) 0;
      padding-left: calc(10px + 2 * ((100vw - 320px) / 1600));
    }
    &__right {
      max-width: none;
      width: auto;
      justify-content: stretch;
    }
    &__submit {
      flex-direction: column;
    }
    &__button {
      width: 100%;
    }
    & .card__price {
      padding: 10px 5px;
    }
  }
  @media (max-width: 380px) {
    &__img {
      width: 100%;
    }
    &__main {
      justify-content: space-between;
    }
    &__right {
      width: 100%;
      justify-content: flex-end;
    }
  }

  &.card-basket {
    .card__main {
      border-left: 0;
    }
    .card__price {
      min-width: 70px;
      justify-content: center;
    }
  }

  @media (any-hover: hover) {
    transition: all 0.3s ease 0s;
    &:hover {
      box-shadow: 0px 0px 10px 1px #38d991;

      & .card__title {
        color: #38d991;
      }
    }
  }
}
</style>