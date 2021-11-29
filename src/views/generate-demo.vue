<template>
  <div class="flex flex-col h-full">
    <div class="flex-none h-30 bg-blue-100">header</div>
    <div class="flex-1 h-full overflow-auto flex">
      <div class="flex-none w-60 bg-gray-100">
        <!-- <draggable-comp
          class="dragArea list-group"
          v-model="state.draggableOne"
          item-key="id"
          list="{state.list1}"
          group="people"
          draggable=".card"
          animation="300"
          @start="onStartHandler"
        >
          <div
            v-for="item in state.list1"
            :key="item.id"
            class="
              card
              list-group-item
              bg-gray-300
              m-1
              p-3
              rounded-md
              text-center
              cursor-move
            "
            draggable="true"
          >
            {{ item.name }}
          </div>
        </draggable-comp>-->
      </div>
      <div class="flex-1">
        <!--<draggable-comp
          class="dragArea list-group"
          v-model="state.draggableTwo"
          item-key="id"
          group="people"
          draggable=".card"
          list="state.list2"
          animation="300"
          @end="onEndHandler"
        >
          <div
            v-for="item in state.list2"
            :key="item.id"
            class="
              card
              list-group-item
              bg-gray-300
              m-1
              p-3
              rounded-md
              text-center
              cursor-move
            "
            draggable="true"
          >
            {{ item.name }}
          </div>
        </draggable-comp>-->
      </div>
      <div class="flex-none w-52 bg-green-50">
        <draggable-comp
          class="flex flex-col h-445"
          tag="transition-group"
          :component-data="{
            tag: 'ul',
            type: 'transition-group',
            name: !state.drag ? 'flip-list' : null,
          }"
          group="qqqq"
          v-model="state.list3"
          v-bind="dragOptions"
          @start="state.drag = true"
          @end="state.drag = false"
          item-key="order"
        >
          <template #item="{ element }">
            <li class="h-10 bg-red-50">
              <i
                :class="
                  element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
                "
                aria-hidden="true"
              ></i>
              {{ element }}
            </li>
          </template>
        </draggable-comp>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import draggableComp from "vuedraggable";

const message = [
  "vue.draggable",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs",
];

export default {
  name: "generate-view",
  components: {
    draggableComp,
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
  setup() {
    const state = reactive({
      drag: false,
      draggableOne: [],
      draggableTwo: [],
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 },
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 },
      ],
      list3: message.map((name, index) => {
        return { name, order: index + 1 };
      }),
    });

    const onStartHandler = (e) => {
      state.drag = true;
      console.log("e:", e);
    };

    const onEndHandler = (e) => {
      console.log("e:", e);
      state.drag = false;
    };
    return {
      state,
      onStartHandler,
      onEndHandler,
    };
  },
};
</script>

<style>
.button {
  margin-top: 35px;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>
