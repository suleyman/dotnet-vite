import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import List from "@/pages/spa/views/list.vue";
import Detail from "@/pages/spa/views/detail.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/list",
  },
  {
    path: "/list",
    name: "List",
    component: List,
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
  },
];

export const router = createRouter({
  history: createWebHistory("/Home/Spa"),
  routes,
});
