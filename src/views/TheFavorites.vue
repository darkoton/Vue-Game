<template>
  <div class="favorites">
    <div class="favorites__wrapper">
      <div class="favorites__container _container">
        <div class="favorites__body" v-if="$store.state.favorites.length">
          <div class="favorites__top">
            <h2 class="favorites__title">Избраное</h2>
            <button class="favorites__clear" @click="clear">
              Очистить <i class="icon-trash"></i>
            </button>
          </div>

          <draggable
            class="favorites__list"
            tag="div"
            :component-data="{
              tag: 'ul',
              type: 'transition-group',
              name: !drag ? 'flip-list' : null,
            }"
            v-model="$store.state.favorites"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
            item-key="test"
            handle=".handle"
          >
            <template #item="{ element }">
              <li class="favorites__li">
                <card :game="element" :type="'favorites'" />
              </li>
            </template>
          </draggable>
        </div>
        <div class="favorites__body" v-else>
          <div class="favorites__empty">
            <div class="favorites__animation">
              <img
                :src="'/assets/img/favorites/frame ' + imgFrame + '.png'"
                alt=""
              />
            </div>

            <h2 class="favorites__empty-title">Список желаний пуст</h2>
            <router-link class="favorites__empty-button" to="/"
              >Вернуться</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import card from "@/components/product/TheCard.vue";

export default {
  components: {
    draggable,
    card,
  },

  data() {
    return {
      drag: false,
      imgFrame: 1,
      dragOptions: {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      },
    };
  },
  watch: {
    "$store.state.favorites"(value) {
      localStorage.setItem("favorites", JSON.stringify(value));

      if (!value.length) {
        this.animation();
      }
    },
  },
  methods: {
    animation() {
      let delay = 0;

      const createInterval = () => {
        let animInterval = setInterval(() => {
          if (delay == 0) {
            this.imgFrame++;
            if (this.imgFrame == 9) {
              this.imgFrame = 1;
              delay = 1000;
            }
          } else {
            delay = 0;
            clearInterval(animInterval);
            setTimeout(() => createInterval(), 1000);
          }
        }, 100);
      };

      createInterval();
    },
    clear() {
      localStorage.setItem("favorites", JSON.stringify([]));
      this.$store.state.favorites = [];
    },
  },
  mounted() {
    if (!this.$store.state.favorites.length) {
      this.animation();
    }
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 400px;
  padding: 20px;
}
.li {
  height: 100%;
  font-size: 20px;
  padding: 20px 10px;
  background: #fff;
  list-style: none;
  display: flex;
}
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
  &__list {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin-top: 20px;
  }
  &__li {
    list-style: none;
  }
  &__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    &-title {
      @include adaptiv-font(30, 25);
      text-align: center;
      color: #38d991;
      font-family: $fontJura;
      font-weight: bold;
      margin-bottom: 10px;
    }
    &-button {
      padding: 5px 10px;
      font-size: 25px;
      border-radius: 5px;
      font-weight: bold;
      color: #000;
      background: #38d991;
      border: 2px solid #38d991;
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
  &__animation {
    width: 100%;
    max-width: 200px;
    margin-bottom: 20px;
    img {
      width: 100%;
    }
  }
}
</style>