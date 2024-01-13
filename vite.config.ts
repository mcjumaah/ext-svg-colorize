import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import typescript2 from "rollup-plugin-typescript2";
import { format } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		typescript2({
			check: false,
			include: ["src/components/*.vue", "src/components/*.ts", "src/*.ts"],
			tsconfigOverride: {
				compilerOptions: {
					sourceMap: true,
					declaration: true,
					declarationMap: true,
				},
			},
			exclude: ["vite.config.ts", "main.ts"],
		}),
	],
	build: {
		cssCodeSplit: false,
		lib: {
			entry: "./src/ViewerPlugin.ts",
			formats: ["es", "cjs", "umd"],
			name: "ViewerPlugin",
			fileName: (format) => (format === "es" ? "index.js" : format === "cjs" ? "index.cjs" : "index.umd.js"),
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				exports: "named",
				globals: {
					vue: "Vue",
				},
			},
		},
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
