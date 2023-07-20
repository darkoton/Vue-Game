<template>
  <div class="home">
    <banner />
    <navigation v-model="navValue" />
  </div>
</template>

<script>
import banner from "@/components/TheBanner.vue";
import navigation from "@/components/TheNavigation.vue";

export default {
  name: "TheHome",
  components: {
    banner,
    navigation
  },
  data(){
    return{
      navValue: "Приключения"
    }
  }
};
</script>