<template>
  <div>
    <header>
      <h1>Vue Course Goals</h1>
    </header>
    <section id="user-goal">
      <h2>My Course Goal</h2>
      <p>{{ courseGoal }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      courseGoal: 'Master Vue!'
    };
  }
};
</script>

<style>
</style>
