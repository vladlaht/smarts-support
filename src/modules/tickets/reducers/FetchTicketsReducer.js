import {
    ACTION_STATUS_FAILED, ACTION_STATUS_FORM_FIELD_CHANGE,
    ACTION_STATUS_START,
    ACTION_STATUS_SUCCESS,
    getAction
} from "../../../global/constants/action-types";
import {
    CREATE_PAYMENT_TICKET_DEMO_ACTION,
    FETCH_TICKETS_ACTION,
    REORDER_TICKETS_ACTION, UPDATE_TICKET_ACTION,
} from "../constants/ReducerConstants";

const initialState = {
    data: [],
    isFetching: false,
    isLoaded: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case getAction(FETCH_TICKETS_ACTION, ACTION_STATUS_START):
            return {
                ...state,
                data: [],
                isFetching: true,
                isLoaded: false
            };
        case getAction(FETCH_TICKETS_ACTION, ACTION_STATUS_SUCCESS):
            return {
                ...state,
                data: action.payload !== null ? action.payload : [],
                isFetching: false,
                isLoaded: true
            };
        case getAction(FETCH_TICKETS_ACTION, ACTION_STATUS_FAILED):
            return {
                ...state,
                isFetching: false,
                isLoaded: true
            };
        case getAction(REORDER_TICKETS_ACTION, ACTION_STATUS_FORM_FIELD_CHANGE):
            return {
                ...state,
                [action.payload.field]: action.payload.value
            };
        case CREATE_PAYMENT_TICKET_DEMO_ACTION:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case UPDATE_TICKET_ACTION:
            return {
                ...state,
                data: state.data.map((item) => {
                    if (item.id === action.payload.ticketId) {
                        return {
                            ...item,
                            [action.payload.field]: action.payload.value
                        }
                    }
                    return item;
                })
            };
        default:
            return state;
    }
}
