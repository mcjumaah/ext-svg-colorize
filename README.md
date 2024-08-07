# ext-svg-colorize

Vue component to easily change external SVGs' color. This component utilizes CSS masking to apply colors to an SVG file.

https://www.npmjs.com/package/@mcjumaah/ext-svg-colorize

### The Problem:

When we use external SVG files, we need to use the HTML `<img>` tag to insert the SVG. The problem with the `<img>` tag is that we can't change its color with the typical use of CSS, e.g. changing the `color:`  property.

### Reference

My reference to the approach I utilized in this component is the article by Hasan TEZCAN:

- https://dev.to/hasantezcan/how-to-colorize-svg-image-1kc8

### Note:

- Only applies one color, can't apply multiple colors
- If the original SVG file have multiple colors, it will be masked over with one color instead

## Get started

**External SVG Colorize**

Install:

```bash
npm install @mcjumaah/ext-svg-colorize
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

### Props

| Prop        | Description                               | Type                      | Default |
| ----------- | ----------------------------------------- | ------------------------- | ------- |
| src         | external SVG file's path (REQUIRED)       | './path/of/your/file.svg' | -       |
| customClass | custom class                              | `string`                  | -       |
| color       | new color to apply for the SVG file       | `string`                  | -       |
| width       | new width size to apply for the SVG file  | `number`                  | 40      |
| height      | new height size to apply for the SVG file | `number`                  | 40      |
