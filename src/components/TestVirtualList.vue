<template>
  <PkButton @click="addList">测试添加数据</PkButton>
  <div v-for="item in dataList" :key="item">
    <p>{{ item.name }}}</p>
    <p>{{ item.id }}</p>
    <div>
      <img :src="item.src" />
    </div>
  </div>
</template>
<script setup>
import PkButton from './Button/index.vue'
import { reactive, ref } from "vue";
import axios from "axios";
const instance = axios.create({
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
const dataList = ref([]);
const addList = () => {
    instance
    .get("http://127.0.0.1:4523/m1/2154243-0-default/%08testVirtualList")
      .then((res) => {
      dataList.value = res.data;
    });
};
</script>

<!-- <script>
import PkButton from './Button/index.vue'
import axios from "axios";
import { reactive, ref } from "vue";
export default {
  name:'TestVirtualList',
  setup() {
    const instance = axios.create({
      timeout: 1000,
      headers: { "X-Custom-Header": "foobar" },
    });
    const dataList = ref([]);
    const addList = async () => {
      await instance
        .get("http://127.0.0.1:4523/m1/2154243-0-default/testVirtualList")
        .then((res) => {
          dataList.value = res;
        });
    };
    return {
      dataList,
      addList
    }
  },
};
</script> -->
