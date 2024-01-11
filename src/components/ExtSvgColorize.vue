import type { imgProps } from '@nuxt/image/dist/runtime/components/nuxt-img';
<template>
	<div>
		<div
			class="svgIcon"
			:class="props.customClass"
			:style="`background-color: ${props.color}; mask-image: url(${props.src}); -webkit-mask-image: url(${props.src});`"
		></div>
	</div>
</template>

<script setup>
const props = defineProps({
	customClass: String,
	src: {
		type: String,
		required: true,
	},
	color: String,
});
</script>

<style scoped>
.svgIcon {
	mask-size: 100%;
	-webkit-mask-repeat: no-repeat;
	mask-repeat: no-repeat;
	mask-position: center;
}
</style>
