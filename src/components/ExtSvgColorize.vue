<template>
	<div>
		<div
			class="svgIcon"
			:class="props.customClass"
			:style="`width: ${props.width}px; height: ${props.height}px; background-color: ${props.color}; mask-image: url(${props.src}); -webkit-mask-image: url(${props.src});`"
		></div>
	</div>
</template>

<script setup lang="ts">
export interface Props {
	customClass?: string;
	src: string;
	color?: string;
	width?: number;
	height?: number;
}

const props = withDefaults(defineProps<Props>(), {
	width: 40,
	height: 40,
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
