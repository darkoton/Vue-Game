<template>
  <div class="header" :class="{ _focus: searchFocus }">
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

            <div class="header__search">
              <div class="header__search-left">
                <div class="header__search-icon icon-search"></div>
                <input
                  type="text"
                  :placeholder="$t('message.search')"
                  class="header__search-input"
                  :value="search"
                  @input="searchInput"
                  @blur="blur"
                  @focus="searchFocus = true"
                  @keyup.enter="searchSubmit"
                />

                <div
                  class="header__search-close icon-close"
                  v-if="search.length > 0"
                  @click="search = ''"
                ></div>
                <ul class="header__search-result" v-if="searchFocus">
                  <li
                    class="header__search-result-li"
                    v-for="game in gamesResult"
                    :key="game"
                    @click="$router.push(`/product/${game.genreId}/${game.id}`)"
                  >
                    <div class="header__search-result-img">
                      <img :src="game.uploadImg" alt="" />
                    </div>
                    <div class="header__search-result-text">
                      <div class="header__search-result-title">
                        {{ game.title }}
                      </div>
                      <div
                        class="header__search-result-price"
                        v-if="game.price"
                      >
                        {{ game.price }}$
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <button @click="searchSubmit" class="header__search-submit">
                {{ $t("message.search") }}
              </button>
            </div>

            <div class="header__actions">
              <router-link
                to="/basket"
                class="header__action header__backet icon-backet"
              >
                <span class="header__counter">{{
                  $store.state.basket.length
                }}</span>
              </router-link>
              <router-link
                to="/favorites"
                class="header__action header__favorite icon-favorite"
              >
                <span class="header__counter">{{
                  $store.state.favorites.length
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
                <span class="header__logo-text">Vue Game </span>
              </router-link>

              <div
                class="burger-menu__close icon-close-pixel"
                @click="burger = false"
              ></div>
            </div>

            <div class="header__info burger-menu__info">
              <div class="header__info-item">
                <div class="header__info-icon icon-phone"></div>
                <span class="header__info-title"
                  >{{ $t("message.support") }}:</span
                >
                <a href="tel:+380235266490" class="header__info-tel"
                  >+380235266490</a
                >
              </div>

              <div class="header__info-item">
                <div class="header__info-icon icon-time"></div>
                <span class="header__info-title"
                  >{{ $t("message.workingHours") }}:</span
                >
                <div class="header__info-ordinary">
                  {{ $t("message.workingHoursInfo") }}
                </div>
              </div>
            </div>

            <div class="burger-menu__actions header__actions">
              <router-link to="/basket" class="header__action header__backet">
                <span class="icon-backet"></span>
                <span> {{ $t("message.basket") }} </span>
                <span class="header__counter">{{
                  $store.state.basket.length
                }}</span>
              </router-link>
              <router-link
                to="/favorites"
                class="header__action header__favorite"
              >
                <span class="icon-favorite"></span>
                <span>{{ $t("message.favorites") }}</span>
                <span class="header__counter">{{
                  $store.state.favorites.length
                }}</span>
              </router-link>

              <div class="header__languages">
                <div class="header__languages-body">
                  <span
                    class="header__language"
                    @click="
                      $store.commit('selectLanguage', 'en');
                      $i18n.locale = 'en';
                    "
                    >EN</span
                  ><span
                    class="header__language"
                    @click="
                      $store.commit('selectLanguage', 'ru');
                      $i18n.locale = 'ru';
                    "
                    >RU</span
                  >
                  <div
                    class="header__select"
                    :class="{
                      en: $i18n.locale == 'en',
                      ru: $i18n.locale == 'ru',
                    }"
                  ></div>
                </div>
              </div>
            </div>

            <div
              class="burger-menu__theme header__theme"
              :class="{
                'icon-sun': $store.state.theme == 'dark',
                'icon-moon': $store.state.theme == 'light',
              }"
              v-if="$store.state.theme == 'dark'"
              @click="$store.commit('changeTheme')"
            ></div>
          </div>

          <div
            class="header__backdrop-shadow"
            :class="{ active: burger }"
            @click="burger = false"
          ></div>
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
      burger: false,
      searchFocus: false,
      timerId: null,
      search: "",
    };
  },
  computed: {
    gamesResult() {
      return this.$store.getters.searchResult;
    },
  },
  watch: {
    $route() {
      this.burger = false;
    },
  },
  methods: {
    blur() {
      setTimeout(() => {
        this.searchFocus = false;
      }, 100);
    },

    searchInput(event) {
      if (this.timerId) {
        clearTimeout(this.timerId);
      }
      this.search = event.target.value;
      this.timerId = setTimeout(() => {
        this.$store.dispatch("getSearch", this.search);
      }, 500);
    },

    searchSubmit() {
      if (this.search.length) {
        this.$router.push("/search/" + this.search);
        this.search = "";
      }
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
  transition: all 0.3s ease 0s;

  & * {
    transition: all 0.3s ease 0s;
  }

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
      color: rgba(255, 255, 255, 0.5);
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
    width: 25px;
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
    transition: all 0.5s ease-in 0s;
    @media (max-width: 520px) {
      max-width: 50px;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
  &__search {
    display: flex;
    position: relative;
    flex: 1 1 auto;
    justify-content: flex-end;
    transition: all 0.5s ease-in 0s, background 0.3s ease 0s;
    @include adaptiv-value(margin-right, 20, 10, 1);

    @media (max-width: 520px) {
      background: #111;
    }
    &-left {
      display: flex;
      border: 1px solid #d9d9d9;
      border-width: 1px 0 1px 1px;
      border-radius: 5px 0 0 5px;
      align-items: center;
      padding-left: 10px;
      position: relative;
      width: 100%;
      max-width: 300px;
      transition: all 0.6s ease-in-out 0s;
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
      display: flex;
      align-items: center;

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

    &-result {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: calc(100% + 1px);
      left: 0;
      width: 100%;
      background: rgba(34, 34, 34, 0.95);
      max-height: 60vh;
      overflow: auto;

      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-track {
        background: #111;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #38d991;
        border-radius: 20px;
      }

      & li {
        display: flex;
        column-gap: 10px;
        color: #fff;
        padding: 10px;
        align-items: center;
      }
      &-img {
        width: 100%;
        height: 100%;
        max-width: 75px;
        height: 50px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &-text {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
      }
      &-price {
        color: #38d991;
      }
    }

    & li {
      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          background: #ccc;
          color: #000;

          & .header__search-result-price {
            color: #198554;
          }
        }
      }
    }
  }

  &__actions {
    display: flex;
    column-gap: 23px;
    transition: all 0.5s ease-in 0s;
    max-width: 72px;

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
    width: 100%;
    max-width: 30px;
    height: 22px;
    justify-content: space-between;
    @include adaptiv-value(margin-right, 20, 10, 1);
    display: none;
    transition: all 0.5s ease-in 0s;
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
      max-width: none;
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

  &._focus {
    @media (max-width: 520px) {
      & .header__burger {
        max-width: 0;
        margin: 0;
      }
      & .header__logo {
        max-width: 0;
        margin: 0;
      }
      & .header__actions {
        max-width: 0;
        opacity: 0;
      }
      & .header__search {
        margin: 0;
      }
      & .header__search-left {
        max-width: 100%;
      }
    }
  }
}

.header__backdrop-shadow {
  position: fixed;
  width: 100%;
  height: 100%;
  top: -100%;
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
    top: 0;
    z-index: 20;
  }
}

//themes

//dark
.dark {
  .header {
    background: #111;

    &__info {
      &-icon {
        color: #8b8b8b;
      }
      &-title {
        color: rgba(255, 255, 255, 0.7);
      }
      &-tel {
        color: #38d991;
        @media (any-hover: hover) {
          cursor: pointer;
          transition: all 0.3s ease 0s;
          &:hover {
            color: #207a52;
          }
        }
      }
      &-ordinary {
        color: #e6e1e5;
      }
    }
    &__language {
      color: #fff;
    }
    &__theme {
      color: #fff;
      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          color: #3ad992;
        }
      }
    }

    &__logo {
      color: #3ad992;
    }
    &__search {
      @media (max-width: 520px) {
        background: #111;
      }
      &-left {
        border: 1px solid #d9d9d9;
      }
      &-icon {
        color: #38d991;
      }
      &-input {
        color: #fff;

        &::placeholder {
          color: #fff;
          transition: all 0.3s ease 0s;
        }
      }
      &-close {
        color: #fff;
        @media (any-hover: hover) {
          cursor: pointer;
          transition: all 0.3s ease 0s;
          &:hover {
            color: #00b588;
          }
        }
      }
      &-submit {
        color: #000;

        background: #38d991;
        border: 1px solid #38d991;

        @media (any-hover: hover) {
          cursor: pointer;
          transition: all 0.3s ease 0s;
          &:hover {
            background: transparent;
            color: #fff;
          }
        }
      }

      &-result {
        background: rgba(34, 34, 34, 0.95);

        &::-webkit-scrollbar-track {
          background: #111;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #38d991;
        }

        & li {
          color: #fff;
        }

        &-price {
          color: #38d991;
        }
      }

      & li {
        @media (any-hover: hover) {
          cursor: pointer;
          transition: all 0.3s ease 0s;
          &:hover {
            background: #ccc;
            color: #000;

            & .header__search-result-price {
              color: #198554;
            }
          }
        }
      }
    }

    &__actions {
      a {
        color: #fff;

        @media (any-hover: hover) {
          cursor: pointer;
          transition: all 0.3s ease 0s;
          &:hover {
            color: #00b588;
          }
        }
      }
    }

    &__counter {
      background: #38d991;
      color: #000;
    }
    &__burger {
      span {
        background: #38d991;
      }
    }

    & .burger-menu {
      background: #000;

      &__close {
        color: #fff;
        @media (any-hover: hover) {
          cursor: pointer;
          transition: all 0.3s ease 0s;
          &:hover {
            color: #38d991;
          }
        }
      }
    }
  }
}

