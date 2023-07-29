<template>
  <div class="footer">
    <div class="footer__wrapper">
      <div class="footer__container _container">
        <div class="footer__body">
          <div class="footer__logo">
            <img
              src="@/assets/img/footer/logo.png"
              class="footer__img"
              alt=""
            />
            <h2 class="footer__title">Vue Game</h2>
            <p class="footer__subtitle">{{ $t("message.tagline") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style lang="scss" scoped>
.footer {
  &__body {
    display: flex;
    justify-content: center;
    align-items: center;
    @include adaptiv-padding(50, 20, 0, 0, 1);
  }
  &__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__img {
    margin-bottom: 10px;
  }
  &__title {
    color: #3ad992;
    font-family: $fontPressStart;
    font-size: 17px;
    line-height: 14px;
    letter-spacing: 0.1px;
    margin-bottom: 6px;
  }
  &__subtitle {
    color: #3ad992;
    font-size: 11px;
    line-height: 14px;
    letter-spacing: 0.1px;
  }
}

.dark {
  .footer {
    &__title {
      color: #3ad992;
    }
    &__subtitle {
      color: #3ad992;
    }
  }
}

.light {
  .footer {
    &__title {
      color: #2cb477;
    }
    &__subtitle {
      color: #2cb477;
    }
  }
}
</style>