<template>
  <Header />
  <el-main>
    <el-container>
      <router-view></router-view>
    </el-container>
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
