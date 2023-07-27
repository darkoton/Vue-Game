<template>
  <div class="product">
    <div class="product__wrapper">
      <div class="product__container _container">
        <div class="product__body">
          <product />

          <h2 class="product__title">Рекомендации</h2>
          <products
            :filterId="$route.params.id"
            :category="$route.params.genre"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import product from "@/components/product/TheCardPage.vue";
import products from "@/components/TheProducts.vue";

export default {
  components: {
    product,
    products,
  },
};
</script>

<style lang="scss" scoped>
.product {
  &__title {
    color: #fff;
    @include adaptiv-font(30, 25);
    @include adaptiv-value(margin-top, 30, 10, 1);
    @include adaptiv-value(margin-bottom, 20, 10, 1);
  }
}
</style>