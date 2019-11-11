import {CREATE_PAYMENTS_TICKET} from "../constants/ReducerConstants";
import {ACTION_STATUS_FORM_FIELD_CHANGE, getAction} from "../../../global/constants/action-types";

const initialState = {
    id: null,
    assignee: null,
    priority: null,
    ticketName: null,
    client: null,
    invoiceNumber: null,
    description: null
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case getAction(CREATE_PAYMENTS_TICKET, ACTION_STATUS_FORM_FIELD_CHANGE):
            return {
                ...state,
                [action.payload.field]: action.payload.value,
            };
        default:
            return state
    }
}
