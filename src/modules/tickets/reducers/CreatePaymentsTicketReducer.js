import {CREATE_PAYMENTS_TICKET} from "../constants/ReducerConstants";
import {
    ACTION_STATUS_FORM_FIELD_CHANGE,
    ACTION_STATUS_SUCCESS,
    getAction
} from "../../../global/constants/action-types";

const initialState = {
    id: null,
    assignee: null,
    priority: null,
    ticketName: null,
    clientName: null,
    invoiceNumber: null,
    description: null,
    createdBy: "Vladislav Lahtarin",
    status: "Open"
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case getAction(CREATE_PAYMENTS_TICKET, ACTION_STATUS_FORM_FIELD_CHANGE):
            return {
                ...state,
                [action.payload.field]: action.payload.value,
            };
        case getAction(CREATE_PAYMENTS_TICKET, ACTION_STATUS_SUCCESS):
            return initialState;
        default:
            return state;
    }
}
