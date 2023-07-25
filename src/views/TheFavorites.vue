<template>
  <div class="favorites">
    <div class="favorites__wrapper">
      <div class="favorites__container _container">
        <div class="favorites__body">
          <div class="favorites__top">
            <h2 class="favorites__title">Избраное</h2>
            <button class="favorites__clear" @click="clear">
              Очистить <i class="icon-trash"></i>
            </button>
          </div>

          <!-- <pre style="color: #fff"> {{ list }}</pre>
          <draggable
            class="favorites__list list"
            tag="transition-group"
            :component-data="{
              tag: 'ul',
              type: 'transition-group',
              name: !drag ? 'flip-list' : null,
            }"
            v-model="list"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
            item-key="id"
            handle=".handle"
          >
            <template #item="{ element }">
              <div class="li">
                <div class="fa fa-align-justify handle">Ξ</div>
                {{ element.name }}
              </div>
            </template>
          </draggable> -->

          <draggable
            class="favorites__list"
            tag="div"
            :component-data="{
              tag: 'ul',
              type: 'transition-group',
              name: !drag ? 'flip-list' : null,
            }"
            v-model="this.$store.state.favorites"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
            item-key="test"
            handle=".handle"
          >
            <template #item="{ element }">
              <li>
                <card :game="element" :type="'favorites'" />
              </li>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import card from "@/components/favorites/TheCard.vue";
const message = [
  "vue.draggable",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs",
];

export default {
  components: {
    draggable,
    card,
  },

  data() {
    return {
      drag: false,
      list: message.map((name, index) => {
        return { name, order: index + 1 };
      }),
      dragOptions: {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      },
    };
  },
  watch: {
    "$store.state.favorites"() {
      localStorage.setItem(
        "favorites",
        JSON.stringify(this.$store.state.favorites)
      );
    },
  },
  methods: {
    clear() {
      localStorage.setItem("favorites", JSON.stringify([]));
      this.$store.state.favorites = [];
    },
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
}
</style>