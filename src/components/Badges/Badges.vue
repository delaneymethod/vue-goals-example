<template>
	<div>
		<TheHeader />
		<!--
		<BadgeList />
		<UserInfo
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		/>
		<CourseGoals #default="slotProps">
			<h2>{{ slotProps.item }}</h2>
			<p>{{ slotProps['anotherItem'] }}</p>
		</CourseGoals>
		-->
		<button @click="setSelectedComponent('active-goals')">Active Goals</button>
		<button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
		<!--
		<ActiveGoals v-if="selectedComponent === 'active-goals'" />
		<ManageGoals v-if="selectedComponent === 'manage-goals'" />
		-->
		<component :is="selectedComponent" />
	</div>
</template>

<script>
import ActiveGoals from '@/components/Badges/ActiveGoals';
import ManageGoals from '@/components/Badges/ManageGoals';
import TheHeader from '@/components/Badges/TheHeader';
/*
import BadgeList from '@/components/Badges/BadgeList';
import UserInfo from '@/components/Badges/UserInfo';
import CourseGoals from '@/components/Badges/CourseGoals';
*/

export default {
	name: 'Badges',
	components: {
		ManageGoals,
		ActiveGoals,
		TheHeader
		/*,
		CourseGoals,

		BadgeList,
		UserInfo
		*/
	},
	data() {
		return {
			selectedComponent: 'active-goals',
			activeUser: {
				name: 'Sean Delaney',
				description: 'Site owner and admin',
				role: 'admin'
			}
		};
	},
	methods: {
		setSelectedComponent(component) {
			this.selectedComponent = component;
		}
	}
};
</script>

<style lang="scss" scoped></style>
