import { defineComponent } from "vue";
// const sensors = require("sa-sdk-javascript");

// const img = require("./assets/logo.png");

// interface User {
//   name: string;
//   age: number;
// }

export default defineComponent({
  setup() {
    // const state = reactive<User>({
    //   name: "QWEQWE",
    //   age: 12
    // });

    return () => {
      return (
        <div id="app" class="h-screen">
          {/* <img alt="Vue logo" src={require("./assets/logo.png")} /> */}
          {/* {name} */}
          {/* <HelloWorld msg="we" age={6} /> */}
          <router-view />
        </div>
      );
    };
  }
});
