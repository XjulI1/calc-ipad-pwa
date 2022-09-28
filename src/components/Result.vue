<template>
  <div class="result">{{ value }}</div>
</template>

<script>
import { storeToRefs } from "pinia"
import { useResultStore } from "@/store/result"

export default {
  setup() {
    const store = useResultStore()
    const { value } = storeToRefs(store)

    return { value }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.result {
  background-color: #222;
  font-size: 2.5rem;
  line-height: $RESULT_HEIGHT;
  text-align: right;
}
</style>

