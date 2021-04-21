<template>
	<li>
		<h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
		<button @click="toggleDetails">
			{{ detailsAreVisible ? 'Hide Details' : 'Show Details' }}
		</button>
		<button @click="toggleFavorite">Toggle Favorite</button>
		<ul v-if="detailsAreVisible">
			<li><strong>Phone:</strong> {{ phone }}</li>
			<li><strong>Email:</strong> {{ email }}</li>
		</ul>
		<button @click="deleteFriend">Delete</button>
	</li>
</template>

<script>
export default {
	name: 'Friend',
	props: {
		id: String,
		name: {
			type: String,
			required: true
		},
		phone: String,
		email: String,
		isFavorite: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	emits: {
		'delete-friend': function (id) {
			if (id) {
				return true;
			} else {
				console.warn('delete-friend id is missing!');
				return false;
			}
		},
		'toggle-favorite': function (id) {
			if (id) {
				return true;
			} else {
				console.warn('toggle-favorite id is missing!');
				return false;
			}
		}
	},
	data() {
		return {
			detailsAreVisible: false
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
		toggleFavorite() {
			this.$emit('toggle-favorite', this.id);
		},
		deleteFriend() {
			this.$emit('delete-friend', this.id);
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
