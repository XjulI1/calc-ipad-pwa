import { defineStore } from 'pinia'

const initialState = { value: '' }

export const useResultStore = defineStore('result', {
    state: () => ({ ...initialState }),

    actions: {
        addValue(newValue) {
            this.value += newValue
        },

        resetValue() {
            this.value = initialState.value
        },

        deleteLastValue() {
            this.value = this.value.slice(0, -1)
        },

        evalResult() {
            this.value = eval(this.value)
        }
    }
})