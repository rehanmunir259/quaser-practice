<template>
  <q-card>
    <form @submit.prevent="submitForm">
      <model-header> Edit Task </model-header>

      <q-card-section class="q-pt-none">
        <model-taskname :name.sync="taskToSubmit.name" ref="modalTaskName" />

        <model-due-date
          @clear="clearDueTime()"
          :dueDate.sync="taskToSubmit.dueDate"
        />

        <model-due-time
          :dueDate.sync="taskToSubmit.dueDate"
          :dueTime.sync="taskToSubmit.dueTime"
        />
      </q-card-section>

      <model-buttons />
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["task", "id"],
  data() {
    return {
      taskToSubmit: {},
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit,
      });
      this.$emit("close");
    },
    clearDueTime() {
      this.taskToSubmit.dueDate = "";
      this.taskToSubmit.dueTime = "";
    },
  },
  components: {
    "model-header": require("../Modals/shared/ModalHeader").default,
    "model-taskname": require("../Modals/shared/ModalTaskName").default,
    "model-due-date": require("../Modals/shared/ModalDueDate").default,
    "model-due-time": require("../Modals/shared/ModalDueTime").default,
    "model-buttons": require("../Modals/shared/ModalButtons").default,
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task);
  },
};
</script>