<template>
  <button
    ref="_ref"
    @click="handleClick"
    class="pk-button"
    :class="classes"
    :disabled="disabled"
    :type="nativeType"
    :size="size"
  >
    <i class="pk-icon-sync" v-if="loading" />
    <i :class="icon" v-if="!loading && icon"></i>
    <slot v-if="$slots.default"></slot>
  </button>
</template>
<script lang="ts" setup>
import { defineComponent, ref, computed } from "vue";
import { buttonProps, preCls } from "./button";
const emit = defineEmits(["click"]);
const props = defineProps(buttonProps);
defineOptions({
  name: "Button",
});
let { type, size, loading, disabled } = props;

// 将此时的点击事件传递出去
const handleClick = (evt: MouseEvent) => {
  if (loading) { 
    return;
  }
  emit("click", evt);
};
const classes = computed(() => {
  
  return {
    'is-loading': loading,
    'is-disabled': disabled,
    [`${preCls}-${type}`]: type,
    [`${preCls}-${size}`]: size,
  };
});
</script>

<style lang="scss" scoped>
@import "../style/button.scss";
</style>
