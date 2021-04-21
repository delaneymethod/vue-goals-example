<template>
	<form>
		<div>
			<label>Name</label>
			<input type="text" v-model="name" />
		</div>
		<div>
			<label>Phone</label>
			<input type="tel" v-model="phone" />
		</div>
		<div>
			<label>Email</label>
			<input type="email" v-model="email" />
		</div>
		<div>
			<button @click.prevent="addFriend">Add Friend</button>
		</div>
	</form>
</template>

<script>
export default {
	name: 'NewFriend',
	emits: ['add-friend'],
	data() {
		return {
			name: '',
			phone: '',
			email: ''
		};
	},
	methods: {
		addFriend() {
			this.$emit('add-friend', this.name, this.phone, this.email);
		}
	}
};
</script>

<style scoped>
form {
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	margin: 1rem auto;
	border-radius: 10px;
	padding: 1rem;
	text-align: center;
	width: 90%;
	max-width: 40rem;
}

div {
	margin: 1rem 0;
}

label {
	font-weight: bold;
	margin-right: 1rem;
	width: 7rem;
	display: inline-block;
}

input {
	font: inherit;
	padding: 0.15rem;
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
