/*
 * @Author: zhangjian
 * @Date: 2021-06-03 11:30:39
 * @LastEditTime: 2021-10-29 15:53:46
 * @LastEditors: zhangjian
 * @Description: 描述
 */
import { createApp } from "vue";
// import App from './App.vue';
import App from "./App";
import Router from "./router";
import "./assets/styles/resetcss.css";
import "./styles/index.css";
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

const app = createApp(App);

app.config.globalProperties.devtools = true;

// app.config.globalProperties.$sensors = sensors;

app.use(Router).mount("#app");
