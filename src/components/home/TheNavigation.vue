<template>
  <div class="navigation">
    <ul class="navigation__list">
      <li
        class="navigation__genre"
        :class="{ 'navigation__genre-active': modelValue == genre.id }"
        v-for="genre in genres"
        :key="genre"
        @click="$emit('update:modelValue', genre.id)"
      >
        {{ $i18n.locale == "ru" ? genre.ruName : genre.enName }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    genres: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  emits: ["update:modelValue"],
};
</script>

<style lang="scss" scoped>
.navigation {
  &__list {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 5px;
    border-radius: 5px;
    background: rgba(63, 63, 63, 0.46);
    overflow-x: auto;
  }
  &__genre {
    color: rgba(255, 255, 255, 0.4);
    font-family: $fontJura;
    font-size: 18px;
    @include adaptiv-font(18, 14);
    font-weight: 500;
    line-height: 12px;
    padding: 8.5px 5px;
    cursor: pointer;
    transition: all 0.4s ease 0s;
    white-space: nowrap;

    &-active {
      border-radius: 2px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
    }
  }
}

.dark {
  .navigation {
    &__list {
      background: rgba(63, 63, 63, 0.46);
    }
    &__genre {
      color: rgba(255, 255, 255, 0.4);
    }
  }
}
.light {
  .navigation {
    &__list {
      background: #c9c9c9;
    }
    &__genre {
      color: rgba(0, 0, 0, 0.4);

      &-active {
        background: rgba(0, 0, 0, 0.2);
        color: #000;
      }
    }
  }
}
</style>