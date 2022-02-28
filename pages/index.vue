<template>
  <v-app>
    <home />
  </v-app>
</template>

<script>
import Vue from "vue";
import Home from "./Home.vue";

export default Vue.extend({
  components: { Home },
  name: "IndexPage",
});
</script>
