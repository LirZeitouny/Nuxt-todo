<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color=" lighten-2" dark v-bind="attrs" v-on="on">{{
  todo.title }} </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        {{ todo.title }}
      </v-card-title>

      <v-card-text>
        {{ todo.description }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="remove"> Delete </v-btn>
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
      this.dialog = false;
    }
    }
};
</script>
