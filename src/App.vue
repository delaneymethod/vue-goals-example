<template>
	<div id="app">
		<!--
		<Binding />
		<DynamicStyling />
		<Goals />
		<Reactivity />
		-->
		<Friends />
	</div>
</template>

<script>
import Friends from '@/components/Friends/Friends';

export default {
	name: 'App',
	components: {
		Friends
	},
	data() {
		return {
			foobar: 'Sean Delaney'
		};
	},
	provide() {
		return {
			foobar: this.foobar
		};
	}
};
</script>

<style scoped></style>
