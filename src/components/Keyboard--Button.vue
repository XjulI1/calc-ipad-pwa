<template>
  <button class="button" :style="style" @click="addValue(label)">{{ label }}</button>
</template>

<script>
import { executeAction, getActionFromKey } from "@/helpers/actions";

export default {
  props: ["label", "style"],

  methods: {
    addValue(label) {
      executeAction(getActionFromKey(label))
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

.button {
  width: calc(25% - 1px * 2);
  height: calc($KEYBOARD_HEIGHT / 5);
  font-size: 1.7rem;
  line-height: calc($KEYBOARD_HEIGHT / 5);
  font-weight: bold;
  text-align: center;
  margin: 1px;
}

.button:active {
  background-color: grey !important;
}
</style>
