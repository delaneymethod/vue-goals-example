<template>
	<li>
		<h2>{{ name }} {{ friendIsFavorite === '1' ? '(Favorite)' : '' }}</h2>
		<button @click="toggleDetails">
			{{ detailsAreVisible ? 'Hide Details' : 'Show Details' }}
		</button>
		<button @click="toggleFavorite">Toggle Favorite</button>
		<ul v-if="detailsAreVisible">
			<li><strong>Phone:</strong> {{ phone }}</li>
			<li><strong>Email:</strong> {{ email }}</li>
		</ul>
	</li>
</template>

<script>
export default {
	name: 'Friend',
	props: {
		name: {
			type: String,
			required: true
		},
		phone: String,
		email: String,
		isFavorite: {
			type: String,
			required: false,
			default: '0',
			validator: function (value) {
				return value === '1' || value === '0';
			}
		}
	},
	data() {
		return {
			detailsAreVisible: false,
			friend: {
				id: 'manuel',
				name: 'Manuel Lorenz',
				phone: '01234 5678 991',
				email: 'manuel@localhost.com'
			},
			friendIsFavorite: this.isFavorite
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
		toggleFavorite() {
			if (this.friendIsFavorite === '1') {
				this.friendIsFavorite = '0';
			} else {
				this.friendIsFavorite = '1';
			}
		}
	}
};
</script>

<style scoped>
li {
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	margin: 1rem auto;
	border-radius: 10px;
	padding: 1rem;
	text-align: center;
	width: 90%;
	max-width: 40rem;
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
