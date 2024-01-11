import ExtSvgColorize from "./components/ExtSvgColorize.vue";

export default {
	install: (app, options) => {
		app.component("ExtSvgColorize", ExtSvgColorize);
	},
};
