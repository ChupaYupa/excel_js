import {TABLE_RESIZE} from './types'

export function rootReducer(state, action) {
    let prevState
    if (action.type === TABLE_RESIZE) {
        prevState = state.colState || {}
        prevState[action.data.id] = action.data.value
        return {...state, colState: prevState}
    } else {
        return state
    }
}