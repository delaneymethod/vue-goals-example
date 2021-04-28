<template>
	<header>
		<h1>More on Vue Components</h1>
	</header>
</template>

<script>
export default {
	name: 'TheHeader'
};
</script>

<style lang="scss" scoped>
header {
	width: 100%;
	height: 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #14005e;

	h1 {
		color: #ffffff;
		margin: 0;
	}
}
</style>
