import {
    ADD_TICKET_DETAILS_COMMENT,
    SAVE_TICKET_DETAILS_COMMENT
} from "../constants/ReducerConstants";
import {ACTION_STATUS_FORM_FIELD_CHANGE, getAction} from "../../../global/constants/action-types";

const initialState = {
    ticketNumber: "15741 $",
    ticketName: "Payed twice for the invoice $",
    clientName: "Peeter Pakiraam $",
    assignee: "Ilja Andrejev $",
    createdBy: "Kristo Truu $",
    createdAt: "12.08.2019 16:49:00 $",
    updatedAt: "13.08.2019 11:20:00 $",
    status: "Open $",
    invoiceNumber: "4234235235235 $",
    type: "Payments $",
    priority: "CRITICAL $",
    description: "Money was withdrawn twice from a bank. " +
        "The amount was high and the client asks to hurry up with the return of funds. $",
    comments: [
        {
            author: "Vladislav Lahtarin $",
            datetime: "16.08.2019 16:56:42 $",
            text: "1.Client sent additional information to the email. $"
        },
        {
            author: "Vlad Laht $",
            datetime: "13.08.2019 13:56:42 $",
            text: "2.Client said that the problem is still not resolved. $"
        }

    ],
    testComment: [
        {
            author: "Vladislav Lahtarin 1",
            datetime: "13.08.2019 13:56:42 1",
            text: 'its a test comment 1'
        },
        {
            author: "Vladislav Lahtarin 2",
            datetime: "13.08.2019 13:56:42 2",
            text: 'its a test comment 2'
        },
        {
            author: "Vladislav Lahtarin 3",
            datetime: "13.08.2019 13:56:42 3",
            text: 'its a test comment 3'
        }
    ],
    newComment: null,
    btnDisabled: true,
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TICKET_DETAILS_COMMENT:
            if(action.payload !==null && action.payload !== undefined && action.payload.length > 0) {
                return {
                    ...state,
                    comments: [...state.comments,
                        {
                            author: "Vlad Laht",
                            datetime: new Date().toLocaleString(),
                            text: action.payload
                        }
                    ],
                    newComment: null
                };
            } else {
                return {
                    ...state
                }
            }
        case getAction(SAVE_TICKET_DETAILS_COMMENT, ACTION_STATUS_FORM_FIELD_CHANGE):
                return {
                    ...state,
                    [action.payload.field]: action.payload.value,
                };
        default:
            return state
    }
}
