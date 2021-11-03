/*
 * @Author: zhangjian
 * @Date: 2021-11-01 17:14:09
 * @LastEditTime: 2021-11-03 16:47:22
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
