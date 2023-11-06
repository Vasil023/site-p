import { createApp } from "vue";
import vSelect from "vue-select";
import { VueHeadMixin, createHead } from '@unhead/vue'
import App from "./App.vue";
import router from "./router";

import "./assets/scss/main.scss"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

import 'vue-select/dist/vue-select.css';

const app = createApp(App)

const head = createHead()

app.mixin(VueHeadMixin)

app.use(router)
app.component("v-select", vSelect);
app.use(head)
app.mount("#app")
