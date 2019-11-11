import {CREATE_TICKET_ACTION} from "../constants/ReducerConstants";
import {ACTION_STATUS_FORM_FIELD_CHANGE, getAction} from "../../../global/constants/action-types";

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
        default:
            return state
    }
}
