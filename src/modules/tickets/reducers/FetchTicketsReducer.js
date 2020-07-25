import {
    ACTION_STATUS_FAILED,
    ACTION_STATUS_START,
    ACTION_STATUS_SUCCESS,
    getAction
} from "../../../global/constants/action-types";
import {FETCH_TICKET_ACTION,} from "../constants/ReducerConstants";

const initialState = {
    data: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case getAction(FETCH_TICKET_ACTION, ACTION_STATUS_START):
            return {
                ...state,
                data: [],
            };
        case getAction(FETCH_TICKET_ACTION, ACTION_STATUS_SUCCESS):
            return {
                ...state,
                data: action.payload !== null ? action.payload : [],
            };
        case getAction(FETCH_TICKET_ACTION, ACTION_STATUS_FAILED):
            return {
                ...state,
            };
        default:
            return state;
    }
}
