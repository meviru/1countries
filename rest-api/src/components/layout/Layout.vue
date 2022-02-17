<template>
  <Header />
  <el-main>
    <router-view></router-view>
  </el-main>
</template>

<script>
import Header from "./header/Header";
export default {
  name: "Layout",
  components: {
    Header,
  },
};
</script>

<style></style>
