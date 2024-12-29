<script setup>
import Header from "./HeaderPost.vue";
import Footer from "./FoodterPost.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
</script>

<template>
  <div class="container-body">
    <Header />
    <div class="content">
      <router-view />
    </div>
    <Footer v-if="route.path !== '/add'" />
  </div>
</template>

<style scoped>
@media screen and (max-width: 768px) {
}
</style>
