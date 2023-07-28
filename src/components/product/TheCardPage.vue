<template>
  <div class="product-card">
    <div class="product-card__main" v-if="game">
      <div class="product-card__left">
        <div class="product-card__sliders">
          <swiper
            :style="{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }"
            :spaceBetween="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="product-card__slider product-card__slider-1"
          >
            <swiper-slide
              class="product-card__slide-big"
              v-for="img in game.screenshots"
              :key="img"
              ><img :src="img"
            /></swiper-slide>
          </swiper>

          <swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="10"
            :slidesPerView="3"
            :watchSlidesProgress="true"
            :modules="modules"
            class="product-card__slider product-card__slider-2"
          >
            <swiper-slide
              class="product-card__slide-small"
              v-for="img in game.screenshots"
              :key="img"
              ><img :src="img"
            /></swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="product-card__right">
        <div class="product-card__info">
          <h2 class="product-card__title">{{ game.title }}</h2>

          <div class="product-card__actions">
            <div class="product-card__price" v-if="game.price">
              <div class="product-card__price-discount" v-if="game.discount">
                <span class="price-old">{{ game.price }}$ </span>
                <span class="price">{{ game.discount }}$</span>
              </div>

              <div class="product-card__price-price" v-else>
                <span class="price">{{ game.price }}$</span>
              </div>
            </div>

            <button
              class="product-card__basket"
              :disabled="game.state == 'in developing'"
              @click="basket"
            >
              {{
                $store.state.basket.find((el) => el.id == game.id)
                  ? "В корзине"
                  : game.state == "in developing"
                  ? "Скоро"
                  : "В корзину"
              }}
            </button>
            <div class="product-card__favorite" @click="favorite">
              <img
                src="@/assets/img/card/heart.png"
                alt=""
                v-if="!$store.state.favorites.find((el) => el.id == game.id)"
              />
              <img src="@/assets/img/card/heart-active.png" alt="" v-else />
            </div>
          </div>
          <p class="product-card__description">
            Описание: {{ game.ru.description }}
          </p>
          <ul class="product-card__genres">
            <li
              class="product-card__genre"
              v-for="genre in game.ru.genres"
              :key="genre"
            >
              {{ genre }}
            </li>
          </ul>

          <div class="product-card__release">
            Дата выхода: {{ game.ru.releaseDate }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios/base";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      game: null,
      modules: [FreeMode, Navigation, Thumbs],
      thumbsSwiper: null,
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    favorite() {
      this.$store.commit("favorite", this.game);
    },
    basket() {
      this.$store.commit("basket", this.game);
    },
    async get() {
      this.game = (
        await axios.axios2.get(
          process.env.VUE_APP_BACKEND_URL2 + "games/" + this.$route.params.id
        )
      ).data;
    },
  },
  watch: {
    $route() {
      this.get();
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    this.get();
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  color: #fff;
  &__main {
    display: flex;
    column-gap: 20px;
    @include adaptiv-value(padding-top, 40, 20, 1);
  }
  &__left,
  &__right {
    width: 50%;
  }
  &__right {
    width: 60%;
  }
  &__sliders {
    display: flex;
    flex-direction: column;
  }
  &__slider {
    width: 100%;
    &-1 {
      max-height: 500px;
      border-radius: 10px;
      @include adaptiv-value(--swiper-navigation-size, 50, 25, 1);
    }
    &-2 {
      max-height: 200px;
      margin-top: 10px;
    }
  }
  &__slide {
    &-big {
      img {
        width: 100%;
        height: 100%;
        max-height: 329px;
        object-fit: cover;
      }
    }
    &-small {
      cursor: pointer;
      img {
        border-radius: 10px;
        width: 100%;
        height: 100%;
        max-height: 90px;
        object-fit: cover;
      }
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
  }
  &__title {
    font-size: 30px;
    @include adaptiv-font(30, 18);
    font-weight: bold;
    @include adaptiv-value(margin-bottom, 20, 10, 1);
  }
  &__actions {
    display: flex;
    align-items: center;
    @include adaptiv-value(margin-bottom, 20, 10, 1);
  }
  &__price {
    padding: 10px;
    @include adaptiv-font(20, 14);
    background: #0c2e1e;
    color: #38d991;

    & .price-old {
      color: #1c6d49;
      margin-right: 10px;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        background: #38d991;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }
  }
  &__basket {
    @include adaptiv-font(22, 14);
    background: #38d991;
    color: #000;
    height: 100%;
    padding: 6px;
    border: 2px solid #38d991;
    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        background: transparent;
        color: #38d991;
      }
    }
    &:disabled {
      pointer-events: none;
      background: #165a3b;
      border-color: #165a3b;
    }
  }
  &__favorite {
    margin-left: 10px;
    cursor: pointer;
  }
  &__description {
    font-size: 14px;
    margin-bottom: 10px;
  }
  &__genres {
    display: flex;
    flex-wrap: wrap;
    row-gap: 3px;
    column-gap: 5px;
    margin-bottom: 20px;
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
  &__release {
    color: #01492a;
  }
  @media (max-width: 750px) {
    &__main {
      flex-direction: column;
      row-gap: 20px;
    }
    &__right,
    &__left {
      width: 100%;
    }
  }
}
</style>
