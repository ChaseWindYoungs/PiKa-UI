<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
// import PKButton from '@/components/Button'
import { ref} from "vue";
const test =(event: MouseEvent) => {
  console.log(event);
}
const refBtn = ref<HTMLElement | null>(null);

</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <div>
    <p>按钮风格</p>
    <PKButton ref="refBtn" @click="test">按钮</PKButton>
    <PKButton ref="refBtn" @click="test" type="primary">按钮</PKButton>
    <PKButton ref="refBtn" @click="test" type="success">按钮</PKButton>
    <PKButton ref="refBtn" @click="test" type="info">按钮</PKButton>
    <PKButton ref="refBtn" @click="test" type="warning">按钮</PKButton>
    <PKButton ref="refBtn" @click="test" type="danger">按钮</PKButton>
  </div>

  <div>
    <p>按钮尺寸</p>
    <PKButton ref="refBtn" @click="test" size='small' >按钮</PKButton>
    <PKButton ref="refBtn" @click="test" size='default' >按钮</PKButton>
    <PKButton ref="refBtn" @click="test" size='large' >按钮</PKButton>
  </div>
  <div>
    <p>按钮尺寸</p>
    <PKButton ref="refBtn" @click="test" loading >按钮</PKButton>
    <PKButton ref="refBtn" @click="test" type="danger" loading >按钮</PKButton>
  </div>
  <div>
    <p>禁止</p>
    <PKButton ref="refBtn" @click="test" :disabled="true">按钮</PKButton>
    <PKButton ref="refBtn" @click="test" type="danger" :disabled="true">按钮</PKButton>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
