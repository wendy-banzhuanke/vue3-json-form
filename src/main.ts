/*
 * @Author: zhangjian
 * @Date: 2021-06-03 11:30:39
 * @LastEditTime: 2021-11-15 11:47:00
 * @LastEditors: zhangjian
 * @Description: 描述
 */
import { createApp } from "vue";
// import App from './App.vue';
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
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
app.config.globalProperties.$monacoEditor = null;
app.use(ElementPlus).use(Router).mount("#app");
