<template>
  <div>
    <div>{{ todo.title }}</div>
    <button @click="onCloseModal">X</button>
  </div>
</template>

<script>
export default {
  props: ["todo", "isDarkMode"],
  methods: {
    onCloseModal() {
      this.$emit("onClearTodo");
    },
  },
};
</script>

<style></style>
