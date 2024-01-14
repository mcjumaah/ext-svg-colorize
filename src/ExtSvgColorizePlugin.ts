import type { App } from "vue";
import { ExtSvgColorize } from "./components";

export default {
	install: (app: App) => {
		app.component("ExtSvgColorize", ExtSvgColorize);
	},
};

export { ExtSvgColorize };
