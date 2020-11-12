<template>
  <q-page class="q-pa-md">
    <no-tasks
      v-if="!Object.keys(tasksTodo).length"
      @added="showAddTask = true"
    ></no-tasks>
    <tasks-todo :tasksTodo="tasksTodo" v-else />

    <tasks-completed
      :tasksCompleted="tasksCompleted"
      v-if="Object.keys(tasksCompleted).length"
    />
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        round
        color="primary"
        size="24px"
        icon="add"
        @click="showAddTask = true"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <addTask @close="showAddTask = false"> </addTask>
    </q-dialog>
  </q-page>
</template>




<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      showAddTask: false,
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
  },
  components: {
    "task": require("../components/Tasks/task").default,
    "addTask": require("../components/Tasks/Modals/addTask").default,
    "tasks-todo": require("../components/Tasks/Modals/taskstodo").default,
    "tasks-completed": require("../components/Tasks/Modals/taskscompleted")
      .default,
    "no-tasks": require("../components/Tasks/NoTasks").default,
  },
};
</script>


<style>
</style>