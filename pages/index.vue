<template>
  <v-app>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm8 offset-sm2 align-center justify-center>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-btn @click="create" class="ma-2" plain>
                <v-icon>mdi-plus</v-icon>Add
              </v-btn>
              <v-toolbar-title>MY TODO LIST</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-container>
                <v-list>
                  <v-list-item v-for="todo in todos" :key="todo.id">
                    <TodoDetailsModal :todo="todo"></TodoDetailsModal>
                  </v-list-item>
                </v-list>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
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
    create() {
      this.$router.push("./TodoCreationPage");
    },
  },
};
</script>
