/*
 * @Author: zhangjian
 * @Date: 2021-11-11 14:57:06
 * @LastEditTime: 2021-11-29 11:30:45
 * @LastEditors: zhangjian
 * @Description: 描述
 */
import { defineComponent, reactive } from "vue";
import DraggableComp from "vuedraggable";
import { ElInput } from "element-plus";
import { componentShowList } from "@/components/field/complist";
import { DragItemData } from "@/types/index";

export default defineComponent({
  name: "generate-view",
  components: {
    DraggableComp,
    // SchemaField,
  },
  setup() {
    const state = reactive({
      drag: false,
      draggableOne: [],
      draggableTwo: [],
      list1: [...componentShowList],
      list2: [] as Array<DragItemData>,
      currentDragSelected: undefined,
      editData: {},
      currentFormData: [] as Array<DragItemData>,
      genId: 1,
    });

    const onStartHandler = (e: CustomEvent) => {
      state.drag = true;
      console.log("e-start:", e);
    };

    const onChangeEditWrapHandler = (e: any) => {
      // CustomEvent
      // state.list2.push("el-input");
      state.currentFormData.push({
        ...JSON.parse(JSON.stringify(e.added.element)),
        key: `${e.added.element.type}_${new Date().getTime()}`,
      });

      // state.list2.map((item: DragItemData) => {
      //   if (!item.key && item) {
      //     console.log("item===", item.key);
      //     item.key = `${item.type}_${new Date().getTime()}`;
      //     item.value = "--";
      //   }
      //   return {
      //     ...item,
      //   };
      // });
    };

    const onAddEditWrapHandler = (e: CustomEvent) => {
      console.log("onAddEditWrapHandler======", e);

      // state.genId = state.genId + 1;
      // console.log("onAdd===========", e.item._underlying_vm_, e["item"]);
      // e.item._underlying_vm_.key = `${e.item._underlying_vm_.type}_${state.genId}`;
      // e.value = "";
      // // state.list2;
      // // state.list2.concat([...JSON.parse(JSON.stringify(_aaa))], {
      // //   ...JSON.parse(JSON.stringify(e.item._underlying_vm_)),
      // // });
      // state.list2.push({ ...e.item._underlying_vm_ });
    };

    const onEndHandler = () => {
      console.log("el-inpute-end: ", state.list2);
      state.drag = false;
    };

    /**点击拖拽面板某一个元素时触发 */
    const onClickDragHandler = (item: any) => {
      state.currentDragSelected = item.id;
    };

    const onClone = (origin: any) => {
      //这一步最关键，没处理好，后面会数据混乱

      //通过转成字符串，让他变成一个新对象，不然拖拽第二个组件将会和第一个组件一模一样，改变第一个组件第二个、第三个也会跟着变动。
      const data = origin; // JSON.parse(JSON.stringify({ ...origin } || {}));
      console.log("onClone====", data);
      data.item._underlying_vm_.key = parseInt(
        new Date().getMilliseconds() + "" + Math.ceil(Math.random() * 100000)
      ).toString(16);

      return JSON.stringify(data);
    };

    // watch(
    //   () => state.list2,
    //   (val, oldVal) => {
    //     // state.list2 = JSON.parse(JSON.stringify(val));
    //     // state.list2.map((item: DragItemData) => {
    //     //   if (!item.key) {
    //     //     console.log("item===", item.key);
    //     //     item.key = `${item.type}_${new Date().getTime()}`;
    //     //     item.value = "--";
    //     //   }
    //     //   return {
    //     //     ...item,
    //     //   };
    //     // });
    //   },
    //   {
    //     deep: true,
    //   }
    // );

    const fieldComp = (item: any) => {
      return (
        <div class="">
          {item.hasChild ? (
            <item.comp {...item.properties} v-model={item.value}>
              {item.title}
              {new Date().getTime()}
            </item.comp>
          ) : (
            <item.comp {...item.properties} v-model={item.value} />
          )}
        </div>
      );
    };

    return () => {
      return (
        <div class="flex flex-col h-full">
          <div class="flex-none h-30 bg-blue-100">
            header
            <component is={ElInput} />
          </div>
          <div class="flex-1 h-full overflow-auto flex">
            <div class="flex-none w-60 border-r border-solid border-indigo-50">
              <div class="flex flex-col p-5">
                {state.list1.map((item) => {
                  return (
                    <>
                      <h3 class="mt-5 text-gray-800">{item.groupName}</h3>
                      <draggable-comp
                        class="dragArea flex-1 flex flex-wrap justify-between"
                        v-model={item.componentList}
                        item-key={`item_${new Date().getTime()}`}
                        group={{ name: "people", pull: "clone", put: false }}
                        animation="300"
                        {...{
                          onStart: onStartHandler,
                          onEnd: onEndHandler,
                          onClone: onClone,
                        }}
                      >
                        {{
                          item: ({ element }: { element: any }) => (
                            <div
                              key={element.id}
                              class="bg-gray-100 text-gray-500 text-sm rounded-md text-center cursor-move w-24 h-10 mt-3 leading-10"
                            >
                              {element.title}
                              {/* <SchemaField
                                  {...{ props: element }}
                                ></SchemaField> */}
                            </div>
                          ),
                        }}
                      </draggable-comp>
                    </>
                  );
                })}
              </div>
            </div>
            <div class="flex-1">
              <draggable-comp
                class="dragArea h-full w-full"
                item-key="id"
                v-model={state.list2}
                group="people"
                animation="300"
                draggable=".card"
                {...{
                  onChange: onChangeEditWrapHandler,
                  onAdd: onAddEditWrapHandler,
                }}
              >
                {{
                  item: ({
                    element,
                    index,
                  }: {
                    element: any;
                    index: number;
                  }) => {
                    const _element = JSON.parse(JSON.stringify(element));
                    // const _a = state.currentFormData.find(
                    //   (obj) => obj === element
                    // );
                    return (
                      <div
                        class={[
                          "transition duration-500 ease-in-out card cursor-move m-5 p-5 border-gray-200 border-dashed border",
                          state.currentDragSelected === element.id
                            ? "border-purple-600"
                            : "",
                        ]}
                        {...{ onClick: () => onClickDragHandler(_element) }}
                      >
                        <h3 class="mb-3">
                          {_element.title}：{_element.key}: {index}
                        </h3>
                        <div>{fieldComp(element)}</div>
                      </div>
                    );
                  },
                }}
              </draggable-comp>
            </div>
            <div class="flex-none w-52 bg-green-50">data</div>
          </div>
        </div>
      );
    };
  },
});
