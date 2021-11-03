/*
 * @Author: zhangjian
 * @Date: 2021-05-17 15:31:52
 * @LastEditTime: 2021-11-02 14:33:28
 * @LastEditors: zhangjian
 * @Description: 描述
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TailwindPage from "@/views/tailwind";
import CssinjsPage from "@/views/cssinjs";
import MonacoPage from "@/views/monaco";
import TabPage from "@/views/tab";
import CodePage from "@/views/code";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: TailwindPage
  },
  {
    path: "/tailwind",
    component: TailwindPage
  },
  {
    path: "/cssinjs",
    component: CssinjsPage
  },
  {
    path: "/monaco",
    component: MonacoPage
  },
  {
    path: "/tab",
    component: TabPage
  },
  {
    path: "/code",
    component: CodePage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
