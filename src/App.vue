<template>
	<div>
		<h1>Hello World</h1>
		<ExtSvgColorize :src="logoSvg" color="red"></ExtSvgColorize>
		<img :src="logoSvg" alt="logo" width="500" height="600" />
	</div>
</template>

<script setup lang="ts">
// import ExtSvgColorize from "./components/ExtSvgColorize.vue";
import logoSvg from "./assets/logo.svg";
</script>

<style scoped></style>
