/*
 * @Author: zhangjian
 * @Date: 2021-11-09 09:41:16
 * @LastEditTime: 2021-11-29 10:37:17
 * @LastEditors: zhangjian
 * @Description: 描述
 */
import { defineComponent, reactive } from "vue";
import VueForm from "@lljj/vue3-form-element";
import { OneFormData } from "@/types/index";

export default defineComponent({
  name: "json_schema_form",
  components: {
    VueForm,
  },
  setup() {
    const state = reactive({
      formData: {
        firstName: "Jun",
      },
      schema: {
        title: "测试注册表单",
        description: "A simple form example.",
        type: "object",
        properties: {
          firstName: {
            type: "string",
            title: "First name",
            default: "Jun",
          },
          lastName: {
            type: "string",
            title: "Last name",
            default: "",
          },
          age: {
            type: "number",
            title: "年龄",
            default: "25",
          },
        },
      },
      uiSchema: {
        "ui:description":
          "简单表单例子（这里通过UiSchema覆盖了默认description描述配置）",
        firstName: {
          "ui:title": "名字",
          "ui:description": "比如：李白姓李、孙尚香姓孙、马可波罗姓马可波",
          "ui:emptyValue": "",
          "ui:options": {
            placeholder: "请输入你的姓",
            attrs: {
              autofocus: true,
            },
          },
        },
        lastName: {
          "ui:title": "名称",
          "ui:options": {
            placeholder: "请输入你的名称",
          },
        },
      },
    });

    const handlerSubmit = (formData: OneFormData) => {
      console.log("formData:", formData);
    };

    return () => {
      return (
        <div class="m-5">
          <vue-form
            v-model={state.formData}
            schema={state.schema}
            ui-schema={state.uiSchema}
            {...{ onSubmit: handlerSubmit }}
          ></vue-form>
        </div>
      );
    };
  },
});
