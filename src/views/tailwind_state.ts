/* eslint-disable */

export type cardType = {
  color: string;
  title: string;
};

export interface Result {
  (value?: string): cardType[];
}

// 头部导航状态
export const headerNavState = [
  {
    icon: "",
    label: "个人中心",
    route: ""
  },
  {
    icon: "",
    label: "意见反馈",
    route: ""
  },
  {
    icon: "",
    label: "修改密码",
    route: ""
  },
  {
    icon: "",
    label: "退出",
    route: ""
  }
];

export const cardDataMock = () => {
  enum TypeEnum {
    FrequentlyUsedApp = "常用应用",
    AllApp = "全部应用",
    OtherApp = "其他"
  }
  const FrequentlyUsedCard: cardType[] = [
    { color: "red", title: "写日清" },
    { color: "blue", title: "写周清" },
    { color: "green", title: "写月清" },
    { color: "yellow", title: "开会" },
    { color: "blue", title: "会议决议" }
  ];
  const AllApp: cardType[] = [
    { color: "blue", title: "工作目标" },
    { color: "blue", title: "民主互评" },
    { color: "red", title: "客户满意" },
    { color: "blue", title: "行为规范" },
    { color: "yellow", title: "组织绩效" },
    { color: "green", title: "创新成果" },
    { color: "yellow", title: "团队贡献" }
  ];
  const OtherApp: cardType[] = [
    { color: "green", title: "我的组织" },
    { color: "yellow", title: "持续奋斗奖" },
    { color: "blue", title: "绩效考核" },
    { color: "green", title: "自定义" }
  ];
  const result = {} as Result;
  result[TypeEnum.FrequentlyUsedApp] = FrequentlyUsedCard;
  result[TypeEnum.AllApp] = AllApp;
  result[TypeEnum.OtherApp] = OtherApp;
  return result;
};
