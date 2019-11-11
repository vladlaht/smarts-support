import {
    ACTION_STATUS_FORM_CLEAR_ERRORS,
    ACTION_STATUS_FORM_FIELD_CHANGE,
    ACTION_STATUS_RESET,
    ACTION_STATUS_SET_ACTIVE,
    getAction
} from "../constants/action-types";

export function reset(action) {
    return (dispatch) => dispatch({
        type: getAction(action, ACTION_STATUS_RESET)
    });
}

export function setActive(action, payload) {
    return (dispatch) => dispatch({
        type: getAction(action, ACTION_STATUS_SET_ACTIVE),
        payload
    })
}

export function changeField(action, field, value) {
    return (dispatch) => dispatch({
        type: getAction(action, ACTION_STATUS_FORM_FIELD_CHANGE),
        payload: {field: field, value: value}
    });
}

export function clearErrors(action) {
    return (dispatch) => dispatch({
        type: getAction(action, ACTION_STATUS_FORM_CLEAR_ERRORS)
    });
}