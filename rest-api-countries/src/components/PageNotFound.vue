<template>
  <div class="page-not-found">
    <h2 class="page-not-found__title">Page Not Found</h2>
    <lottie-animation class="page-not-found__anim"
      ref="anim"
      :animationData="require('@/assets/images/lf20_c8szgzpw.json')"
      :loop="false"
      :speed="1.5"
    />
  </div>
</template>

<script>
import LottieAnimation from "lottie-web-vue";

export default {
  name: "PageNotFound",
  data() {
    return {};
  },
  components: {
    LottieAnimation,
  },
};
</script>
