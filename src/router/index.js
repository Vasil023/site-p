import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/home-page.vue";
import Question from "@/pages/questions-page.vue";
import NosTarifs from "@/pages/nos-tarifs.vue"
import TwoForm from "@/pages/two-form.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/questions",
    name: "Question",
    component: Question,
  },
  {
    path: "/nos-tarifs",
    name: "NosTarifs",
    component: NosTarifs,
  },
  {
    path: "/form",
    name: "TwoForm",
    component: TwoForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
