<template>
  <div
    class="header__backdrop-shadow"
    :class="{ active: burger }"
    @click="burger = false"
  ></div>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__container _container">
        <div class="header__body">
          <div class="header__bottom">
            <div class="header__burger" @click="burger = true">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <router-link to="/" class="header__logo">
              <img
                src="@/assets/img/header/logo.png"
                alt=""
                class="header__logo-img"
              />
              <span class="header__logo-text">Vue Game</span>
            </router-link>

            <form class="header__search">
              <div class="header__search-left">
                <div class="header__search-icon icon-search"></div>
                <input
                  type="text"
                  placeholder="Поиск"
                  class="header__search-input"
                  v-model="search"
                />
                <div
                  class="header__search-close icon-close"
                  v-if="search.length > 0"
                  @click="search = ''"
                ></div>
              </div>
              <button class="header__search-submit">Поиск</button>
            </form>

            <div class="header__actions">
              <router-link
                to="/basket"
                class="header__action header__backet icon-backet"
              >
                <span class="header__counter">{{
                  this.$store.state.basket.length
                }}</span>
              </router-link>
              <router-link
                to="/favorites"
                class="header__action header__favorite icon-favorite"
              >
                <span class="header__counter">{{
                  this.$store.state.favorites.length
                }}</span>
              </router-link>
            </div>
          </div>

          <div
            class="header__burger-menu burger-menu"
            :class="{ active: burger }"
          >
            <div class="burger-menu__top">
              <router-link to="/" class="burger-menu__logo header__logo">
                <img
                  src="@/assets/img/header/logo.png"
                  alt=""
                  class="header__logo-img"
                />
                <span class="header__logo-text">Vue Game</span>
              </router-link>

              <div
                class="burger-menu__close icon-close-pixel"
                @click="burger = false"
              ></div>
            </div>

            <div class="header__info burger-menu__info">
              <div class="header__info-item">
                <div class="header__info-icon icon-phone"></div>
                <span class="header__info-title">Тех поддержка:</span>
                <a href="tel:+380235266490" class="header__info-tel"
                  >+380235266490</a
                >
              </div>

              <div class="header__info-item">
                <div class="header__info-icon icon-time"></div>
                <span class="header__info-title">Режим работы:</span>
                <div class="header__info-ordinary">ПН-ВС: 10:00 - 23:00</div>
              </div>
            </div>

            <div class="burger-menu__actions header__actions">
              <router-link to="/basket" class="header__action header__backet">
                <span class="icon-backet"></span>
                <span>Корзина</span>
                <span class="header__counter">{{
                  this.$store.state.basket.length
                }}</span>
              </router-link>
              <router-link
                to="/favorites"
                class="header__action header__favorite"
              >
                <span class="icon-favorite"></span>
                <span>Избраное</span>
                <span class="header__counter">{{
                  this.$store.state.favorites.length
                }}</span>
              </router-link>

              <div class="header__languages">
                <div class="header__languages-body">
                  <span
                    class="header__language"
                    @click="$store.state.language = 'EN'"
                    >EN</span
                  ><span
                    class="header__language"
                    @click="$store.state.language = 'RU'"
                    >RU</span
                  >
                  <div
                    class="header__select"
                    :class="{
                      en: $store.state.language == 'EN',
                      ru: $store.state.language == 'RU',
                    }"
                  ></div>
                </div>
              </div>
            </div>

            <div class="burger-menu__theme header__theme icon-sun"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",

  data() {
    return {
      search: "",
      burger: false,
    };
  },
  watch: {
    $route() {
      this.burger = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #111;

  &__body {
    display: flex;
    padding: 20px 0;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
  }
  &__bottom {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 740px) {
      .header__logo span {
        display: none;
      }
    }
  }

  &__info {
    display: flex;
    align-items: center;
    column-gap: 60px;

    &-item {
      display: flex;
      align-items: center;
    }
    &-icon {
      color: #8b8b8b;
      font-size: 20px;
      margin-right: 7px;
    }

    &-title {
      color: rgba(255, 255, 255, 0.7);
      font-size: 15px;
      position: relative;
    }
    &-tel {
      color: #38d991;
      @include adaptiv-font(14, 12);
      margin-left: 5px;
      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          color: #207a52;
        }
      }
    }
    &-ordinary {
      line-height: 15px;
      color: #e6e1e5;
      @include adaptiv-font(14, 12);
      margin-left: 5px;
    }
  }

  &__languages {
    &-body {
      display: flex;
      column-gap: 4px;
      align-items: center;
      position: relative;
    }
  }
  &__language {
    padding: 6px;
    color: #fff;
    font-size: 13px;
    line-height: 10px;
    position: relative;
    z-index: 2;
    cursor: pointer;
    width: 100%;
    text-align: center;
  }
  &__select {
    background: #00b588;
    width: 50%;
    height: 22px;
    border-radius: 2px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transition: all 0.2s ease-in 0s;

    &.en {
      transform: translateX(0);
    }
    &.ru {
      transform: translateX(100%);
    }
  }
  &__theme {
    font-size: 22px;
    color: #fff;
    margin-left: 20px;
    cursor: pointer;
    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        color: #3ad992;
      }
    }
  }

  &__logo {
    display: flex;
    column-gap: 7px;
    align-items: center;
    font-family: $fontPressStart;
    color: #3ad992;
    @include adaptiv-font(19, 15);
    font-weight: 400;
    line-height: 14px;
    word-spacing: -15px;
    margin-right: 10px;
  }
  &__search {
    display: flex;
    position: relative;
    flex: 1 1 auto;
    justify-content: flex-end;
    @include adaptiv-value(margin-right, 20, 10, 1);
    &-left {
      display: flex;
      border: 1px solid #d9d9d9;
      border-width: 1px 0 1px 1px;
      border-radius: 5px 0 0 5px;
      align-items: center;
      padding-left: 10px;
      position: relative;
      @media (max-width: 520px) {
        border-width: 1px;
        border-radius: 5px;
        padding: 10px;
      }
    }
    &-icon {
      color: #38d991;
      font-size: 20px;
      margin-right: 10px;
    }
    &-input {
      width: 100%;
      color: #fff;
      @include adaptiv-font(18, 15);
      padding-bottom: 2px;
      background: transparent;
      max-width: 250px;
      padding-left: 3px;
      padding-right: 35px;
      transition: all 0.3s ease 0s;
      &::placeholder {
        color: #fff;
        transition: all 0.3s ease 0s;
      }
      &:focus {
        border-color: #00b588;
      }
    }
    &-close {
      position: absolute;
      color: #fff;
      font-size: 17px;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
      z-index: 2;
      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          color: #00b588;
        }
      }
    }
    &-submit {
      height: 100%;
      color: #000;
      font-size: 16px;
      line-height: 10px;
      letter-spacing: 0.1px;
      padding: 0 18px;
      border-radius: 0px 5px 5px 0px;
      background: #38d991;
      border: 1px solid #38d991;
      min-height: 38px;

      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          background: transparent;
          color: #fff;
        }
      }

      @media (max-width: 520px) {
        display: none;
      }
    }
  }

  &__actions {
    display: flex;
    column-gap: 23px;

    a {
      font-size: 24px;
      color: #fff;

      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          color: #00b588;
        }
      }

      &:nth-child(2) {
        @media (max-width: 480px) {
          display: none;
        }
      }
    }
  }
  &__action {
    position: relative;
  }
  &__counter {
    position: absolute;
    top: -20%;
    right: -50%;
    font-size: 15px;
    font-weight: 900;
    font-family: $fontInter;
    padding: 5px;
    background: #38d991;
    color: #000;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__burger {
    display: flex;
    flex-direction: column;
    min-width: 30px;
    height: 22px;
    justify-content: space-between;
    @include adaptiv-value(margin-right, 20, 10, 1);
    display: none;
    @media (max-width: 840px) {
      display: flex;
    }
    span {
      width: 100%;
      height: 3px;
      background: #38d991;
    }
  }

  & .burger-menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    background: #000;
    width: 100%;
    @include adaptiv-value-width(max-width, 400, 290, 840, 1);
    min-width: 320px;
    height: 100%;
    top: 0;
    padding: 20px;
    z-index: 100;
    left: -100%;
    transition: all 0.5s ease 0s;

    @media (min-width: 840px) {
      display: none;
    }
    @media (max-width: 370px) {
      max-width: 100%;
    }

    &.active {
      left: 0;
    }

    &__top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    &__close {
      color: #fff;
      font-size: 20px;
      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          color: #38d991;
        }
      }
    }
    &__info {
      flex-direction: column;
      align-items: flex-start;
      row-gap: 10px;
      margin-bottom: 20px;
    }
    &__actions {
      flex-direction: column;
      row-gap: 20px;
      & a {
        @include adaptiv-font(24, 18);
        display: flex;
        column-gap: 20px;
        span {
          // width: 26px;
        }
      }
    }
    & .header__counter {
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
    &__theme {
      position: absolute;
      bottom: 30px;
      right: 30px;
      font-size: 30px;
    }
  }

  &__navigation {
    display: none;
    justify-content: space-between;
    column-gap: 10px;
    color: #fff;
    width: 100%;
    padding: 10px 0;
    padding-bottom: 20px;
    overflow-x: auto;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;

    @media (max-width: 900px) {
      display: flex;
    }

    & .header__nav {
      white-space: nowrap;
    }
  }
}

.header__backdrop-shadow {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
  background: rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease 0s;
  @media (min-width: 840px) {
    display: none;
  }

  &.active {
    opacity: 1;
    z-index: 9;
  }
}
</style>

