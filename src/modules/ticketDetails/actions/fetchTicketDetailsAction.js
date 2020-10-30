import {FETCH_TICKET_DETAILS_ACTION} from "../constants/reducerConstants";

export function fetchTicketDetails(ticket) {
    return (dispatch) => dispatch({
        type: FETCH_TICKET_DETAILS_ACTION,
        payload: ticket
    });
}