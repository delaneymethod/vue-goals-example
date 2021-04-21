<template>
	<section>
		<TheHeader />
		<BadgeList />
		<UserInfo
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		/>
	</section>
</template>

<script>
import TheHeader from '@/components/Badges/TheHeader.vue';
import BadgeList from '@/components/Badges/BadgeList.vue';
import UserInfo from '@/components/Badges/UserInfo.vue';

export default {
	name: 'Badges',
	components: {
		TheHeader,
		BadgeList,
		UserInfo
	},
	data() {
		return {
			activeUser: {
				name: 'Sean Delaney',
				description: 'Site owner and admin',
				role: 'admin'
			}
		};
	}
};
</script>

<style scoped></style>
