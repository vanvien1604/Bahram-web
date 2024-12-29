<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

const route = useRoute();
const router = useRouter();
const postId = route.params.id;

const titlePost = ref("");
const sub_titlePost = ref("");
const imagePost = ref("");
const AuthorPost = ref("");
const contentPost = ref("");
const imageFile = ref(null);

const fetchPostData = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_API}/blog/${postId}`
    );
    const post = response.data;
    titlePost.value = post.Title;
    sub_titlePost.value = post.SubTitle;
    imagePost.value = post.Image;
    AuthorPost.value = post.Author;
    contentPost.value = post.Content;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu bài viết:", error);
    alert("Không thể tải dữ liệu bài viết!");
  }
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const fileName = file.name;
    const imagePath = `/images/${fileName}`;

    imagePost.value = imagePath;

    const reader = new FileReader();
    reader.onload = (e) => {
      imagePost.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const handleUpdate = async () => {
  isLoading.value = true;
  if (
    !titlePost.value ||
    !sub_titlePost.value ||
    !contentPost.value ||
    !AuthorPost.value ||
    !imagePost.value
  ) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  const formData = {
    Title: titlePost.value,
    SubTitle: sub_titlePost.value,
    Image: imagePost.value,
    Content: contentPost.value,
    Author: AuthorPost.value,
  };

  try {
    await axios.put(
      `${import.meta.env.VITE_BASE_API}/blog/${postId}`,
      formData
    );
    alert("Cập nhật bài viết thành công!");
    router.push("/");
  } catch (error) {
    console.error("Lỗi khi cập nhật bài viết:", error);
    alert("Kích thước ảnh quá lớn !");
  }
};

onMounted(() => {
  fetchPostData();
});
</script>

<template>
  <div class="add-container">
    <div class="container text-center">
      <div class="row">
        <div class="col-12">
          <div class="left-content">
            <div class="flex-formheader">
              <h3>Edit Post</h3>
            </div>
            <BaseInput
              v-model="titlePost"
              title="Title"
              placeholder="Title..."
            />
            <BaseInput
              v-model="sub_titlePost"
              title="SubTitle"
              placeholder="SubTitle..."
            />
            <div class="input-mg mb-3">
              <label
                for="formGroupExampleInput"
                class="form-label"
                style="font-weight: bold"
                >Images</label
              >
              <input
                type="file"
                class="form-control"
                @change="handleImageUpload"
              />
              <p class="image-push" v-if="imagePost">
                <img :src="imagePost" alt="Ảnh đã chọn" width="100" />
              </p>
            </div>
            <BaseInput
              v-model="contentPost"
              title="Content"
              placeholder="Content..."
            />
            <BaseInput
              v-model="AuthorPost"
              title="Author"
              placeholder="Author..."
            />
            <div class="right-buttom">
              <BaseButton title="Updated" @click="handleUpdate" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="overlay"
        v-show="isHistoryVisible"
        @click="toggleHistory"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.add-container {
  margin: 40px auto;
  width: 70%;
}

.right-container.visible {
  display: block;
}

.left-content {
  text-align: left;
}

.right-buttom {
  margin-top: 10px;
  float: right;
}

.right-content {
  text-align: left;
}

p {
  margin: 0;
}

.icons-history {
  width: 32px;
  height: 32px;
  margin-left: 50px;
  cursor: pointer;
}

.flex-formheader {
  display: flex;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
.input-mg {
  margin: 32px 0 32px 0;
}

.image-push {
  margin-top: 5px;
}

@media screen and (max-width: 768px) {
  .add-container {
    margin: 0;
    width: 100%;
  }

  .left-content {
    width: 100%;
    padding: 20px;
  }

  .flex-formheader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .right-container {
    display: block;
    position: fixed;
    top: 0;
    right: -300px;
    width: 250px;
    height: 100%;
    background: #fff;
    z-index: 1001;
    padding: 10px;
  }

  .right-container.visible {
    right: 0;
  }
}
</style>
