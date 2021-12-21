<template>
  <div class="header">
    <div class="container">
      <div
        class="header__wrapper d-flex align-items-center justify-space-between"
      >
        <h1 class="header__title">{{ appTitle }}</h1>
        <a
          href="javascript:void(0)"
          @click.prevent="switchToDarkMode"
          class="header__darkmode d-flex align-items-center"
        >
          <svg
            v-if="!isDarkModeActive"
            xmlns="http://www.w3.org/2000/svg"
            class="header__darkmode-icon"
            viewBox="0 0 512 512"
          >
            <path
              d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="header__darkmode-icon"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
            />
            <circle
              cx="256"
              cy="256"
              r="80"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
            />
          </svg>
          <span>{{isDarkModeActive ? 'Light' : 'Dark'}} Mode</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      isDarkModeActive: false,
    };
  },
  methods: {
    switchToDarkMode() {
      this.isDarkModeActive = !this.isDarkModeActive;
      document.body.classList.toggle("dark-theme");
    }
  },
  props: ["appTitle"],
};
</script>

<style>
.header {
  padding: 24px 0;
  background-color: var(--bg-element);
  box-shadow: rgba(0, 0, 0, 0.14) 0px -1px 8px;
}
.header__title {
  font-size: 24px;
}
.header__darkmode {
  font-size: 16px;
  font-weight: 700;
}
.header__darkmode-icon {
  width: 20px;
  margin-right: 8px;
}
</style>
