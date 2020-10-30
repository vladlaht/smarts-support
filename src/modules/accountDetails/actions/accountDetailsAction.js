import {UPDATE_ACCOUNT_ACTIVITY_ACTION} from "../constants/reducerConstants";

export function addAction(action) {
    return (dispatch) => dispatch({
        type: UPDATE_ACCOUNT_ACTIVITY_ACTION,
        payload: {actionType: action.actionType, ticketNumber: action.ticketNumber}
    });
}