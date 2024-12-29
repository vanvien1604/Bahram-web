<script setup>
import { ref } from "vue";
import axios from "axios";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "../components/BaseButton.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const isHistoryVisible = ref(false);
const titlePost = ref("");
const sub_titlePost = ref("");
const imagePost = ref("");
const AuthorPost = ref("");
const contentPost = ref("");
const imageFile = ref(null);

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

const handleSubmit = () => {
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

  axios
    .post(import.meta.env.VITE_BASE_API + "/blog", formData)
    .then(function (response) {
      console.log(response);
      alert("Thêm bài viết thành công!");
      router.push("/");
    })
    .catch(function (error) {
      console.error(error);
      alert("Đã xảy ra lỗi hoặc kích thước ảnh quá lớn !");
    });
};

const toggleHistory = () => {
  isHistoryVisible.value = !isHistoryVisible.value;
};
</script>

<template>
  <div class="add-container">
    <div class="container text-center">
      <div class="row">
        <div class="col-12 col-md-8">
          <div class="left-content">
            <div class="flex-formheader">
              <h3>Create Post</h3>
              <div class="icons-history" @click="toggleHistory">
                <img src="/src/assets/icons/history.svg" alt="history" />
              </div>
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
              <BaseButton title="Create Post" @click="handleSubmit" />
            </div>
          </div>
        </div>
        <div
          class="right-container col-4"
          :class="{ visible: isHistoryVisible }"
        >
          <div>
            <h3>RECENT POST</h3>
          </div>
          <div class="right-content">
            <div>
              <p class="color-gray">DESIGN PROCESS</p>
              <p class="fw-bold">Our 15 favorite websites from August</p>
              <p class="color-gray">INSPIRATIO</p>
            </div>
            <div>
              <p class="color-pink fw-bold mt-3">
                The beginners guide to user research
              </p>
              <p class="color-gray">INSPIRATIO</p>
            </div>
            <div>
              <p class="fw-bold mt-3">
                Web page layout 101: website anatomy every designer needs to
                learn
              </p>
            </div>
            <div>
              <p class="color-gray mt-3">FREELANCING</p>
              <p class="fw-bold">
                10 essential sections to a high landing page
              </p>
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

@media screen and (min-width: 769px) {
  .icons-history {
    display: none;
  }
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

  .icons-history {
    margin-left: 0;
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
