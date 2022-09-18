import { defineStore } from 'pinia'

export const useResult = defineStore('result', {
    state: () => ({ value: '' }),

    actions: {
        addValue(newValue) {
            this.value += newValue
        }
    }
})