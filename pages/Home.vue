<template>
  <div>
    <span>My TODO list</span>
    <br />
    <nuxt-link to="/newTodoPage">create +</nuxt-link>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <button @click="onSelectTodo(todo)">{{ todo.title }}</button>
      </li>
    </ul>
    <todo-details-modal
      v-if="todoToShow"
      :todo="todoToShow"
      @onClearTodo="onSelectTodo(null)"
    ></todo-details-modal>
  </div>
</template>

<script>
import TodoDetailsModal from "~/components/TodoDetailsModal.vue";
export default {
  components: { TodoDetailsModal },
  data() {
    return {
      todoToShow: null,
    };
  },
  methods: {
    onSelectTodo(todo) {
      this.$data.todoToShow = todo;
    },
  },
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
