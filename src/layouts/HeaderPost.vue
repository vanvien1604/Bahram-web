<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import BaseButton from "../components/BaseButton.vue";

const router = useRouter();
const isMenuVisible = ref(false);

const toAddPage = () => {
  router.push("/add");
};

const toListPage = () => {
  router.push("/list");
};

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

watch(
  () => router.currentRoute.value.fullPath,
  () => {
    isMenuVisible.value = false;
  }
);
</script>



<template>
  <header class="header-container">
    <div class="navbar">
      <div class="logo-header">
        <a href="/"><img src="/src/assets/images/Group13.png" alt="" /></a>
      </div>
      <div class="link-navbar" :class="{ 'mobile-hidden': !isMenuVisible }">
        <a class="line-navbar" href="#">New</a>
        <a class="line-navbar" href="#">Topics</a>
        <a class="line-navbar" href="#" @click="toListPage">List Post</a>
        <BaseButton title="Create" @click="toAddPage" />
      </div>
      <div class="icons-header" @click="toggleMenu">
        <img src="/src/assets/icons/menu.svg" alt="menu" />
      </div>
    </div>
  </header>
</template>


<style scoped>
.header-container {
  width: 100%;
  height: 100px;
  background: #fff;
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar {
  width: 70%;
  height: 50px;
  display: flex;
  position: relative;
}

.link-navbar {
  display: flex;
  align-items: center;
  gap: 5px;
}

.line-navbar {
  color: var(--black);
  text-decoration-line: none;
  margin: 20px;
}

.line-navbar:hover {
  color: var(--pink);
}

.icons-header {
  width: 32px;
  height: 32px;
}

@media screen and (min-width: 768px) {
  .icons-header {
    display: none;
  }
  .link-navbar {
    display: flex;
    position: static;
    background: none;
    box-shadow: none;
    flex-direction: row;
  }
}

@media screen and (max-width: 768px) {
  .link-navbar {
    display: none;
    position: absolute;
    right: 0;
    top: 50px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 10px 20px;
    border-radius: 8px;
    flex-direction: column;
    z-index: 1000;
  }

  .link-navbar.mobile-hidden {
    display: none;
  }

  .link-navbar:not(.mobile-hidden) {
    display: flex;
  }
}
</style>
