import {ACTION_STATUS_FAILED, ACTION_STATUS_START, ACTION_STATUS_SUCCESS, getAction} from "../../../global/constants/action-types";
import {FETCH_TICKETS_ACTION} from "../constants/reducerConstants";
import {fetchTicketsAPI} from "../api/fetchTicketsAPI";

export function fetchTicketsAction() {
    return (dispatch) => {
        dispatch(start());
        return dispatch(fetchTicketsAPI())
            .then(res => dispatch(success(res)))
            .catch(error => dispatch(failed(error)));
    }
}

export function start() {
    return {
        type: getAction(FETCH_TICKETS_ACTION, ACTION_STATUS_START)
    }
}

export function success(payload) {
    return {
        type: getAction(FETCH_TICKETS_ACTION, ACTION_STATUS_SUCCESS),
        payload
    }
}

export function failed(error) {
    return {
        type: getAction(FETCH_TICKETS_ACTION, ACTION_STATUS_FAILED),
        error,
    }
}