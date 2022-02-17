<template>
  <el-header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#444"
      text-color="#fff"
      router="true"
      active-text-color="#fff">
      <el-menu-item index="1" route="/">Home</el-menu-item>
      <el-menu-item index="2" route="/person/create">Add Person</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Header",
  data() {
    return {
      activeIndex: ref("1"),
    };
  },
};
</script>
