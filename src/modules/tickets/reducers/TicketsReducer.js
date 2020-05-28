import {
    ACTION_STATUS_FAILED,
    ACTION_STATUS_FORM_FIELD_CHANGE,
    ACTION_STATUS_START,
    ACTION_STATUS_SUCCESS,
    getAction
} from "../../../global/constants/action-types";
import {
    CREATE_TICKET_ACTION,
    FETCH_TICKET_ACTION,
    UPDATE_TICKET_ACTION,
    DELETE_TICKET_ACTION,
    SORT_TICKET_ACTION
} from "../constants/ReducerConstants";

const initialState = {
    data: [],
    sortType: "desc",
    sortField: null,
    currentPage: 0
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

        case getAction(SORT_TICKET_ACTION, ACTION_STATUS_FORM_FIELD_CHANGE):
            return {
                ...state,
                [action.payload.field]: action.payload.value
            };

        case getAction(CREATE_TICKET_ACTION, ACTION_STATUS_SUCCESS):
            return {
                ...state,
            };
        case getAction(UPDATE_TICKET_ACTION, ACTION_STATUS_SUCCESS):
            return {
                ...state,
            };
        case getAction(DELETE_TICKET_ACTION, ACTION_STATUS_SUCCESS):
            return {
                ...state,
            };
        default:
            return state;
    }
}
