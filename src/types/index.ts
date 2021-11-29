/*
 * @Author: zhangjian
 * @Date: 2021-11-01 17:14:09
 * @LastEditTime: 2021-11-29 10:19:21
 * @LastEditors: zhangjian
 * @Description: 描述
 */
import Monaco from "monaco-editor";
export declare interface TabItem {
  id: number;
  tabName: string;
  model?: Monaco.editor.ITextModel | null;
}
export declare interface ToJSON {
  [propName: string]: string;
}

export declare interface OneFormData {
  [propName: string]: string;
}

export declare interface DragItemData {
  [propName: string]: string;
}

export declare interface ComputedDragOption {
  animation: number;
  group: string;
  disabled: boolean;
  ghostClass: string;
}
