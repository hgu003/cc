<template>
  <ul>
    <todoItem
      v-for="(item, index) in items"
      @toggle="$emit('toggle', $event)"
      @dele="$emit('dele', $event)"
      @update-input="updateInput"
      :flag="item.complete"
      :inde="index"
      :con="item.con"
      :key="item.id"
    ></todoItem>
  </ul>
</template>

<script>
import todoItem from "./TodoItem";
export default {
  name: "TodoList",
  components: {
    todoItem,
  },
  props: ["items"],
  methods: {
    updateInput(a, b) {
      this.$emit("update-input", a, b);
    },
  },
};
</script>

<style>
</style>