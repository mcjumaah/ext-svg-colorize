# ext-svg-colorize

Vue component to easily change external SVGs' color.

https://www.npmjs.com/package/@mcjumaah/ext-svg-colorize

#
This template should help get you started developing with Vue 3 in Vite.
## Get started

**External SVG Colorizer**

Install:

```bash
npm install @mcjumaah/ext-svg-colorizer
```

Then, import and register the component.

The component itself does not include any CSS. You'll need to include it separately for the component to work properly:

```js
// main.ts or main.js

import { createApp } from "vue";
import App from "./App.vue";

import ExtSvgColorize from "@mcjumaah/ext-svg-colorize";
import "@mcjumaah/ext-svg-colorize/styles.css";

createApp(App)
    .use(ExtSvgColorize);
    .mount("#app");
```

It is recommended to pass the SVG file to the component in this method:

```vue
<script setup>
// app.vue
import SampleSvg from "./assets/sample.svg";
</script>

<template>
	<div>
	   	<ExtSvgColorize :src="SampleSvg" color="black" />
	</div>
</template>
```
