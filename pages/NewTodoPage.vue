<template>
  <section>
    <nuxt-link to="./">Back</nuxt-link>
    <v-form @submit.prevent="add">
      <v-card>
        <v-container>
          <v-row>
            <v-col cols="7">
              <v-text-field
                v-model="info.title"
                label="Title"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="7">
              <v-textarea
                v-model="info.description"
                label="Description"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-btn type="submit"> submit </v-btn>
          </v-row>
        </v-container>
      </v-card>
    </v-form>
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
      const { title, description } = this.info;
      this.$store.commit("add", { title, description });
            this.$router.push('./');

    },
  },
};
</script>

<style>
.example {
  margin-left: 10em;
}
</style>
