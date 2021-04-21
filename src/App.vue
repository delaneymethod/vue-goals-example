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
	methods: {
		showAlert() {
			alert('Alert shown!');
		}
	},
	provide() {
		return {
			foobar: this.foobar,
			showAlert: this.showAlert
		};
	}
};
</script>

<style scoped></style>
