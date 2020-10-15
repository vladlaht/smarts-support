import {
    ACTION_STATUS_FAILED, ACTION_STATUS_FORM_FIELD_CHANGE,
    ACTION_STATUS_START,
    ACTION_STATUS_SUCCESS,
    getAction
} from "../../../global/constants/action-types";
import {
    CREATE_PAYMENTS_TICKET_DEMO_ACTION,
    FETCH_TICKET_ACTION,
    UPDATE_TICKETS_MASSIVE_ACTION,
} from "../constants/ReducerConstants";

const initialState = {
    data: [],
    isFetching: false,
    isLoaded: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case getAction(FETCH_TICKET_ACTION, ACTION_STATUS_START):
            return {
                ...state,
                data: [],
                isFetching: true,
                isLoaded: false
            };
        case getAction(FETCH_TICKET_ACTION, ACTION_STATUS_SUCCESS):
            return {
                ...state,
                data: action.payload !== null ? action.payload : [],
                isFetching: false,
                isLoaded: true
            };
        case getAction(FETCH_TICKET_ACTION, ACTION_STATUS_FAILED):
            return {
                ...state,
                isFetching: false,
                isLoaded: true
            };
        case getAction(UPDATE_TICKETS_MASSIVE_ACTION, ACTION_STATUS_FORM_FIELD_CHANGE):
            return {
                ...state,
                [action.payload.field]: action.payload.value
            };
        case CREATE_PAYMENTS_TICKET_DEMO_ACTION:
            return {
                ...state,
                // data: state.data ? [...state.data, action.payload] : [action.payload]
                data: [...state.data, action.payload]
            };
        default:
            return state;
    }
}
