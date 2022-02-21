<template>
  <section>
    <nuxt-link to="./">Back</nuxt-link>
    <form class="vue-form" @submit.prevent="add">
      <h2>Add new TODO item</h2>
      <div>
        <label for="title">Title</label>
        <input type="title" id="title" required v-model.trim="info.title" />
      </div>
      <div>
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          v-model.trim="info.description"
        />
      </div>
      <div>
        <button>Add Todo</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      info: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    add() {
      const { title, description } = this.$data.info;
      this.$store.commit("add", { title, description });
    },
  },
};
</script>

<style>
.example {
  margin-left: 10em;
}
</style>
