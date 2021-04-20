<template>
	<section>
		<h2>Dynamic Styling</h2>
		<div
			class="box"
			:class="boxAClasses"
			@click="boxSelected('A')"
		/>
		<div
			class="box"
			:class="['anotherClass', boxBClasses]"
			@click="boxSelected('B')"
		/>
		<div
			class="box"
			:class="boxCClasses"
			@click="boxSelected('C')"
		/>
	</section>
</template>

<script type="text/babel">
export default {
	name: 'DynamicStyling',
	data: () => ({
		boxASelected: false,
		boxBSelected: false,
		boxCSelected: false
	}),
	computed: {
		boxAClasses() {
			return {
				active: this.boxASelected
			};
		},
		boxBClasses() {
			return {
				active: this.boxBSelected
			};
		},
		boxCClasses() {
			return {
				active: this.boxCSelected
			};
		}
	},
	methods: {
		boxSelected(box) {
			if (box === 'A') {
				this.boxASelected = !this.boxASelected;
			} else if (box === 'B') {
				this.boxBSelected = !this.boxBSelected;
			} else if (box === 'C') {
				this.boxCSelected = !this.boxCSelected;
			}
		}
	}
};
</script>

<style scoped lang="scss">
.box {
	width: calc(100% - 32px);
	height: 100px;
	margin: 16px;
	border: 2px dashed #cccccc;
}

.active {
	border-color: red;
	background-color: salmon;
}
</style>
