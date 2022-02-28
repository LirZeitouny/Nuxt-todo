<template>
  <div>
    <card>
    <v-card-title>TODO LIST</v-card-title>
    <v-divider></v-divider>
        <v-card-actions>
        <v-btn color="primary"  @click="create"> create </v-btn>
      </v-card-actions>
    <v-list>
      <v-list-item v-for="todo in todos" :key="todo.id">
        <TodoDetailsModal :todo="todo" ></TodoDetailsModal>
      </v-list-item>
    </v-list>
    </card>
  </div>
</template>

<script>
import TodoDetailsModal from "~/components/TodoDetailsModal.vue";
export default {
  component: { TodoDetailsModal },
  computed: {
    todos() {
      return this.$store.state.list;
    },
  },
  methods: {
    create() {this.$router.push('./NewTodoPage');
}
  },
};
</script>

<style></style>
