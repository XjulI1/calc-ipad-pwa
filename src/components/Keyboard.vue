<template>
  <div class="keyboard">
    <Keyboard-Button v-for="(button, index) in buttons" v-bind:key="index" v-bind="{ ...button }" />
  </div>
</template>
<script>
import KeyboardButton from "./Keyboard--Button.vue";
import { COLORS } from "@/variables.json";

export default {
  components: { KeyboardButton },
  data() {
    return {
      buttons: [
        {
          label: "AC",
          style: { backgroundColor: COLORS.lightGray, color: "black" },
        },
        {
          label: "+/-",
          style: { backgroundColor: COLORS.lightGray, color: "black" },
        },
        {
          label: "<-",
          style: { backgroundColor: COLORS.lightGray, color: "black" },
        },
        {
          label: "/",
          style: { backgroundColor: COLORS.lightGray, color: "black" },
        },
        {
          label: "7",
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: "8",
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: "9",
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: "X",
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: "4",
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: "5",
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: "6",
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: "-",
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: "1",
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: "2",
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: "3",
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: "+",
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: "0",
          style: { backgroundColor: COLORS.gray, width: "calc(50% - 1px * 2)" },
        },
        {
          label: ",",
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: "=",
          style: { backgroundColor: COLORS.orange },
        },
      ],
    }
  }
}
</script>
<style scoped>
.keyboard {
  display: flex;
  flex-wrap: wrap;
}
</style>
