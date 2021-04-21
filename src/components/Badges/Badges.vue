<template>
	<div>
		<TheHeader />
		<BadgeList />
		<UserInfo
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		/>
		<CourseGoals>
			<template #default="slotProps">
				<h2>{{ slotProps.item }}</h2>
				<p>{{ slotProps['anotherItem'] }}</p>
			</template>
		</CourseGoals>
	</div>
</template>

<script>
import TheHeader from '@/components/Badges/TheHeader';
import BadgeList from '@/components/Badges/BadgeList';
import UserInfo from '@/components/Badges/UserInfo';
import CourseGoals from '@/components/Badges/CourseGoals';

export default {
	name: 'Badges',
	components: {
		CourseGoals,
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
