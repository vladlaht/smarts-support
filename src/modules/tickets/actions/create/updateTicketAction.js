import {UPDATE_TICKET_ACTION,} from "../../constants/reducerConstants";

export function updateTicket(field, value) {
    return (dispatch, getState) => {
        const updatedTicket = getState().ticketDetails;

        const payload = {
            field: field,
            value: value,
            ticketId: updatedTicket.id
        };
        dispatch(createTicketDemo(payload))
    }
}

function createTicketDemo(payload) {
    return {
        type: UPDATE_TICKET_ACTION,
        payload,
    }
}
