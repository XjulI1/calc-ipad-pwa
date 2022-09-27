<template>
  <div class="keyboard">
    <Keyboard-Button v-for="(button, index) in buttons" v-bind:key="index" v-bind="{ ...button }" />
  </div>
</template>
<script>
import KeyboardButton from "./Keyboard--Button.vue";
import { COLORS, KEYBOARD } from "@/variables.json";

export default {
  components: { KeyboardButton },
  data() {
    return {
      buttons: [
        {
          label: KEYBOARD.CLEAN,
          style: { backgroundColor: COLORS.lightGray, color: COLORS.black },
        },
        {
          label: KEYBOARD.INVERT,
          style: { backgroundColor: COLORS.lightGray, color: COLORS.black },
        },
        {
          label: KEYBOARD.DELETE,
          style: { backgroundColor: COLORS.lightGray, color: COLORS.black },
        },
        {
          label: KEYBOARD.DIV,
          style: { backgroundColor: COLORS.lightGray, color: COLORS.black },
        },
        {
          label: KEYBOARD.SEVEN,
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: KEYBOARD.EIGHT,
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: KEYBOARD.NINE,
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: KEYBOARD.MULTI,
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: KEYBOARD.FOUR,
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: KEYBOARD.FIVE,
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: KEYBOARD.SIX,
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: KEYBOARD.MINUS,
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: KEYBOARD.ONE,
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: KEYBOARD.TWO,
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: KEYBOARD.THREE,
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: KEYBOARD.PLUS,
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: KEYBOARD.ZERO,
          style: { backgroundColor: COLORS.gray, width: "calc(50% - 1px * 2)" },
        },
        {
          label: KEYBOARD.COMA,
          style: { backgroundColor: COLORS.gray },
        },
        {
          label: KEYBOARD.EQUAL,
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
