<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const productId = computed(() => route.params.id);
const isLoading = ref(false);

const titlePost = ref("");
const sub_titlePost = ref("");
const imagePost = ref("");
const AuthorPost = ref("");
const contentPost = ref("");

const fetchPostData = async () => {
  isLoading.value = true;

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_API}/blog/${productId.value}`
    );
    const post = response.data;

    titlePost.value = post.Title;
    sub_titlePost.value = post.SubTitle;
    imagePost.value = post.Image;
    AuthorPost.value = post.Author;
    contentPost.value = post.Content;
    isLoading.value = false;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu bài viết:", error);
    isLoading.value = false;
    alert("Không thể tải dữ liệu bài viết!");
  }
};

onMounted(() => {
  fetchPostData();
});
</script>

<template>
  <div class="header-content">
    <div class="content-detail">
      <h3 class="fw-bold">{{ titlePost }}</h3>
      <p>{{ sub_titlePost }}</p>
    </div>
  </div>
  <div v-if="isLoading" class="loading-spinner">
    <i class="fas fa-spinner fa-spin"></i> Loading...
  </div>
  <div v-else class="detail-container">
    <div>
      <p class="color-gray" style="margin: 20px 0px 10px 0px">
        Home — {{ titlePost }}
      </p>
      <div class="images">
        <img :src="imagePost" alt="Post Image" />
      </div>
      <div>
        <p class="color-text">{{ contentPost }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-container {
  margin: 0px auto;
  width: 70%;
}
.header-content {
  background-color: #ffffff;
  width: 100%;
  padding: 50px 0 50px 0;
}
.content-detail {
  width: 70%;
  margin: 0 auto;
}
.images img {
  width: 100%;
  margin: 30px 0 40px 0;
  object-fit: cover;
}
.text-footerContent {
  color: var(--Primary);
  text-align: center;
  font-size: 24px;
  font-weight: lighter;
}
.loading-spinner {
  text-align: center;
  font-size: 24px;
  color: var(--Primary);
  padding: 20px;
}
@media screen and (max-width: 768px) {
  .text-footerContent {
    font-size: 20px;
  }
}
</style>
