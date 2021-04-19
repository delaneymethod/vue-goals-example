<template>
  <div>
    <header>
      <h1>Vue Course Goals</h1>
    </header>
    <section id="user-goal">
      <h2>My Course Goal</h2>
      <p>{{ courseGoal }}</p>
      <p>Learn more <a v-bind:href="courseLink">about Vue</a></p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      courseGoal: 'Master Vue!',
      courseLink: 'https://vuejs.org/'
    };
  }
};
</script>

<style>
</style>
