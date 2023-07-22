<template>
  <div class="home">
    <banner />
    <navigation class="navigation" v-model="navValue" :genres="genres" />
    <products :category="navValue" />
  </div>
</template>

<script>
import banner from "@/components/home/TheBanner.vue";
import navigation from "@/components/home/TheNavigation.vue";
import products from "@/components/home/TheProducts.vue";
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
    });
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  @include adaptiv-value(margin-bottom, 50, 20, 1);
}
</style>