<template>
	<div>
		<h2>Manage Goals</h2>
		<input type="text" ref="goal" />
		<button @click="setGoal">Set Goal</button>
		<teleport to="body">
			<ErrorAlert v-if="inputIsInvalid">
				<h2>Input is invalid!</h2>
				<p>Please enter a few characters...</p>
				<button @click="closeDialog">Okay</button>
			</ErrorAlert>
		</teleport>
	</div>
</template>

<script>
import ErrorAlert from '@/components/Badges/ErrorAlert';

export default {
	name: 'ManageGoals',
	components: {
		ErrorAlert
	},
	data() {
		return {
			inputIsInvalid: false
		};
	},
	methods: {
		setGoal() {
			const value = this.$refs.goal.value;
			if (value === '') {
				this.inputIsInvalid = true;
			}
		},
		closeDialog() {
			this.inputIsInvalid = !this.inputIsInvalid;
		}
	}
};
</script>

<style scoped></style>
