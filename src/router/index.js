import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/home-page.vue";
import Question from "@/pages/questions-page.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
