<template>
  <div class='navigation'>
    <div class='navigation__wrapper'>
      <div class='navigation__container _container'>
        <div class='navigation__body'>
          <ul class="navigation__list">
            <li class="navigation__genre"
             :class="{'navigation__genre-active': modelValue == genre.title}" 
             v-for="genre in genres"
             :key="genre"
             @click="$emit('update:modelValue', genre.title)"
             >
              {{ genre.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default{
  props:{
    modelValue: String,
    genres:{
      type: Array,
      default() {
        return [{
        title: "Приключения"
      },
      {
        title: "Файтинг"
      },
      {
        title: "Выживание"
      },
      {
        title: "Кооператив"
      },
      {
        title: "Стратегия"
      },
      {
        title: "Рогалик"
      },
      {
        title: "Экшен"
      },
      {
        title: "Открыйтый мир"
      },
      {
        title: "Хоррор"
      },
      {
        title: "Шутер"
      },
    ]
      }
    }
  },
  emits: ['update:modelValue']

}

</script>

<style lang="scss">
  .navigation{
    &__list{
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 5px;
      border-radius: 5px;
      background: rgba(63, 63, 63, 0.46);
    }
    &__genre{
      color: rgba(255, 255, 255, 0.40);
      font-family: $fontJura;
      font-size: 18px;
      font-weight: 500;
      line-height: 12px;
      padding: 8.5px 5px;
      cursor: pointer;
      transition: all 0.4s ease 0s;

      &-active{
        border-radius: 2px;
        background: rgba(0, 0, 0, 0.2);
        color: #fff;
      }
    }
  }
</style>