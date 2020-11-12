<template>
  <div>
    <button @click="toggleMessage">{{ buttonText }}</button>
    <p v-if="showMessage">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "I love Vue.js",
      showMessage: false,
      buttonText: "Show Message",
    };
  },

  methods: {
    toggleMessage() {
      this.showMessage = !this.showMessage;
      this.buttonText === "Show Message"
        ? (this.buttonText = "Hide Message")
        : (this.buttonText = "Show Message");
    },
  },
};
</script>

<style >
p {
  color: red;
}
</style>