//light
.light {
  .header {
    background: rgba(212, 212, 212, 0.8);

    &__info {
      &-icon {
        color: rgba(44, 180, 119, 1);
      }
      &-title {
        color: rgba(0, 0, 0, 0.7);
      }
      &-tel {
        color: #2cb477;
        @media (any-hover: hover) {
          cursor: pointer;
          transition: all 0.3s ease 0s;
          &:hover {
            color: #207a52;
          }
        }
      }
      &-ordinary {
        color: #000;
      }
    }
    &__language {
      color: #000;
    }
    &__theme {
      color: #000;
      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          color: #00a55b;
        }
      }
    }

    &__logo {
      color: #2cb477;
    }
    &__search {
      @media (max-width: 520px) {
        background: #e9e9e9;
      }
      &-left {
        border: 1px solid rgb(184, 184, 184);
      }
      &-icon {
        color: #38d991;
      }
      &-input {
        color: #000;

        &::placeholder {
          color: rgba(0, 0, 0, 0.5);
          transition: all 0.3s ease 0s;
        }
      }
      &-close {
        color: #000;
        @media (any-hover: hover) {
          cursor: pointer;
          transition: all 0.3s ease 0s;
          &:hover {
            color: #00b588;
          }
        }
      }
      &-submit {
        color: #000;

        background: #38d991;
        border: 1px solid #38d991;

        @media (any-hover: hover) {
          cursor: pointer;
          transition: all 0.3s ease 0s;
          &:hover {
            background: transparent;
          }
        }
      }

      &-result {
        background: rgba(209, 209, 209, 0.95);

        &::-webkit-scrollbar-track {
          background: #fff;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #38d991;
        }

        & li {
          color: #000;
        }

        &-price {
          color: #38d991;
        }
      }

      & li {
        @media (any-hover: hover) {
          cursor: pointer;
          transition: all 0.3s ease 0s;
          &:hover {
            background: #bbbbbb;
            color: #000;

            & .header__search-result-price {
              color: #198554;
            }
          }
        }
      }
    }

    &__actions {
      a {
        color: #000000;

        @media (any-hover: hover) {
          cursor: pointer;
          transition: all 0.3s ease 0s;
          &:hover {
            color: #00b588;
          }
        }
      }
    }

    &__counter {
      background: #38d991;
      color: #000;
    }
    &__burger {
      span {
        background: #000000;
      }
    }

    & .burger-menu {
      background: #ececec;

      &__close {
        color: #000;
        @media (any-hover: hover) {
          cursor: pointer;
          transition: all 0.3s ease 0s;
          &:hover {
            color: #38d991;
          }
        }
      }
    }
  }
}
</style>

