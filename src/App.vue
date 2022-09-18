<script>
import History from "./components/History.vue";
import Result from "./components/Result.vue";
import Keyboard from "./components/Keyboard.vue";
import { useStore } from "./store";

export default {
  components: { History, Result, Keyboard },

  setup() {
    const store = useStore()

    return {
      store
    }
  }
}
</script>

<template>
  <div class="App">
    <History class="history" />
    <Result class="result" />
    <Keyboard class="keyboard" />
  </div>
</template>

<style>
/* STYLE GLOBAL */
body {
  margin: 0;
  padding: 0;
}
button {
  all: unset;
}
</style>

<style scoped>
.App {
  max-width: 600px;
  margin: auto;
}
.history {
  width: 100%;
  height: 20vh;
}
.result {
  width: 100%;
  height: 10vh;
}
.keyboard {
  width: 100%;
  height: 50vh;
}
</style>
