<template>
  <div class="wrapper">
    <div class="content">
      <the-header-banner></the-header-banner>
      <the-header></the-header>
      <router-view class="page" />
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script>
import TheHeaderBanner from "./components/TheHeaderBanner.vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheHeaderBanner,
    TheHeader,
    TheFooter,
  },
  created() {
    if (!localStorage.favorites) {
      localStorage.setItem("favorites", JSON.stringify([]));
    }
    if (!localStorage.basket) {
      localStorage.setItem("basket", JSON.stringify([]));
    }
    if (!localStorage.language) {
      localStorage.setItem("language", "ru");
    }
  },
};
</script>