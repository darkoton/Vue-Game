<template>
  <div class="card">
    <div class="card__left">
      <i class="card__move icon-move"></i>
    </div>
    <div class="card__main">
      <div class="card__img">
        <img :src="game.uploadImg" alt="" />
      </div>
      <div class="card__text">
        <h4 class="card__title">{{ game.title }}</h4>
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
          <div class="card__price">{{ game.price }}$</div>
          <button class="card__button">В корзину</button>
        </div>

        <div class="card__added-date">
          Добавлено <span>{{ game.dateAdded }}</span>
        </div>
      </div>
    </div>
    <div class="card__remove"><span></span><span></span></div>
  </div>
</template>

<script>
export default {
  name: "favoriteCard",
  props: ["game"],
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  background: #111;
  padding: 0 10px;
  border-radius: 10px;
  color: #fff;
  position: relative;
  &__move {
    color: #fff;
    opacity: 0.6;
    font-size: 30px;
    margin-right: 10px;
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
    width: 100%;
  }
  &__img {
    max-width: 300px;
    max-height: 150px;
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
    font-size: 25px;
    margin-bottom: 10px;
    transition: all 0.3s ease 0s;
  }

  &__realese {
    font-size: 14px;
    color: #777;
    margin-bottom: 10px;
  }
  &__genres {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    column-gap: 5px;
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
  }
  &__submit {
    display: flex;
    background: rgba(29, 112, 73, 0.4);
    align-items: center;

    & .card__price {
      height: 100%;
      padding: 0 20px;
    }

    button {
      padding: 10px;
      background: #38d991;
      border: 2px solid #38d991;
      font-weight: bold;
      font-size: 14px;
      white-space: nowrap;
      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          color: #38d991;
          background: transparent;
        }
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
    top: 12px;
    right: 12px;
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