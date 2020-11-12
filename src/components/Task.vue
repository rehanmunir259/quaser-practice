<template>
  <li>
    <div><slot></slot> {{ index }}</div>
    <small>{{ task.dueDate }} @ {{ task.dueTime }}</small>
    <button     >X</button>
    <!-- @click="deleteTask(index)" -->

  </li>
</template>


<script>
export default {
  props: ["task","index"],
};
</script>

<style>
</style>