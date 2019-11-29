import {ADD_TICKET_DETAILS_COMMENT} from "../../tickets/constants/ReducerConstants";

export function addComment(comment) {
    return (dispatch) => dispatch({
        type: ADD_TICKET_DETAILS_COMMENT,
        payload: comment
    });
}