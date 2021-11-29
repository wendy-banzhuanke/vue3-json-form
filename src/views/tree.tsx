/*
 * @Author: zhangjian
 * @Date: 2021-11-08 14:41:37
 * @LastEditTime: 2021-11-29 10:41:04
 * @LastEditors: zhangjian
 * @Description: 描述
 */

import { defineComponent } from "vue";
import TreeComp from "@/components/Tree/tree";

export default defineComponent({
  setup() {
    // const data = reactive({
    //   demoList: [
    //     {
    //       id: "1",
    //       name: "tree-name",
    //       children: [
    //         {
    //           id: "1_1",
    //           name: "tree-name-1-1",
    //         },
    //       ],
    //     },
    //   ],
    // });

    return () => {
      return <TreeComp />;
    };
  },
});
