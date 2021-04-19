<template>
	<div>
		<header>
			<h1>Vue Course Goals</h1>
		</header>
		<section id="user-goal">
			<h2>My Course Goal</h2>
			<p>{{ outputGoal() }}</p>
			<p>Learn more <a v-bind:href="courseLink">about Vue</a></p>
		</section>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
	data: () => ({
		courseGoalA: 'Master Vue!',
		courseGoalB: 'Learn Vue!',
		courseLink: 'https://vuejs.org/'
	}),
	methods: {
		outputGoal() {
			const randomNumber = Math.random();

			if (randomNumber < 0.5) {
				return this.courseGoalA;
			} else {
				return this.courseGoalB;
			}
		}
	}
};
</script>

<style>
</style>
