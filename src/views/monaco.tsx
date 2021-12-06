/*
 * @Author: zhangjian
 * @Date: 2021-10-08 10:25:55
 * @LastEditTime: 2021-11-29 16:53:02
 * @LastEditors: zhangjian
 * @Description: 描述
 */
import { defineComponent, reactive } from "vue";
import MonacoEditor from "@/components/MonacoEditor";
import styles from "@/components/monaco.module.scss";

// const toJSON = (data: string) => {
//   return JSON.parse(JSON.stringify(data));
// };

interface SchemaFieldType {
  [propName: string]: string;
}

export default defineComponent({
  setup() {
    const data: { schema: string } = reactive({
      schema: "function test(aaa) {console.log('哈哈哈')}",
    });

    // const onChangeHandler = (e: string) => {
    //   data.schema = toJSON(e);
    // };

    function handleCodeChange(
      filed: "schema" | "data" | "uiSchema",
      value: string
    ) {
      try {
        const json = JSON.parse(value);
        data[filed] = json;
        (data as SchemaFieldType)[`${filed}Code`] = value;
      } catch (err) {
        // some thing
      }
    }

    const handleSchemaChange = (v: string) => handleCodeChange("schema", v);

    return () => {
      return (
        <div class="h-full">
          <div class="mr-10 inline-block">
            <MonacoEditor
              code={data.schema}
              class={styles.code_panel}
              onChange={() => handleSchemaChange}
              title="Schema"
            />
          </div>
        </div>
      );
    };
  },
});
