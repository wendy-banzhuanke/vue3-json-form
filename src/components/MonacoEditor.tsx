/*
 * @Author: zhangjian
 * @Date: 2021-07-09 10:51:51
 * @LastEditTime: 2021-11-29 18:07:43
 * @LastEditors: zhangjian
 * @Description: 描述
 */
/* eslint no-use-before-define: 0 */

import {
  defineComponent,
  ref,
  onMounted,
  watch,
  onBeforeUnmount,
  shallowRef,
} from "vue";

import * as Monaco from "monaco-editor";
import styles from "./monaco.module.scss";

import type { PropType } from "vue";

export default defineComponent({
  props: {
    code: {
      type: String as PropType<string>,
      required: true,
    },
    onChange: {
      type: Function as PropType<
        (value: string, event: Monaco.editor.IModelContentChangedEvent) => void
      >,
      // required: true,
    },
    title: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(_) {
    // must be shallowRef, if not, editor.getValue() won't work
    const editorRef = shallowRef();

    const containerRef = ref();

    let _subscription: Monaco.IDisposable | undefined;
    let preventTriggerChangeEvent = false;

    onMounted(() => {
      const editor = (editorRef.value = Monaco.editor.create(
        containerRef.value,
        {
          value: _.code as string,
          language: "json",
          formatOnPaste: true,
          tabSize: 2,
          minimap: {
            enabled: false,
          },
        }
      ));

      _subscription = editor.onDidChangeModelContent((event) => {
        console.log("--------->", preventTriggerChangeEvent);
        if (!preventTriggerChangeEvent) {
          (
            _.onChange as (
              value: string,
              event: Monaco.editor.IModelContentChangedEvent
            ) => void
          )(editor.getValue(), event);
        }
      });
    });

    onBeforeUnmount(() => {
      if (_subscription) _subscription.dispose();
    });

    watch(
      () => _.code,
      (v) => {
        const editor = editorRef.value;
        const model = editor.getModel();
        if (v !== model.getValue()) {
          editor.pushUndoStop();
          preventTriggerChangeEvent = true;
          // pushEditOperations says it expects a cursorComputer, but doesn't seem to need one.
          model.pushEditOperations(
            [],
            [
              {
                range: model.getFullModelRange(),
                text: v,
              },
            ]
          );
          editor.pushUndoStop();
          preventTriggerChangeEvent = false;
        }
        // if (v !== editorRef.value.getValue()) {
        //   editorRef.value.setValue(v)
        // }
      }
    );

    return () => {
      return (
        <div class={styles.container}>
          <div class={styles.title}>
            <span>{_.title}</span>
          </div>
          <div class={styles.code} ref={containerRef}></div>
        </div>
      );
    };
  },
});
