// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import ViewerPlugin from "./ViewerPlugin";

const app = createApp(App);
app.use(ViewerPlugin);

app.mount("#app");
