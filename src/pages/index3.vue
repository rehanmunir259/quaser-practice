<template>
  <q-page padding>
    <ul>
      <task
        v-for="(task, index) in tasks"
        :key="task.id"
        :task="task"
        :index="index"
      >
        {{ task.name }}
      </task>
    </ul>
  </q-page>
</template>




<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Go to shop",
          dueDate: "2021/05/12",
          dueTime: "18:30",
        },
        {
          id: 2,
          name: "Get bananas",
          dueDate: "2021/05/13",
          dueTime: "14:00",
        },
        {
          id: 3,
          name: "Get apples",
          dueDate: "2021/05/14",
          dueTime: "16:00",
        },
      ],
    };
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },

  components: {
    task: require("components/Task").default,
  },
};
</script>


<style>
</style>