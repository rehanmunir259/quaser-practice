<template>
  <div>
    <list-header bgColor="bg-orange-4"> Todo </list-header>
    <q-list separator bordered v-if="Object.keys(tasksTodo).length">
      <task v-for="(task, key) in tasksTodo" :key="key" :task="task" :id="key">
      </task>
    </q-list>
  </div>
</template>

<script>
export default {
  props: ["tasksTodo"],
  components: {
    "task": require("components/Tasks/task").default,
    "list-header": require("components/shared/ListHeader").default,
  },
};
</script>

<style>
</style>