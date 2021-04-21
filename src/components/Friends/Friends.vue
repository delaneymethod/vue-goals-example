<template>
	<section>
		<h2>My friends</h2>
		<ul>
			<Friend
				v-for="friend in friends"
				:key="friend.id"
				:id="friend.id"
				:name="friend.name"
				:phone="friend.phone"
				:email="friend.email"
				:is-favorite="friend.isFavorite"
				@toggle-favorite="toggleFavorite"
			/>
		</ul>
	</section>
</template>

<script>
import Friend from '@/components/Friends/Friend/Friend';

export default {
	name: 'Friends',
	components: {
		Friend
	},
	data() {
		return {
			friends: [
				{
					id: 'manuel',
					name: 'Manuel Lorenz',
					phone: '01234 5678 991',
					email: 'manuel@localhost.com',
					isFavorite: true
				},
				{
					id: 'julie',
					name: 'julie Lorenz',
					phone: '09876 543 22',
					email: 'julie@localhost.com',
					isFavorite: false
				}
			]
		};
	},
	methods: {
		toggleFavorite(friendId) {
			const friend = this.friends.find((friend) => friend.id === friendId);

			friend.isFavorite = !friend.isFavorite;
		}
	}
};
</script>

<style scoped>
h2 {
	font-size: 2rem;
	border-bottom: 4px solid #cccccc;
	color: #58004d;
	margin: 0 0 1rem 0;
}

ul {
	margin: 0;
	padding: 0;
	list-style: none;
}
</style>
