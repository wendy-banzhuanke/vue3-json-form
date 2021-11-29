import { defineComponent, reactive } from "vue";
import {
  cardDataMock,
  Result,
  headerNavState,
  cardType,
} from "./tailwind_state";
import sensors from "sa-sdk-javascript";

interface HomeParams {
  avatarUrl?: string;
  logoUrl?: string;
  leftNavActive: number;
  cardData: Result;
}

export default defineComponent({
  mounted() {
    console.log("sensors==", sensors);
  },
  setup() {
    const _cardDataMock = cardDataMock();
    // 响应式状态
    const state = reactive<HomeParams>({
      avatarUrl:
        "https://wework.qpic.cn/wwhead/duc2TvpEgSQO4BpE0WZSZ4GCyiaqO0FlPJsbiaIgXBFQiapqaxy1ZIBShc0cMvU0V4NC5rHBLic3lVc/0",
      logoUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20140221%2F20140221021609-1672953379.jpg&refer=http%3A%2F%2Fpic.baike.soso.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623911320&t=3246405c3cdc7262373b73539502a0b2",
      leftNavActive: 0,
      cardData: _cardDataMock,
    });

    // onMounted(() => {
    //   console.log("sensors==", $sensor);
    // });

    const cardRender = () => {
      const _card = [];
      for (const item in state.cardData) {
        _card.push(
          <div>
            <h3 class="text-lg font-medium text-gray-800 pt-8 pb-6">{item}</h3>
            <ul class="flex flex-wrap">
              {state.cardData[item].map((c: cardType) => {
                return (
                  <li class="bg-white rounded mr-4 mb-4 px-4 py-5 min-w-245 cursor-pointer flex items-center shadow-sm hover:shadow-md">
                    <i
                      class={`w-10 h-10 inline-block rounded-full bg-${c.color}-500 mr-3`}
                    ></i>
                    {c.title}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
      return _card;
    };

    return () => {
      return (
        <div class="flex w-full h-screen">
          <nav class="w-15 bg-gray-700 flex flex-col items-center pt-5.5">
            <div class="rounded-full w-9 h-9 border-white border-2">
              <img class="rounded-full" src={state.avatarUrl} />
            </div>
            <ul class="w-full pt-5.5">
              {[0, 1, 3].map((item) => {
                return (
                  <li
                    class={`group h-11 pt-3 cursor-pointer ${
                      state.leftNavActive === item ? "bg-blue-600" : ""
                    } hover:bg-blue-600`}
                  >
                    <div
                      class={`w-5 h-5 my-0 mx-auto cursor-pointer ${
                        state.leftNavActive === item
                          ? "bg-white"
                          : "bg-gray-400"
                      } group-hover:bg-white`}
                    ></div>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div class="flex-1 bg-gray-100 flex flex-col h-full overflow-auto">
            <header class="flex justify-between h-16 shadow-sm items-center bg-white">
              <div class="flex items-center">
                <img class="w-42" src={state.logoUrl} />
                <span class="mr-5 text-gray-200">|</span>
                <p class="text-gray-800 text-lg">XXXXXX集团有限公司</p>
              </div>
              <ul class="flex">
                {headerNavState.map((item) => {
                  return (
                    <li class="group flex mr-10 items-center cursor-pointer">
                      <i class="w-3.5 h-3.5 mr-1 rounded-full border border-gray-300 group-hover:border-blue-500"></i>
                      <span class="text-gray-500 text-base group-hover:text-blue-500">
                        {item.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </header>
            <section class="px-10 h-full overflow-auto flex">
              <div class="flex-1">{cardRender()}</div>
              <div class="w-445 mt-20">
                {["待办", "消息"].map((item: string, index: number) => {
                  return (
                    <section
                      class={`bg-white rounded mb-3.5 p-5 ${
                        index === 0 ? "h-40" : "h-445"
                      }`}
                    >
                      <h3 class="text-lg text-gray-800 font-medium">{item}</h3>
                    </section>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      );
    };
  },
});
