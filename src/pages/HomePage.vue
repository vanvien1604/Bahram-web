<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import BaseProductVue from "@/components/BaseProduct.vue";

const listPost = ref([]);
const isLoading = ref(false);

const getAllPost = () => {
  isLoading.value = true;
  axios
    .get(import.meta.env.VITE_BASE_API + "/blog")
    .then((response) => {
      listPost.value = response.data;
      isLoading.value = false;
    })
    .catch(() => {
      console.log(error);
      isLoading.value = false;
    });
};

onMounted(() => {
  getAllPost();
});
</script>

<template>
  <div class="home-container">
    <div class="input-container">
      <input type="input" name="search" placeholder="Type something…" />
      <i class="fas fa-search search-icon"></i>
    </div>

    <div>
      <p style="margin: 20px 0px 10px 0px">ALL POST</p>
    </div>
    <div v-if="isLoading" class="loading-spinner">
      <i class="fas fa-spinner fa-spin"></i> Loading...
    </div>
    <div v-else class="row row-cols-1 row-cols-md-2 g-4">
      <BaseProductVue :listPost="listPost" />
    </div>

    <div class="buttons-Load-More">
      <button class="Load-More" role="button">Load More</button>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
}

.input-container {
  position: relative;
  width: 100%;
}

.input-container input {
  width: 100%;
  height: 60px;
  border: none;
  outline: none;
  box-shadow: 0 2px 10px 0 rgba(132, 132, 132, 0.2),
    0 3px 15px 0 rgba(255, 241, 241, 0.19);
  border-radius: 10px;
  padding-left: 15px;
  font-size: 16px;
}

.search-icon {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  font-size: 20px;
  color: gray;
}

/* CSS */
.Load-More {
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(255, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(255, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #ff0000;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform, opacity;
  z-index: 0;
}
.buttons-Load-More {
  width: 100%;
  margin: 60px 0 60px 0;
  display: flex;
  justify-content: center;
}
.card-text {
  color: var(--Gray);
}
.loading-spinner {
  text-align: center;
  font-size: 24px;
  color: var(--Primary);
  padding: 20px;
}

@media screen and (max-width: 1280px) {
}
</style>
