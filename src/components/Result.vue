<template>
  <div>{{ value }}</div>
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
<style></style>
