<template>
	<section>
		<h2>My friends</h2>
		<NewFriend @add-friend="addFriend" />
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
				@delete-friend="deleteFriend"
			/>
		</ul>
	</section>
</template>

<script>
import Friend from '@/components/Friends/Friend/Friend';
import NewFriend from '@/components/Friends/NewFriend/NewFriend';

export default {
	name: 'Friends',
	components: {
		Friend,
		NewFriend
	},
	data() {
		return {
			friends: [
				{
					id: Math.random(),
					name: 'Manuel Lorenz',
					phone: '01234 5678 991',
					email: 'manuel@localhost.com',
					isFavorite: true
				},
				{
					id: Math.random(),
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
		},
		addFriend(name, phone, email) {
			const friend = {
				id: Math.random(),
				name,
				phone,
				email,
				isFavorite: false
			};

			this.friends.push(friend);
		},
		deleteFriend(friendId) {
			this.friends = this.friends.filter((friend) => friend.id !== friendId);
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
