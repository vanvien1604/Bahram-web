<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const EditPage = (id) => {
  router.push(`/edit/${id}`);
};

const props = defineProps({
  listPost: {
    title: Array,
    default: [],
  },
});

const tableHeader = ref([
  {
    name: "STT",
  },
  {
    name: "Title",
  },
  {
    name: "SubTitle",
  },
  {
    name: "Images",
  },
  {
    name: "Content",
  },
  {
    name: "Author",
  },
  {
    name: "Action",
  },
]);

const deletePost = (id) => {
  if (confirm("Bạn có chắc chắn muốn xóa bài viết này không?")) {
    axios
      .delete(`${import.meta.env.VITE_BASE_API}/blog/${id}`)
      .then(() => {
        const index = props.listPost.findIndex((item) => item.id === id);
        if (index !== -1) props.listPost.splice(index, 1);
        alert("Xóa bài viết thành công!");
      })
      .catch((error) => {
        console.error("Lỗi khi xóa bài viết:", error);
        alert("Xóa bài viết thất bại!");
      });
  }
};
</script>

<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th v-for="item in tableHeader" :key="item.name" scope="col">
          {{ item.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in listPost" :key="item.id">
        <th scope="row">
          <div class="number-container">
            {{ index + 1 }}
          </div>
        </th>
        <td>{{ item.Title }}</td>
        <td>{{ item.SubTitle }}</td>
        <td><img :src="item.Image" class="image-td" alt="..." /></td>
        <td>{{ item.Content }}</td>
        <td>{{ item.Author }}</td>
        <td>
          <div class="container-icons">
            <img
              class="icons-edit"
              src="/src/assets/icons/edit.svg"
              alt=""
              @click="EditPage(item.id)"
            />
            <img
              class="icons-delete"
              src="/src/assets/icons/delete.svg"
              alt="Delete"
              @click="deletePost(item.id)"
            />
          </div>
        </td>
      </tr>
      <tr v-for="item in listPost" :key="item.id">
        <td class="chill">
          <p>SubTitle: {{ item.SubTitle }}</p>
          <p>Author: {{ item.Author }}</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.list-container {
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
}
.container-icons {
  display: flex;
}
.icons-edit {
  width: 22px;
  cursor: pointer;
}
.icons-delete {
  width: 22px;
  margin-left: 10px;
  cursor: pointer;
}

.icons-edit:hover {
  width: 22px;
  cursor: pointer;
}
.icons-delete:hover {
  width: 22px;
  margin-left: 10px;
  cursor: pointer;
}
.image-td {
  width: 150px;
}
</style>
