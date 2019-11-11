import React from "react";

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

    ]
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "TICKET_DETAILS" :
            return {
                ...state
            };
        default:
            return state
    }
}
