<template>
  <div class="home">
    <div class="home__wrapper">
      <div class="home__container _container">
        <div class="home__body">
          <banner />
          <navigation class="navigation" v-model="navValue" :genres="genres" />
          <products :category="navValue" />

          <h2 class="title">{{ $t("message.new") }}</h2>

          <products :category="11" />

          <h2 class="title">{{ $t("message.popular") }}</h2>

          <products :category="12" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "@/components/home/TheBanner.vue";
import navigation from "@/components/home/TheNavigation.vue";
import products from "@/components/TheProducts.vue";
export default {
  name: "TheHome",
  components: {
    banner,
    navigation,
    products,
  },
  data() {
    return {
      navValue: "1",
      genres: [],
    };
  },
  mounted() {
    this.$get("genres").then((r) => {
      this.genres = r.data;
      this.genres.splice(10, 1);
      this.genres.splice(10, 1);
    });
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  @include adaptiv-value(margin-bottom, 50, 20, 1);
}
.title {
  @include adaptiv-value(margin-bottom, 30, 10, 1);
  color: #fff;
  font-family: $fontJura;
  @include adaptiv-font(30, 20);
  font-weight: 700;
  line-height: 22px;
}

.dark {
  .title {
    color: #fff;
  }
}

.light {
  .title {
    color: #000;
  }
}
</style>