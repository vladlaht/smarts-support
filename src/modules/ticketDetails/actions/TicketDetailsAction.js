import {CREATE_TICKET_DETAILS_COMMENT_ACTION} from "../constants/ReducerConstants";

export function addComment(comment) {
    return (dispatch) => dispatch({
        type: CREATE_TICKET_DETAILS_COMMENT_ACTION,
        payload: comment
    });
}