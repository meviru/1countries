<template>
  <div id="app" role="main">
    <header-component :appTitle="appTitle"></header-component>
    <div class="page-wrapper">
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/Header.vue";

export default {
  name: "App",
  data() {
    return {
      appTitle: "Where in the world?",
    };
  },
  components: {
    HeaderComponent,
  },
};
</script>

<style>
@import url("./assets/css/base.css");
</style>
