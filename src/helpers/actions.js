export const KEY_ACTIONS = {
    NUMBER: "number",
    DEFAULT: "default"
}

export const getActionFromKey = function (key) {
    const template = {
        action: KEY_ACTIONS.DEFAULT,
        value: undefined
    }

    switch (key) {
        case '0':
            return { action: KEY_ACTIONS.NUMBER, value: parseInt(key) }
        default:
            return null
    }
}

export const executeAction = function ({ action, value }) {
    switch (action) {
        case KEY_ACTIONS.NUMBER:
            break;
        default:
            return null;
    }
}

export default {
    getActionFromKey
}