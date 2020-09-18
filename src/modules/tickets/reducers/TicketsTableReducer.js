import {ACTION_STATUS_FORM_FIELD_CHANGE, ACTION_STATUS_RESET, getAction} from "../../../global/constants/action-types";
import {TICKET_TABLE_ACTION, FILTER_TABLE_ACTION} from "../constants/ReducerConstants";

const initialState = {
    sortType: "desc",
    sortField: null,
    filterField: null,
    currentPage: 0
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
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
        case getAction(TICKET_TABLE_ACTION, ACTION_STATUS_RESET):
            return initialState;
        default:
            return state;
    }
}
