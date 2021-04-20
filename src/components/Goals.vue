<template>
	<section>
		<h2>My course goals</h2>
		<input
			v-model="enteredGoalValue"
			type="text"
		>
		<button
			@click="addGoal"
		>
			Add Goal
		</button>
		<p v-if="goals.length === 0">
			No goals have been added yet - please start adding some!
		</p>
		<ul v-else>
			<li
				v-for="(goal, index) in goals"
				:key="index"
			>
				{{ goal }}
			</li>
		</ul>
		<ul>
			<li
				v-for="(value, key, index) in {name: 'Sean', age: 38}"
				:key="index"
			>
				{{ key }} = {{ value }}
			</li>
		</ul>
	</section>
</template>

<script type="text/babel">
export default {
	name: 'Goals',
	data: () => ({
		goals: [],
		enteredGoalValue: ''
	}),
	methods: {
		addGoal() {
			this.goals.push(this.enteredGoalValue);
		}
	}
};
</script>

<style scoped lang="scss">
ul {
	list-style: none;
	margin: 1rem 0;
	padding: 0;
}

li {
	margin: 1rem 0;
	font-size: 1.25rem;
	font-weight: bold;
	background-color: #8ddba4;
	padding: 0.5rem;
	color: #1f1f1f;
	border-radius: 25px;
}

input {
	font: inherit;
	border: 1px solid #cccccc;
}

input:focus {
	outline: none;
	border-color: #1b995e;
	background-color: #d7fdeb;
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
