<template>
	<section>
		<h2>Reactivity</h2>
		<!--@input="saveInput"-->
		<input ref="userText" type="text" />
		<button @click="setText">Set Text</button>
		<p>{{ message }}</p>
	</section>
</template>

<script type="text/babel">
export default {
	name: 'Reactivity',
	data: () => ({
		currentUserInput: '',
		message: 'Vue is great!'
	}),
	beforeCreate() {
		console.log('Lifecycle steps - #1 - beforeCreate');
	},
	created() {
		console.log('Lifecycle steps - #2 - created');
	},
	beforeMount() {
		console.log('Lifecycle steps - #3 - beforeMount');
	},
	mounted() {
		console.log('Lifecycle steps - #4 - mounted');
	},
	beforeUpdate() {
		console.log('Lifecycle steps - #5 - beforeUpdate');
	},
	updated() {
		console.log('Lifecycle steps - #6 - updated');
	},
	beforeUnmount() {
		console.log('Lifecycle steps - #7 - beforeUnmount');
	},
	unmounted() {
		console.log('Lifecycle steps - #8 - unmounted');
	},
	methods: {
		/*
		saveInput(event) {
			this.currentUserInput = event.target.value;
		},
		*/
		setText() {
			// this.message = this.currentUserInput;
			this.message = this.$refs.userText.value;
		}
	}
};
</script>

<style scoped lang="scss">
p {
	font-size: 1.25rem;
	font-weight: bold;
	border: 1px solid #4fc08d;
	background-color: #4fc08d;
	color: #ffffff;
	padding: 0.5rem;
	border-radius: 25px;
}

input {
	font: inherit;
	border: 1px solid #cccccc;
}

input:focus {
	outline: none;
	border-color: #1b995e;
	background-color: #d7fdeb;
}

button {
	font: inherit;
	cursor: pointer;
	border: 1px solid #ff0077;
	background-color: #ff0077;
	color: #ffffff;
	padding: 0.05rem 1rem;
	box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

button:hover,
button:active {
	background-color: #ec3169;
	border-color: #ec3169;
	box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
