/*
 * @Author: zhangjian
 * @Date: 2021-11-02 14:32:50
 * @LastEditTime: 2021-11-29 11:24:17
 * @LastEditors: zhangjian
 * @Description: 描述
 */
import { defineComponent, reactive, watch } from "vue";
import * as Monaco from "monaco-editor";
// import { TabItem } from "@/types/index";
import style from "@/assets/styles/module/code.module.scss";
import monacoStyles from "@/components/monaco.module.scss";
// import useMonaco from "@/hooks/useMonaco";
import TabComp from "@/components/Tab/Tab";
import MonacoComp from "@/components/MonacoEditor";

// interface SchemaFIeldProp {
//   [propName: string]: string;
// }
// interface SchemaFieldObj {
//   data: SchemaFIeldProp;
// }

export default defineComponent({
  name: "code-page",
  setup() {
    const data = reactive({
      active: 1,
      tabs: [
        {
          id: 1,
          tabName: "12312",
          model: null,
        },
        {
          id: 2,
          tabName: "123qwe12",
          model: null,
        },
      ],
      currentModel: null as Monaco.editor.ITextModel | null,
      schema: "javascript",
    });

    // const monacoEditor = ref(null);

    // const { stateGlobal } = useMonaco(ctx);

    /**
     * Monaco实例被创建
     * @param instance
     */
    // const onEditorWillMount = (
    //   instance: Monaco.editor.IStandaloneCodeEditor
    // ) => {
    //   console.log("instance:", instance);

    //   // data.tabs.map((item: TabItem) => {
    //   //   if (data.active === item.id) {
    //   //     item.model = instance.getModel();
    //   //   } else {
    //   //     item.model = Monaco.editor.createModel(
    //   //       `${item.id}---2222`,
    //   //       "javascript"
    //   //     );
    //   //   }
    //   //   return item;
    //   // });
    //   // if (monacoInstance.value) {
    //   //   console.log("monacoInstance===", monacoInstance.value);
    //   // }
    //   // changeModel();
    // };

    // const onChangeCodeHandler = ({ value }: { value: string }) => {
    //   // data.tabs.map((item: TabItem) => {
    //   //   if (data.active === item.id) {
    //   //     item.model = modelInstance.getModel();
    //   //     console.log("item.model:", value, item.model);
    //   //   }
    //   //   return item;
    //   // });
    //   console.log("onChangeCodeHandler: ", value);
    // };

    watch(
      () => data.active,
      (newValue, oldValue) => {
        if (newValue !== oldValue) {
          console.log("newValue:", newValue, "oldValue:", oldValue);

          // changeModel();
        }
      },
      {
        immediate: false,
      }
    );

    const onAddTabHandler = () => {
      data.tabs.push({
        id: Date.now(),
        tabName: "new Tab",
        model: null,
      });
    };

    function handleCodeChange(
      filed: "schema" | "data" | "uiSchema",
      value: string
    ) {
      try {
        const json = JSON.parse(value);
        data[filed] = json;
        data[`${filed}Code`] = value;
      } catch (err) {
        // some thing
      }
    }

    const handleSchemaChange = (v: string) => handleCodeChange("schema", v);

    return () => {
      return (
        <div class={style.code_layout}>
          <div class={style.code_layout_left}>
            <div class={style.left_bar}></div>
            <div class={style.left_line}></div>
            <div class={style.left_content}>left</div>
          </div>
          <div class={style.code_layout_right}>
            <TabComp
              v-model={data.active}
              tabs={data.tabs}
              // v-slots={slots}
              addible={true}
              {...{ onAddTab: onAddTabHandler }}
            />
            <MonacoComp
              code={data.schema}
              class={monacoStyles.code_panel}
              onChange={handleSchemaChange}
              title="Schema"
            />
          </div>
        </div>
      );
    };
  },
});
