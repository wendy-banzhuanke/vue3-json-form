/*
 * @Author: zhangjian
 * @Date: 2021-11-17 10:30:35
 * @LastEditTime: 2021-11-19 14:31:19
 * @LastEditors: zhangjian
 * @Description: 描述
 */

import { ElInput, ElCheckbox, ElRadio, ElButton } from "element-plus";

export const componentShowList = [
  {
    id: 1,
    groupName: "布局组件",
    componentList: [
      {
        title: "布局组件1",
        id: 11,
        comp: undefined,
        properties: {},
      },
      {
        title: "布局组件2",
        id: 12,
        comp: undefined,
        properties: {},
      },
    ],
  },
  {
    id: 2,
    groupName: "表单组件",
    componentList: [
      {
        title: "输入框",
        comp: ElInput,
        id: 21,
        type: "ElInput",
        properties: {
          placeholder: "请输入内容",
        },
      },
      {
        title: "复选框",
        comp: ElCheckbox,
        type: "ElCheckbox",
        id: 22,
        properties: {},
      },
      {
        title: "单选框",
        comp: ElRadio,
        type: "ElRadio",
        id: 23,
      },
      {
        title: "按钮(default)",
        comp: ElButton,
        type: "ElButton",
        id: 24,
        properties: {
          type: "default",
        },
        hasChild: true,
        childProps: {},
      },
      {
        title: "按钮(primary)",
        comp: ElButton,
        type: "ElButton",
        id: 25,
        properties: {
          type: "primary",
        },
        hasChild: true,
        childProps: {},
      },
    ],
  },
  {
    id: 3,
    groupName: "扩展组件",
    componentList: [
      {
        title: "扩展组件1",
        id: 31,
        comp: undefined,
      },
      {
        title: "扩展组件2",
        id: 32,
        comp: undefined,
      },
      {
        title: "扩展组件3",
        id: 33,
      },
      {
        title: "扩展组件4",
        id: 34,
        comp: undefined,
      },
      {
        title: "扩展组件5",
        id: 35,
        comp: undefined,
      },
    ],
  },
];
