/*
 * @Author: zhangjian
 * @Date: 2021-11-08 14:39:16
 * @LastEditTime: 2021-11-29 10:38:44
 * @LastEditors: zhangjian
 * @Description: tree组件
 */
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    tree: {
      type: Array,
      default: () => [],
    },
  },
  setup(_) {
    return () => {
      return <div>dsfsdf--{_.tree}</div>;
    };
  },
});
