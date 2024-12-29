<script setup>
import BaseTable from "@/components/BaseTable.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

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
  <div class="list-container">
    <div v-if="isLoading" class="loading-spinner">
      <i class="fas fa-spinner fa-spin"></i> Loading...
    </div>
    <div v-else>
      <BaseTable :listPost="listPost" />
    </div>
  </div>
</template>

<style scoped>
.list-container {
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
}
.icons-edit {
  width: 22px;
}
.icons-delete {
  width: 22px;
  margin-left: 10px;
}
.loading-spinner {
  text-align: center;
  font-size: 24px;
  color: var(--Primary);
  padding: 20px;
}
@media screen and (max-width: 768px) {
  .list-container {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
