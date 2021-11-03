/*
 * @Author: zhangjian
 * @Date: 2021-10-09 09:33:29
 * @LastEditTime: 2021-11-03 16:42:12
 * @LastEditors: zhangjian
 * @Description: 描述
 */
import { defineComponent, reactive, watch } from "vue";
import Tab from "@/components/Tab/Tab";
import { TabItem } from "@/types";

export default defineComponent({
  name: "tab-page",
  components: {
    Tab
  },
  setup() {
    const data = reactive({
      tabs: [
        { id: 1, tabName: "标签一" },
        { id: 2, tabName: "标签二" },
        { id: 3, tabName: "标签三" },
        { id: 4, tabName: "标签四" }
      ],
      active: 1
    });

    watch(
      () => data.active,
      (newValue, oldValue) => {
        console.log("newValue:", newValue, "oldValue:", oldValue);
      }
    );

    const onAddTabHandler = () => {
      data.tabs.push({
        id: Date.now(),
        tabName: "标签" + Date.now()
      });
    };

    const onRemoveTabHandler = ({
      id,
      index
    }: {
      id: number;
      index: number;
    }) => {
      const activeIndex = data.tabs.findIndex(
        (tab: TabItem) => tab.id === data.active
      );
      data.tabs = data.tabs.filter(tab => tab.id !== id);

      if (index === activeIndex && data.tabs.length) {
        const gtData = data.tabs[index] || data.tabs[index - 1];
        data.active = gtData.id;
      }
    };

    return () => {
      return (
        <Tab
          v-model={data.active}
          tabs={data.tabs}
          addible={true}
          v-slots={{
            default: () => <div>slots使用方式1</div>,
            panel: () => <span>header1</span>
          }}
          {...{ onAddTab: onAddTabHandler, onRemoveTab: onRemoveTabHandler }}
        />
      );
    };
  }
});
