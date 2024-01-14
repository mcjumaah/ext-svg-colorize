// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import ExtSvgColorizePlugin from "./ExtSvgColorizePlugin";

const app = createApp(App);
app.use(ExtSvgColorizePlugin);

app.mount("#app");
