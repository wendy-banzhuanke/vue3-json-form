/*
 * @Author: zhangjian
 * @Date: 2021-10-08 16:53:08
 * @LastEditTime: 2021-11-03 16:51:12
 * @LastEditors: zhangjian
 * @Description: 描述
 */
import { defineComponent, PropType, renderSlot } from "vue";
import { TabItem } from "@/types/index";
import style from "./tab.module.scss";

/**
 * tab页签，可删除|可新增（带加号）配置项|可拖动|可右击
 */
export default defineComponent({
  name: "tab-comp",
  props: {
    tabs: {
      type: Array as PropType<TabItem[]>,
      default: () => []
    },
    addible: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    modelValue: {
      type: [String, Number],
      default: 0
    }
  },
  emits: ["addTab", "update:modelValue", "removeTab"],
  setup(_, ctx) {
    const { emit, slots } = ctx;
    /**
     * @description: 切换tab时触发该点击事件
     * @param {*} tab 点击时的tab对象
     * @return {*}
     */
    const onChangeTabHandler = (tab: TabItem) => {
      emit("update:modelValue", tab.id);
    };

    /**
     * @description: 添加新tab时触发该事件，并向父组件抛添加事件
     * @param {*}
     * @return {*}
     */
    const onAddTabHandler = () => {
      emit("addTab");
    };

    /**
     * @description: 删除tab时触发该事件，并向父组件抛删除事件
     * @param {*}
     * @return {*}
     */
    const onRemoveTabHandler = (item: TabItem, index: number, event: Event) => {
      event.stopPropagation();
      if (_.tabs.length === 1) {
        alert("只有一个tabs, 不允许删除");
      } else {
        // 其他部分添加自己的代码
        emit("removeTab", { ...item, index });
      }
    };

    console.log("slots.panel=asdsd===", slots.default, ctx);

    return () => {
      /**
       * 添加按钮
       */
      const newButton = _.addible ? (
        <div
          class={[style.w_tab_item, style.w_tab_item_button]}
          onClick={onAddTabHandler}
        >
          +
        </div>
      ) : null;

      return (
        <div class={style.w_tab_comp}>
          <div class={style.w_tab}>
            <div class={style.w_tab_wrap}>
              {_.tabs.map((item: TabItem, index: number) => {
                return (
                  <div
                    key={item.id}
                    class={[
                      style.w_tab_item,
                      item.id === _.modelValue ? style.active : ""
                    ]}
                    onClick={() => onChangeTabHandler(item)}
                  >
                    <span class={style.w_tab_item_name}>{item.tabName}</span>
                    <i
                      class={style.w_tab_item_clear}
                      onClick={event => onRemoveTabHandler(item, index, event)}
                    >
                      +
                    </i>
                  </div>
                );
              })}
            </div>
            {newButton}
            <div class={style.w_line}></div>
          </div>
          <div class={style.w_tab_panel}>
            {_.tabs.map((item: TabItem) => {
              return (
                <div
                  key={item.id}
                  class={[
                    item.id === _.modelValue
                      ? style.panel_show
                      : style.panel_hidden
                  ]}
                >
                  {slots.panel !== undefined ? renderSlot(slots, "panel") : ""}
                </div>
              );
            })}
          </div>
        </div>
      );
    };
  }
});
