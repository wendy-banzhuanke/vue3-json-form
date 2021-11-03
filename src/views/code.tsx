/*
 * @Author: zhangjian
 * @Date: 2021-11-02 14:32:50
 * @LastEditTime: 2021-11-03 16:50:48
 * @LastEditors: zhangjian
 * @Description: 描述
 */
import { defineComponent, reactive } from "vue";
import Monaco from "monaco-editor";
import { TabItem } from "@/types/index";
import style from "@/assets/styles/module/code.module.scss";
import TabComp from "@/components/Tab/Tab";
import MonacoComp from "@/components/MonacoEditor";

export default defineComponent({
  name: "code-page",
  setup() {
    const data = reactive({
      active: 2,
      tabs: [
        {
          id: 1,
          tabName: "12312",
          model: null
        },
        {
          id: 2,
          tabName: "123qwe12",
          model: null
        }
      ]
    });

    const onInitMount = (instance: Monaco.editor.IStandaloneCodeEditor) => {
      data.tabs.map((item: TabItem) => {
        if (data.active === item.id) {
          item.model = instance.getModel();
        }
      });
    };

    const onChangeCodeHandler = ({
      modelInstance
    }: {
      modelInstance: Monaco.editor.IStandaloneCodeEditor;
      value: string;
    }) => {
      data.tabs.map((item: TabItem) => {
        if (data.active === item.id) {
          item.model = modelInstance.getModel();
        }
        return item;
      });
    };

    const onAddTabHandler = () => {
      data.tabs.push({
        id: Date.now(),
        tabName: "new Tab",
        model: null
      });
    };

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
              model={data.tabs.find(item => item.id === data.active)?.model}
              {...{ onInit: onInitMount, onChange: onChangeCodeHandler }}
            />
          </div>
        </div>
      );
    };
  }
});
