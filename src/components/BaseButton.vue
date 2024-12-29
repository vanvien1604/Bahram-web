<script setup>
const props = defineProps({
  title: String,
  variant: String,
});
</script>

<template>
  <button class="base-button">
    {{ title }}
  </button>
</template>

<style scoped>
.base-button {
  width: 120px;
  height: 49.41px;
  border-radius: 10px;
  background-color: var(--Primary);
  border: 0px;
}
.base-button:hover {
  width: 120px;
  height: 49.41px;
  border-radius: 10px;
  background-color: var(--Primary-2);
  border: 0px;
}
</style>