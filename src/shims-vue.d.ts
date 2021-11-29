/*
 * @Author: zhangjian
 * @Date: 2020-12-15 23:16:39
 * @LastEditTime: 2021-11-29 11:47:09
 * @LastEditors: zhangjian
 * @Description: 描述
 */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
