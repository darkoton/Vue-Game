<template>
  <div class="banner">
    <div class="banner__wrapper">
      <div class="banner__container _container">
        <div class="banner__body">
          <swiper
            :slidesPerView="1"
            :spaceBetween="20"
            class="banner__swiper"
            :centeredSlides="true"
            :loop="true"
            :autoplay="{
              delay: 2500,
            }"
            :modules="modules"
            :navigation="{
              prevEl: prev,
              nextEl: next,
            }"
            :pagination="true"
            :breakpoints="{
              '320': {
                slidesPerView: 1,
              },
              '640': {
                slidesPerView: 1.32,
              },
            }"
          >
            <swiper-slide class="banner__slide">
              <div class="banner__img">
                <img src="@/assets/img/main/god-of-war.png" alt="" />
              </div>

              <div class="banner__text">
                <h2 class="banner__title">Эпические приключения</h2>
                <button class="banner__button">Посмотреть</button>
              </div>
            </swiper-slide>
            <swiper-slide class="banner__slide">
              <div class="banner__img">
                <img src="@/assets/img/main/gta5.png" alt="" />
              </div>

              <div class="banner__text">
                <h2 class="banner__title">Криминальный мир</h2>
                <button class="banner__button">Посмотреть</button>
              </div>
            </swiper-slide>

            <swiper-slide class="banner__slide">
              <div class="banner__img">
                <img src="@/assets/img/main/tekken8.png" alt="" />
              </div>

              <div class="banner__text">
                <h2 class="banner__title">Красивые приёмы</h2>
                <button class="banner__button">Посмотреть</button>
              </div>
            </swiper-slide>

            <swiper-slide class="banner__slide">
              <div class="banner__img">
                <img src="@/assets/img/main/rdr2.jpg" alt="" />
              </div>

              <div class="banner__text">
                <h2 class="banner__title">Красивый открыйтый мир</h2>
                <button class="banner__button">Посмотреть</button>
              </div>
            </swiper-slide>

            <swiper-slide class="banner__slide">
              <div class="banner__img">
                <img
                  src="@/assets/img/main/hollow-knight-silksong.webp"
                  alt=""
                />
              </div>

              <div class="banner__text">
                <h2 class="banner__title">Завораживающий сюжет</h2>
                <button class="banner__button">Посмотреть</button>
              </div>
            </swiper-slide>
          </swiper>

          <div class="banner__navigation">
            <div ref="prev" class="banner__arrow swiper-button-prev"></div>
            <div ref="next" class="banner__arrow swiper-button-next"></div>
          </div>

          <div class="banner__pagination" ref="pagination"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "@/assets/style/ui/_swiper-pagination.scss";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const prev = ref(null);
    const next = ref(null);
    const modules = [Autoplay, Navigation, Pagination];

    return {
      modules,
      prev,
      next,
    };
  },
};
</script>

<style lang="scss" scoped>
.banner {
  font-family: $fontJura;
  &__body {
    padding: 15px 0 30px 0;
    position: relative;
  }
  &__swiper {
    overflow: visible;
  }
  &__slide {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }
  &__img {
    img {
      width: 100%;
      height: 100%;
      max-height: 480px;
      min-height: 250px;
      object-fit: cover;
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0;
      left: 0;
      background: linear-gradient(360deg, #000 0%, rgba(56, 56, 56, 0) 60%),
        50% / cover no-repeat;
    }
  }
  &__text {
    position: absolute;
    @include adaptiv-value(padding-left, 20, 5, 1);
    @include adaptiv-value(bottom, 40, 15, 1);
    @include adaptiv-value(left, 40, 15, 1);
  }
  &__title {
    color: #fff;
    @include adaptiv-font(40, 16);
    font-style: normal;
    font-weight: 500;
    margin-bottom: 30px;
    @include adaptiv-value(margin-bottom, 30, 15, 1);
  }
  &__button {
    width: 100%;
    @include adaptiv-padding(13, 5, 16, 7, 1);
    @include adaptiv-value(max-width, 180, 140, 1);
    max-height: 45px;
    transform: rotate(-5.358deg);
    background: transparent;
    color: #fff;
    text-align: center;
    @include adaptiv-font(23, 15);
    font-weight: 500;
    line-height: 28px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 700px) {
      transform: rotate(0);
    }

    &::after {
      content: "";
      border-radius: 3px;
      border: 2px solid #00644b;
      background: transparent;
      width: 100%;
      height: 100%;
      position: absolute;
      left: -10px;
      top: 5px;
      z-index: -2;
      transition: all 0.4s ease 0s;
      @media (max-width: 700px) {
        display: none;
      }
    }
    &::before {
      content: "";
      border-radius: 3px;
      border: 2px solid #38d991;
      background: transparent;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: -1;
      transition: all 0.4s ease 0s;
    }

    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        color: #000;
        &::before {
          background: #38d991;
        }
        &::after {
          background: #00644b;
        }
      }
    }
  }
  &__navigation {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: calc((100% - 20px) / 1.32);

    @media (max-width: 640px) {
      width: calc((100% - 20px) / 1);
    }
  }
  &__arrow {
    border-radius: 35px;
    background: #38d991;
    border: 2px solid #38d991;
    @include adaptiv-value(width, 45, 30, 1);
    @include adaptiv-value(height, 45, 30, 1);
    @include adaptiv-font(25, 20);
    @include adaptiv-value(margin-top, -30, -10, 1);
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        background: transparent;
        color: #38d991;
      }
    }

    &.swiper-button-prev:after {
      transform: translate(-1px);
    }
    &.swiper-button-next:after {
      transform: translate(2px);
    }
  }
}
</style>