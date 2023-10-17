import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/home-page.vue";
import Question from "@/pages/questions-page.vue";
import NosTarifs from "@/pages/nos-tarifs.vue"
import TwoForm from "@/pages/two-form.vue"
import Page1 from "@/pages/page-1.vue"
import Page2 from "@/pages/page-2.vue"
import Page21 from "@/pages/page-2.1.vue"
import Page22 from "@/pages/page-2.2.vue"
import Page23 from "@/pages/page-2.3.vue"
import Page24 from "@/pages/page-2.4.vue"
import Page25 from "@/pages/page-2.5.vue"

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
  {
    path: "/page-1",
    name: "Page1",
    component: Page1,
  },
  {
    path: "/page-2",
    name: "Page2",
    component: Page2,
  },
  {
    path: "/page-2-1",
    name: "Page21",
    component: Page21,
  },
  {
    path: "/page-2-2",
    name: "Page22",
    component: Page22,
  },
  {
    path: "/page-2-3",
    name: "Page23",
    component: Page23,
  },
  {
    path: "/page-2-4",
    name: "Page24",
    component: Page24,
  },
  {
    path: "/page-2-5",
    name: "Page25",
    component: Page25,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
