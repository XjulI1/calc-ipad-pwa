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
        }
    }
})