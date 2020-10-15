import {FETCH_TICKET_DETAILS_ACTION} from "../constants/ReducerConstants";

export function fetchTicketDetails(ticket) {
    return (dispatch) => dispatch({
        type: FETCH_TICKET_DETAILS_ACTION,
        payload: ticket
    });
}