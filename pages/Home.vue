<template>
  <div>
    <span>LIR</span>
    <nuxt-link to="/newTodoPage">Lir</nuxt-link>
    <ul>
      <li v-for="todo in todos" :key="todo.text">
        <span>{{ todo.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.list;
    },
  },
};
</script>

<style>
.example {
  margin-left: 10em;
}
</style>
