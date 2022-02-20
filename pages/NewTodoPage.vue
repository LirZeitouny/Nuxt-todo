<template>
  <card id="app">
    <nuxt-link to="./">Back</nuxt-link>
    <form class="vue-form" @submit.prevent="add">
      <fieldset>
        <legend>Add new TODO item</legend>
        <div>
          <label class="Title" for="title">Title</label>
          <input
            type="title"
            name="title"
            id="title"
            required=""
            v-model="todo.title"
          />
        </div>
        <div>
          <label class="Description" for="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            v-model="todo.description"
          />
        </div>
        <div>
          <input type="submit" value="Add" />
        </div>
      </fieldset>
    </form>
  </card>
</template>

<script>
export default {
  data: () => {
    return {
      todo: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    add() {
      if (title.trim()) {
        this.$store.commit("add", { title });
      }
    },
  },
};
</script>

<style>
.example {
  margin-left: 10em;
}
</style>
