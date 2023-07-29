<template>
  <div class="search">
    <div class="search__wrapper">
      <div class="search__container _container" v-if="games">
        <div class="search__body" v-if="games.length">
          <h1 class="search__title">
            {{ $t("message.resultSearch") }}: {{ $route.params.search }}
          </h1>

          <products :gamesParent="games" />
        </div>

        <div v-else class="search__body search__not-found">
          <div class="search__img">
            <img src="@/assets/img/search/search.png" alt="" />
          </div>
          <div class="search__message">{{ $t("message.noResult") }}</div>

          <router-link to="/" class="search__back">{{
            $t("message.back")
          }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from "@/components/TheProducts.vue";

export default {
  components: {
    products,
  },
  data() {
    return {
      games: null,
    };
  },
  watch: {
    async $route() {
      await this.$store.dispatch("getSearch", this.$route.params.search);
      this.games = this.$store.getters.searchResult;
    },
  },
  async mounted() {
    await this.$store.dispatch("getSearch", this.$route.params.search);
    this.games = this.$store.getters.searchResult;
  },
};
</script>

<style lang="scss" scoped>
.search {
  &__body {
    @include adaptiv-value(padding-top, 30, 20, 1);
  }
  &__title {
    @include adaptiv-font(30, 20);
    @include adaptiv-value(margin-bottom, 30, 10, 1);
    color: #fff;
  }
  &__not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__img {
    max-width: 70px;
    max-height: 70px;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__message {
    color: #fff;
    font-size: 35px;
    margin-bottom: 25px;
  }
  &__back {
    padding: 5px 10px;
    font-size: 25px;
    color: #000;
    background: #38d991;
    border-radius: 3px;
    border: 1px solid #38d991;
    display: inline-block;
    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        background: transparent;
        color: #38d991;
      }
    }
  }
}

.dark {
  .search {
    &__message {
      color: #fff;
    }
  }
}

.light {
  .search {
    &__message {
      color: #000;
    }
  }
}
</style>