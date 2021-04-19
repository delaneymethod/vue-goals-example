<template>
	<div>
		<header>
			<h1>Vue Course Goals</h1>
		</header>
		<section id="user-goal">
			<h2>My Course Goal</h2>
			<p>{{ outputGoal() }}</p>
			<button v-on:click="incrementCounter">Increment Counter</button>
			<p>Learn more <a :href="courseLink">about Vue</a></p>
			<p>Counter {{ counter }}</p>
			<input type="text" :value="name" v-on:input="setName"/>
			<input type="text" v-model="surname"/>
			<button @click="resetName">Reset Name</button>
			<p>Surname: {{ name }}</p>
			<p>Full Name: {{ outputFullName }}</p>
		</section>
	</div>
</template>

<script type="text/babel">
export default {
	name: 'App',
	components: {},
	watch: {
		counter(latestValue) {
			if (latestValue > 10) {
				this.counter = 0;
			}
		}
	},
	computed: {
		outputFullName() {
			return this.name;
		}
	},
	beforeMount() {
	},
	props: {},
	data: () => ({
		name: '',
		surname: '',
		counter: 0,
		courseGoalA: 'Master Vue!',
		courseGoalB: 'Learn Vue!',
		courseLink: 'https://vuejs.org/'
	}),
	methods: {
		setName(event) {
			this.name = event.target.value;
		},
		resetName() {
			this.name = '';
			this.surname = 'Delaney';
		},
		incrementCounter() {
			this.counter++;
		},
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

<style lang="scss">
</style>
