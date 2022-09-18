<template>
  <div>{{ value }}</div>
</template>

<script>
import { storeToRefs } from "pinia"
import { useResult } from "@/store/result"

export default {
  setup() {
    const store = useResult()
    const { value } = storeToRefs(store)

    return { value }
  }
}
</script>
<style></style>
