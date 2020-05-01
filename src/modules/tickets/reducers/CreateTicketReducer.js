import {CREATE_TICKET_ACTION} from "../constants/ReducerConstants";
import {
    ACTION_STATUS_FAILED,
    ACTION_STATUS_FORM_FIELD_CHANGE, ACTION_STATUS_RESET,
    ACTION_STATUS_START, ACTION_STATUS_SUCCESS,
    getAction
} from "../../../global/constants/action-types";

const initialState = {
    modalIsOpen: false,
    ticketType: null
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case getAction(CREATE_TICKET_ACTION, ACTION_STATUS_FORM_FIELD_CHANGE):
            return {
                ...state,
                [action.payload.field]: action.payload.value
            };

        case getAction(CREATE_TICKET_ACTION, ACTION_STATUS_RESET):
            return initialState;

        case getAction(CREATE_TICKET_ACTION, ACTION_STATUS_START):
            return initialState;

        case getAction(CREATE_TICKET_ACTION, ACTION_STATUS_SUCCESS):
            return initialState;

        case getAction(CREATE_TICKET_ACTION, ACTION_STATUS_FAILED):
            return initialState;

        default:
            return state
    }
}
