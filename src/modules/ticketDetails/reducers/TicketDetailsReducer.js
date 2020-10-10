import {ACTION_STATUS_FORM_FIELD_CHANGE, ACTION_STATUS_RESET, getAction} from "../../../global/constants/action-types";
import {CREATE_TICKET_DETAILS_COMMENT_ACTION, TICKET_DETAILS_ACTION} from "../constants/ReducerConstants";

const initialState = {
    ticketNumber: "15741",
    ticketName: "Payed twice for the invoice",
    clientName: "Peeter Goldberg",
    assignee: "Ilja Andrejev",
    createdBy: "Kristo Truu",
    createdAt: "May 21 2019 11:25:48 GMT+0300",
    updatedAt: null,
    status: "Open",
    invoiceNumber: "4234235235235",
    type: "Payments",
    priority: "Medium",
    description: "Money was withdrawn twice from a bank. The amount was high and the client asks to hurry up with the return of funds.",
    comments: [
        {
            datetime: "Sep 1 2020 14:00:48 GMT+0300",
            text: "1.Client sent additional information to the email."
        },
        {
            datetime: "Jun 24 2020 16:02:53 GMT+0300",
            text: "2.Client said that the problem is still not resolved."
        }
    ],
    selectedTicket: null
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_TICKET_DETAILS_COMMENT_ACTION:
            if (action.payload.length > 0) {
                return {
                    ...state,
                    comments: [...state.comments,
                        {
                            datetime: new Date(),
                            text: action.payload
                        }
                    ],
                    updatedAt: new Date()
                };
            } else {
                return {
                    ...state
                }
            }
        case getAction(TICKET_DETAILS_ACTION, ACTION_STATUS_FORM_FIELD_CHANGE):

            return {
                ...state,
                [action.payload.field]: action.payload.value,
                updatedAt: new Date()

            };
        case getAction(TICKET_DETAILS_ACTION, ACTION_STATUS_RESET):
            return initialState;
        default:
            return state
    }
}
