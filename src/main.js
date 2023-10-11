import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/scss/main.scss"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"



createApp(App).use(router).mount("#app");
