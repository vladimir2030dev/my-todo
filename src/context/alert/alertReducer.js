import {HIDE_ALERT, SHOW_ALERT} from "../type";

const handlers = {
    [SHOW_ALERT]: (state, {payload}) => ({...payload, visible: true}),
    [HIDE_ALERT]: state => ({...state, visible: false}),
    DAFAULT: state => state
}

export const alertReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DAFAULT
    return (
        handle(state, action)
    )
}