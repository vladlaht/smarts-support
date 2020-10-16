import {CREATE_PAYMENTS_TICKET_ACTION} from "../constants/ReducerConstants";
import {
    ACTION_STATUS_FORM_CLEAR_ERRORS,
    ACTION_STATUS_FORM_FIELD_CHANGE, ACTION_STATUS_RESET,
    ACTION_STATUS_SUCCESS,
    getAction
} from "../../../global/constants/action-types";

const initialState = {
    id: "",
    assignee: "",
    priority: "",
    ticketName: "",
    clientName: "",
    invoiceNumber: "",
    description: "",
    createdBy: "Vladislav Lahtarin",
    createdAt: null,
    status: "Open",
    ticketNumber: null,
    assigneeError: null,
    priorityError: null,
    ticketNameError: null,
    clientNameError: null,
    invoiceNumberError: null,
    descriptionError: null,

};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case getAction(CREATE_PAYMENTS_TICKET_ACTION, ACTION_STATUS_FORM_FIELD_CHANGE):
            return {
                ...state,
                [action.payload.field]: action.payload.value,
            };
        case getAction(CREATE_PAYMENTS_TICKET_ACTION, ACTION_STATUS_FORM_CLEAR_ERRORS): {
            return {
                ...state,
                assigneeError: null,
                priorityError: null,
                ticketNameError: null,
                clientNameError: null,
                invoiceNumberError: null,
                descriptionError: null,
            }
        }
        case getAction(CREATE_PAYMENTS_TICKET_ACTION, ACTION_STATUS_RESET):
            return initialState;
        case getAction(CREATE_PAYMENTS_TICKET_ACTION, ACTION_STATUS_SUCCESS):
            return initialState;
        default:
            return state;
    }
}
