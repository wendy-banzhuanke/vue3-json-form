/*
 * @Author: zhangjian
 * @Date: 2021-10-08 10:25:55
 * @LastEditTime: 2021-11-03 16:50:28
 * @LastEditors: zhangjian
 * @Description: 描述
 */
import { defineComponent, reactive } from "vue";
import MonacoEditor from "@/components/MonacoEditor";

const toJSON = (data: string) => {
  return JSON.parse(JSON.stringify(data));
};

export default defineComponent({
  setup() {
    const data = reactive({
      schema: "function test(aaa) {console.log('哈哈哈')}"
    });

    const onChangeHandler = (e: string) => {
      data.schema = toJSON(e);
    };

    return () => {
      return (
        <div class="h-full">
          <div class="mr-10 inline-block">
            <MonacoEditor
              schema={toJSON(data.schema)}
              {...{ change: onChangeHandler }}
            />
          </div>
        </div>
      );
    };
  }
});
