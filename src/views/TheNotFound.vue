<template>
  <div class="error">
    <div class="error__wrapper">
      <div class="error__container _container">
        <div class="error__body">
          <div class="error__message">404</div>
          <div class="error__sub-message">Страницу не найдено</div>
          <router-link to="/" class="error__button"
            >Вернуться на главную</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error {
  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    @include adaptiv-value(padding-top, 40, 20, 1);
  }
  &__message {
    animation: flickering 10s infinite;
    font-size: 70px;
    @include adaptiv-font(70, 50);

    font-family: $fontPressStart;
    margin-bottom: 20px;
  }
  &__sub-message {
    color: #3ad991;
    font-family: $fontPressStart;
    font-size: 20px;
    @include adaptiv-font(20, 14);

    margin-bottom: 20px;
    text-align: center;
  }
  &__button {
    font-size: 16px;
    @include adaptiv-font(16, 12);
    padding: 5px 10px;
    color: #000;
    background: #3ad991;
    border: 1px solid #3ad991;
    text-align: center;

    font-family: $fontPressStart;

    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        background: transparent;
        color: #3ad991;
      }
    }
  }
  @keyframes flickering {
    0% {
      text-shadow: 0px 0px 15px #3ad991;
      filter: dropshadow(color=#3ad991, offx=0, offy=0);
      color: white;
    }
    20% {
      text-shadow: 0px 0px 8px #3ad991;
      filter: dropshadow(color=#3ad991, offx=0, offy=0);
      color: #3ad991;
    }
    30% {
      text-shadow: 0px 0px 10px #3ad991;
      filter: dropshadow(color=#3ad991, offx=0, offy=0);
      color: white;
    }
    50% {
      text-shadow: 0px 0px 10px #3ad991;
      filter: dropshadow(color=#3ad991, offx=0, offy=0);
      color: white;
    }
    52% {
      text-shadow: 0px 0px 20px #3ad991;
      filter: dropshadow(color=#3ad991, offx=0, offy=0);
      color: white;
    }
    55% {
      text-shadow: 0px 0px 5px #3ad991;
      filter: dropshadow(color=#3ad991, offx=0, offy=0);
      color: #3ad991;
    }
    60% {
      text-shadow: 0px 0px 5px #3ad991;
      filter: dropshadow(color=#3ad991, offx=0, offy=0);
      color: white;
    }
    85% {
      text-shadow: 0px 0px 5px #3ad991;
      filter: dropshadow(color=#3ad991, offx=0, offy=0);
      color: #3ad991;
    }
    100% {
      text-shadow: 0px 0px 10px #3ad991;
      filter: dropshadow(color=#3ad991, offx=0, offy=0);
      color: white;
    }
  }
}
</style>