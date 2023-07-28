<template>
  <div class="search">
    <div class="search__wrapper">
      <div class="search__container _container">
        <div class="search__body" v-if="result.length">
          <h1 class="search__title">
            Результаты по запросу: {{ $route.params.search }}
          </h1>

          <products :gamesParent="result" />
        </div>

        <div v-else class="search__body search__not-found">
          <div class="search__img">
            <img src="@/assets/img/search/search.png" alt="" />
          </div>
          <div class="search__message">Нет результатов</div>

          <router-link to="/" class="search__back">Вернуться</router-link>
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
  computed: {
    result() {
      return this.$store.state.games.filter((el) =>
        el.title.toLowerCase().includes(this.$route.params.search)
      );
    },
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
</style>