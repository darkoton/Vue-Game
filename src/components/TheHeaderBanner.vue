<template>
  <div class="header-banner">
    <div class="header-banner__wrapper">
      <div class="header-banner__container _container">
        <div class="header-banner__body">
          <div class="header-banner__info header-banner__top-left">
            <div class="header-banner__info-item">
              <div class="header-banner__info-icon icon-phone"></div>
              <span class="header-banner__info-title"
                >{{ $t("message.support") }}:</span
              >
              <a href="tel:+380235266490" class="header-banner__info-tel"
                >+380235266490</a
              >
            </div>

            <div class="header-banner__info-item">
              <div class="header-banner__info-icon icon-time"></div>
              <span class="header-banner__info-title"
                >{{ $t("message.workingHours") }}:</span
              >
              <div class="header-banner__info-ordinary">
                {{ $t("message.workingHoursInfo") }}
              </div>
            </div>
          </div>
          <div class="header-banner__top-right">
            <div class="header-banner__languages">
              <div class="header-banner__languages-body">
                <span
                  class="header-banner__language"
                  @click="
                    $store.commit('selectLanguage', 'en');
                    $i18n.locale = 'en';
                  "
                  >EN</span
                ><span
                  class="header-banner__language"
                  @click="
                    $store.commit('selectLanguage', 'ru');
                    $i18n.locale = 'ru';
                  "
                  >RU</span
                >
                <div
                  class="header-banner__select"
                  :class="{
                    en: $i18n.locale == 'en',
                    ru: $i18n.locale == 'ru',
                  }"
                ></div>
              </div>
            </div>

            <div
              class="header-banner__theme icon-sun"
              @click="$store.commit('changeTheme')"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: "ru",
    };
  },
};
</script>

<style lang="scss" scoped>
.header-banner {
  transition: all 0.3s ease 0s;
  background: #111;
  & * {
    transition: all 0.3s ease 0s;
  }
  &__body {
    width: 100%;
    display: flex;
    padding-top: 20px;
    padding-bottom: 10px;
    column-gap: 30px;
    justify-content: space-between;
    @media (max-width: 840px) {
      display: none;
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
  &__top-right {
    display: flex;
    column-gap: 20px;
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
}
.dark {
  .header-banner {
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
  }
}
.light {
  .header-banner {
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
  }
}
</style>