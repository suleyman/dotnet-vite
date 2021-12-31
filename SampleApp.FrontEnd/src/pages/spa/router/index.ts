import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import List from "@/pages/spa/views/list.vue";

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
];

export const router = createRouter({
  history: createWebHistory("/Home/Spa"),
  routes,
});
