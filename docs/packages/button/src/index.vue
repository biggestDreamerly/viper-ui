<template>
  <button class="my-button" @click="$emit('click', $event)" :class="getType()">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  type: String,
});
const getType = () => {
  console.log(props.type, "类型");
  return props?.type ?? "defalut";
};
</script>

<style scoped lang="less">
.primary {
  background: #1989fa;
}
.success {
  background: #07c160;
}
.danger {
  background: #ee0a24;
}
.my-button {
  position: relative;
  appearance: none;
  padding: 10px 20px;
  color: #fff;
  outline: none;
  cursor: pointer;
  border: none;
  &:active {
    background: rgb(193, 195, 197);
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
}
</style>
