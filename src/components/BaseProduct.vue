<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const todetailPage = (id) => {
  router.push(`/detail/${id}`);
};

const props = defineProps({
  listPost: {
    title: Array,
    default: [],
  },
});
</script>

<template>
  <div
    class="col"
    v-for="item in listPost"
    :key="item.id"
    @click="todetailPage(item.id)"
  >
    <div class="card">
      <img
        :src="item.Image ? item.Image : '/src/assets/images/product1.png'"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <p class="color-gray">
          BY
          <strong style="color: black; font-size: 16px; font-weight: 400">{{
            item.Author
          }}</strong>
          IN
          <strong style="color: black; font-size: 16px; font-weight: 400"
            >DESIGN PROCESS</strong
          >
        </p>
        <h5 class="card-title">
          {{ item.Title }}
        </h5>
        <p class="card-text">
          {{ item.SubTitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.color-textCart {
  display: flex;
  color: var(--text);
}
.sub-text {
  color: var(--black);
  margin: 0 10px 0 10px;
}
.card-img-top {
  height: 320px;
}
.card {
  height: 100%;
}
</style>
