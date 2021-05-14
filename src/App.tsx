import { defineComponent, reactive } from "vue";
import HelloWorld from "@/components/HelloWorld";
// const img = require("./assets/logo.png");

interface User {
  name: string;
  age: number;
}

export default defineComponent({
  setup() {
    const state = reactive<User>({
      name: "QWEQWE",
      age: 12
    });

    return () => {
      const { age, name } = state;
      return (
        <div id="app">
          <img alt="Vue logo" src={require("./assets/logo.png")} />
          {name}
          <HelloWorld msg="we" age={6} />
        </div>
      );
    };
  }
});
