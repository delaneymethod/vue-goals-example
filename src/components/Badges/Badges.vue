<template>
	<div>
		<TheHeader />
		<BadgeList />
		<UserInfo
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		/>
	</div>
</template>

<script>
import TheHeader from '@/components/Badges/TheHeader';
import BadgeList from '@/components/Badges/BadgeList';
import UserInfo from '@/components/Badges/UserInfo';

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

<style lang="scss" scoped></style>
