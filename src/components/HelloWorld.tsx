import { defineComponent, PropType } from "vue";

const PropsType = {
  msg: {
    type: String as PropType<string>,
    required: true
  },
  age: {
    type: Number as PropType<number>
  }
} as const;
export default defineComponent({
  name: "HelloWorld",
  props: PropsType,
  setup(_) {
    return () => {
      <template>
        <div class="hello">
          <h1>{_.msg}</h1>
          <p>{_.age}</p>
        </div>
      </template>;
    };
  }
});

{
  /* <style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style> */
}
