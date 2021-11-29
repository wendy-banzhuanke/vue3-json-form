/*
 * @Author: zhangjian
 * @Date: 2021-11-05 09:10:07
 * @LastEditTime: 2021-11-29 10:00:36
 * @LastEditors: zhangjian
 * @Description: Monaco编辑器
 */

import { reactive } from "vue";

// monaco实例
const stateGlobal = reactive({
  /**默认配置 */
  defaultOptions: {
    readOnly: false, // 只读模式
    fontSize: 18, // 字体大小
    parameterHints: {
      //参数提示
      cycle: false,
    },
    formatOnPaste: true, // 格式化
    formatOnType: true, // 类型格式
  },
});

export default function useMonaco() {
  // ctx: SetupContext<any[]> | SetupContext<EmitsOptions>
  return {
    stateGlobal,
  };
}
