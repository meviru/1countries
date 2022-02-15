import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./components/router/index";
import Toast from "vue-toastification";

createApp(App).use(router).use(ElementPlus).use(Toast).mount("#app");
