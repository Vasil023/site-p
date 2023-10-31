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
    path: "/faq",
    name: "faq",
    component: Question,
  },
  {
    path: "/nos-tarifs",
    name: "NosTarifs",
    component: NosTarifs,
  },
  {
    path: "/audit",
    name: "TwoForm",
    component: TwoForm,
  },
  {
    path: "/a-propos-de-nous",
    name: "Page1",
    component: Page1,
  },
  {
    path: "/nos-services",
    name: "Page2",
    component: Page2,
  },
  {
    path: "/pré-relance-commerciale",
    name: "Page21",
    component: Page21,
  },
  {
    path: "/recouvrement-amiable",
    name: "Page22",
    component: Page22,
  },
  {
    path: "/recouvrement-judiciaire",
    name: "Page23",
    component: Page23,
  },
  {
    path: "/médiation",
    name: "Page24",
    component: Page24,
  },
  {
    path: "/gestion-des-défaillances",
    name: "Page25",
    component: Page25,
  },
  {
    path: "/audit-conseils",
    name: "Page26",
    component: Page26,
  },
  {
    path: "/créances-à-l'international",
    name: "Page27",
    component: Page27,
  },
  {
    path: "/Formation",
    name: "Page28",
    component: Page28,
  },
  {
    path: "/offres-d’emploi",
    name: "Page7",
    component: Page7,
  },
  {
    path: "/rse",
    name: "Page4",
    component: Page4,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
