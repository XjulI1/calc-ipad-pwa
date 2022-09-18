<template>
  <button class="button" :style="style" @click="addValue(label)">{{ label }}</button>
</template>

<script>
import { mapActions } from "pinia";
import { useResult } from "@/store/result";

export default {
  props: ["label", "style"],

  methods: {
    ...mapActions(useResult, ['addValue'])
  }
};
</script>

<style scoped>
.button {
  width: calc(25% - 1px * 2);
  height: calc(50vh / 5);
  font-size: 1.7rem;
  line-height: calc(50vh / 5);
  font-weight: bold;
  text-align: center;
  margin: 1px;
}

.button:active {
  background-color: grey !important;
}
</style>
