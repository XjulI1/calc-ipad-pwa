import { useResultStore } from "@/store/result";
import { KEYBOARD } from '@/variables.json';

export const KEY_ACTIONS = {
    NUMBER: "number",
    RESET: 'reset',
    DEFAULT: "default",
    DELETE: 'delete'
}

export const getActionFromKey = function (key) {
    const template = {
        action: KEY_ACTIONS.DEFAULT,
        value: undefined
    }

    switch (key) {
        case KEYBOARD.ZERO:
        case KEYBOARD.ONE:
        case KEYBOARD.TWO:
        case KEYBOARD.THREE:
        case KEYBOARD.FOUR:
        case KEYBOARD.FIVE:
        case KEYBOARD.SIX:
        case KEYBOARD.SEVEN:
        case KEYBOARD.EIGHT:
        case KEYBOARD.NINE:
            template.action = KEY_ACTIONS.NUMBER
            template.value = parseInt(key)
            break;
        case KEYBOARD.CLEAN:
            template.action = KEY_ACTIONS.RESET
            break;
        case KEYBOARD.DELETE:
            template.action = KEY_ACTIONS.DELETE
            break;
        default:
            return null
    }

    return template
}

export const executeAction = function ({ action, value }) {
    const resultStore = useResultStore()

    switch (action) {
        case KEY_ACTIONS.NUMBER:
            resultStore.addValue(value)
            break;
        case KEY_ACTIONS.RESET:
            resultStore.resetValue()
            break;
        case KEY_ACTIONS.DELETE:
            resultStore.deleteLastValue()
            break;
        default:
            return null;
    }
}

export default {
    getActionFromKey
}