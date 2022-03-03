<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn plain :class="{ done: todo.done }" color=" black" dark v-bind="attrs" v-on="on">{{
  todo.title }} </v-btn>
    </template>

    <v-card>
      <v-card-title  class="text-h5 grey lighten-2">
        {{ todo.title }}
      </v-card-title>

      <v-card-text>
        {{ todo.description }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="remove"> Delete </v-btn>
         <v-btn text @click="toggle">{{ todo.done?"reopen":"done" }} </v-btn>

      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    todo: Object
  },
    data() {
    return {
      dialog: false,
    };
  },
    methods: {
    remove() {
      const todo = this.todo;
      this.$store.commit("remove", { todo });
    },

    toggle() {
            const todo = this.todo;

      this.$store.commit("toggle", { todo });
      this.dialog = false;
    }
    }
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>