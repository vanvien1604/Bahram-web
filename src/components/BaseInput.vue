<script setup>
import { computed } from "vue";

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  title: String,
  placeholder: String,
  modelValue: String,
});

const innerValue = computed({
  get: () => props.modelValue,
  set: (value) => emits("update:modelValue", value),
});
</script>

<template>
  <div class="input-mg mb-3">
    <label
      for="formGroupExampleInput"
      class="form-label"
      style="font-weight: bold"
      >{{ title }}</label
    >
    <input
      v-model="innerValue"
      type="text"
      class="form-control"
      :placeholder="placeholder"
    />
  </div>
</template>

<style scoped>
.input-mg {
  margin: 32px 0 32px 0;
}
</style>
