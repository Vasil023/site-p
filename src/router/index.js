import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/home-page.vue";
import Question from "@/pages/questions-page.vue";
import NosTarifs from "@/pages/nos-tarifs.vue";
import TwoForm from "@/pages/two-form.vue";
import Page1 from "@/pages/page-1.vue";
import Page2 from "@/pages/page-2.vue";
import Page21 from "@/pages/page-2.1.vue";
import Page22 from "@/pages/page-2.2.vue";
import Page23 from "@/pages/page-2.3.vue";
import Page24 from "@/pages/page-2.4.vue";
import Page25 from "@/pages/page-2.5.vue";
import Page26 from "@/pages/page-2.6.vue";
import Page27 from "@/pages/page-2.7.vue";
import Page28 from "@/pages/page-2.8.vue";
import Page7 from "@/pages/page-7.vue";
import Page4 from "@/pages/page-4.vue";

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
  {
    path: "/page-2-6",
    name: "Page26",
    component: Page26,
  },
  {
    path: "/page-2-7",
    name: "Page27",
    component: Page27,
  },
  {
    path: "/page-2-8",
    name: "Page28",
    component: Page28,
  },
  {
    path: "/page-7",
    name: "Page7",
    component: Page7,
  },
  {
    path: "/page-4",
    name: "Page4",
    component: Page4,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
