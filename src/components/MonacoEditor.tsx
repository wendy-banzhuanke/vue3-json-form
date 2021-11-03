/*
 * @Author: zhangjian
 * @Date: 2021-07-09 10:51:51
 * @LastEditTime: 2021-11-03 17:00:37
 * @LastEditors: zhangjian
 * @Description: 描述
 */
import { defineComponent, onMounted, shallowRef, ref, PropType } from "vue";
import * as Monaco from "monaco-editor";

export default defineComponent({
  name: "monaco-editor",
  props: {
    width: {
      type: String,
      default: "100vw"
    },
    height: {
      type: String,
      default: "100vh"
    },
    /**
     * ['abap', 'apex', 'azcli', 'bat', 'bicep', 'cameligo', 'clojure', 'coffee', 'cpp', 'csharp', 'csp', 'css', 'dart', 'dockerfile', 'ecl', 'elixir', 'fsharp', 'go', 'graphql', 'handlebars', 'hcl', 'html', 'ini', 'java', 'javascript', 'json', 'julia', 'kotlin', 'less', 'lexon', 'liquid', 'lua', 'm3', 'markdown', 'mips', 'msdax', 'mysql', 'objective-c', 'pascal', 'pascaligo', 'perl', 'pgsql', 'php', 'postiats', 'powerquery', 'powershell', 'pug', 'python', 'qsharp', 'r', 'razor', 'redis', 'redshift', 'restructuredtext', 'ruby', 'rust', 'sb', 'scala', 'scheme', 'scss', 'shell', 'solidity', 'sophia', 'sparql', 'sql', 'st', 'swift', 'systemverilog', 'tcl', 'twig', 'typescript', 'vb', 'xml', 'yaml']
     */
    language: {
      type: String,
      default: "javascript"
    },
    theme: {
      type: String,
      default: "vs-dark"
    },
    schema: {
      type: String,
      default: ""
    },
    model: {
      type: Object as PropType<Monaco.editor.ITextModel | null>,
      default: null
    }
  },
  emits: ["init", "change"],
  setup(_, { emit }) {
    const editorRef = shallowRef();
    const monacoDom = ref({} as HTMLElement);

    onMounted(() => {
      const meDom: HTMLElement = document.getElementById(
        "monaco-editor"
      ) as HTMLElement;

      if (meDom) {
        meDom.style.width = _.width;
        meDom.style.height = _.height;
      }

      const model = !_.model
        ? Monaco.editor.createModel("hahahaha", _.language)
        : _.model;

      const _monaco = Monaco.editor.create(monacoDom.value, {
        model: model,
        // value: _.schema,
        // language: _.language,
        automaticLayout: true,
        theme: _.theme
      });

      editorRef.value = _monaco;

      emit("init", editorRef.value);

      // 编辑器内容发生改变时触发
      editorRef.value.onDidChangeModelContent(
        (e: Monaco.editor.IModelContentChangedEvent) => {
          console.log("e:", e);

          emit("change", {
            modelInstance: editorRef.value,
            value: editorRef.value.getValue()
          });
        }
      );
    });

    return () => {
      return (
        <div
          ref={monacoDom}
          id="monaco-editor"
          style={{ width: `${_.width}px`, height: `${_.height}px` }}
          class="h-full"
        ></div>
      );
    };
  }
});
