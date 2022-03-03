<template>
  <v-app>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm8 offset-sm2 align-center justify-center>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-btn @click="back" class="ma-2" plain>
                <v-icon dark left> mdi-arrow-left </v-icon>Back
              </v-btn>
              <v-toolbar-title>Create TODO item</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-container>
                <v-form @submit.prevent="add">
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field v-model="info.title" label="Title">
                      </v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-textarea
                        v-model="info.description"
                        label="Description"
                        rows="3"
                      ></v-textarea>
                    </v-flex>
                  </v-layout>
                  <v-layout row xs12>
                    <v-flex>
                      <v-btn type="submit" flat color="primary"> ADD </v-btn>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
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
    back() {
      this.$router.push("./");
    },
    add() {
      const { title, description } = this.info;
      this.$store.commit("add", { title, description });
      this.$router.push("./");
    },
  },
};
</script>