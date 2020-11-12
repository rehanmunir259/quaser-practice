<template>
  <q-page padding>
    <button @click="counter++" style="position: absolute; right: 10px">
      {{ counter }}
    </button>
    <input
      v-model="message"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
      v-autofocus
      :class="{ 'error': message.length > 21 }"
      ref="messageInput"
    />
    <!-- :style="errorStyle" -->

    <button @click="clearMessage">Clear</button>
    <div>{{ message.length }}</div>
    <h5 v-if="message.length" class="border-grey">
      {{ message }}
    </h5>
    <h6 v-else>no message entered</h6>
    <hr />
    <p>UpperCase Message : {{ upperCaseMessage }}</p>
    <p>LowerCase Message : {{ message | lowerCaseMessage }}</p>
  </q-page>
</template>




<script>
export default {
  data() {
    return {
      message: "I love vue.js so hard",
      counter: 0,
    };
  },
  computed: {
    upperCaseMessage() {
      console.log("uppercase message was fired");
      return this.message.toUpperCase();
    },
    errorStyle() {
      if (this.message.length > 21) {
        return {
          color: "red",
          background: "pink",
        };
      }
    },
  },
  filters: {
    lowerCaseMessage(value) {
      console.log("lowercase message was fired");
      return value.toLowerCase();
    },
  },
  methods: {
    clearMessage() {
      this.message = "";
    },
    alertMessage() {
      alert(this.message);
    },
  },
  directives: {
    autofocus: {
      inserted(el) {
        el.focus();
      },
    },
  },

  beforeCreate() {
    console.log("before create");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("mounted");
    this.$refs.messageInput.className = "bg-green";
  },
  beforeUpdate() {
    console.log("before update");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("before destroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>


<style>
.border-grey {
  border: 1px solid grey;
}
input,
button {
  font-size: 23px;
}
.error {
  color: red;
  background: pink;
}
</style>