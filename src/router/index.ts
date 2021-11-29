/*
 * @Author: zhangjian
 * @Date: 2021-05-17 15:31:52
 * @LastEditTime: 2021-11-12 11:07:14
 * @LastEditors: zhangjian
 * @Description: 描述
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TailwindPage from "@/views/tailwind";
import CssinjsPage from "@/views/cssinjs";
import MonacoPage from "@/views/monaco";
import TabPage from "@/views/tab";
import CodePage from "@/views/code";
import TreePage from "@/views/tree";
import JsonSchemaForm from "@/views/json_schema_form";
import GeneratePage from "@/views/generate";
import GenerateDemoPage from "@/views/generate-demo.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: TailwindPage,
  },
  {
    path: "/tailwind",
    component: TailwindPage,
  },
  {
    path: "/cssinjs",
    component: CssinjsPage,
  },
  {
    path: "/monaco",
    component: MonacoPage,
  },
  {
    path: "/tab",
    component: TabPage,
  },
  {
    path: "/code",
    component: CodePage,
  },
  {
    path: "/tree",
    component: TreePage,
  },
  {
    path: "/jsonpage1",
    component: JsonSchemaForm,
  },
  {
    path: "/generate",
    component: GeneratePage,
  },
  {
    path: "/generate2",
    component: GenerateDemoPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
