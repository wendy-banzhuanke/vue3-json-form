import { createApp } from "vue";
// import App from './App.vue';
import App from "./App";
import "./assets/css/index.css";
// const App = defineComponent({
//   render() {
//     return h("div", { id: "app" }, [
//       h("img", {
//         alt: "Vue logo",
//         src: "./assets/logo.png"
//       }),
//       h(HelloWorld, {
//         msg: "render function"
//       })
//     ]);
//   }
// });

createApp(App).mount("#app");
