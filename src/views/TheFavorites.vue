<template>
  <div class="favorites">
    <div class="favorites__wrapper">
      <div class="favorites__container _container">
        <div class="favorites__body">
          <div class="favorites__top">
            <h2 class="favorites__title">Избраное</h2>
            <button class="favorites__clear">
              Очистить <i class="icon-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.favorites {
  &__top {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  &__title {
    font-family: $fontJura;
    font-size: 30px;
    color: #38d991;
    font-weight: bold;
  }
  &__clear {
    font-size: 20px;
    color: #38d991;
    opacity: 0.5;
    background: transparent;
    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>