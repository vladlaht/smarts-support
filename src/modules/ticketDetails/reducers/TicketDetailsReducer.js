import {ACTION_STATUS_FORM_FIELD_CHANGE, ACTION_STATUS_RESET, getAction} from "../../../global/constants/action-types";
import {
    TICKET_DETAILS_CREATE_COMMENT_ACTION,
    TICKET_DETAILS_ACTION,
    FETCH_TICKET_DETAILS_ACTION
} from "../constants/ReducerConstants";

const initialState = {
    id: "",
    type: "",
    assignee: "",
    priority: "",
    ticketName: "",
    clientName: "",
    invoiceNumber: "",
    description: "",
    createdBy: "",
    createdAt: "",
    status: "",
    ticketNumber: "",
    comments: [],
    isLoaded: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TICKET_DETAILS_ACTION :
            return {
                ...state,
                id: action.payload ? action.payload.id : "",
                type: action.payload ? action.payload.type : "",
                assignee: action.payload ? action.payload.assignee : "",
                priority: action.payload ? action.payload.priority : "",
                ticketName: action.payload ? action.payload.ticketName : "",
                clientName: action.payload ? action.payload.clientName : "",
                invoiceNumber: action.payload ? action.payload.invoiceNumber : "",
                description: action.payload ? action.payload.description : "",
                createdBy: action.payload ? action.payload.createdBy : "",
                createdAt: action.payload ? action.payload.createdAt : "",
                status: action.payload ? action.payload.status : "",
                ticketNumber: action.payload ? action.payload.ticketNumber : "",
                comments: action.payload && action.payload.comments ? action.payload.comments : [],
                isLoaded: true
            };

        case getAction(TICKET_DETAILS_ACTION, ACTION_STATUS_FORM_FIELD_CHANGE):
            return {
                ...state,
                [action.payload.field]: action.payload.value,
                updatedAt: new Date()

            };

        case TICKET_DETAILS_CREATE_COMMENT_ACTION:
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
        case getAction(TICKET_DETAILS_ACTION, ACTION_STATUS_RESET):
            return initialState;
        default:
            return state
    }
}
