import {
    ACTION_STATUS_FAILED,
    ACTION_STATUS_FORM_FIELD_CHANGE,
    ACTION_STATUS_START,
    ACTION_STATUS_SUCCESS,
    getAction
} from "../../../global/constants/action-types";
import {
    FETCH_TICKET_ACTION,
    TICKET_TABLE_ACTION, FILTER_TABLE_ACTION
} from "../constants/ReducerConstants";

const initialState = {
    data: [],
    sortType: "desc",
    sortField: null,
    filterField: null,
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
        case getAction(TICKET_TABLE_ACTION, ACTION_STATUS_FORM_FIELD_CHANGE):
            return {
                ...state,
                [action.payload.field]: action.payload.value
            };
        case getAction(FILTER_TABLE_ACTION, ACTION_STATUS_FORM_FIELD_CHANGE):
            return {
                ...state,
                [action.payload.field]: action.payload.value,
                currentPage: 0
            };
        default:
            return state;
    }
}
