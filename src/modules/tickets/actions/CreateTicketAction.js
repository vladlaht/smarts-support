import {ACTION_STATUS_START, getAction} from "../../../global/constants/action-types";
import {CREATE_TICKET_ACTION} from "../constants/ReducerConstants";


export function createTicketAction(body) {
    return (dispatch) => {
        dispatch(start());
        /*return dispatch(createLoyaltyCardsAPI(body))
            .then(res => {
                dispatch(success(res));
                window.$("#createLoyaltyCardModal").modal("toggle");
                window.$("#a-c-loyalty-select").val(null).trigger("change");
                return res;
            })
            .catch(err => {
                dispatch(failed(err));
                throw new Error(err);
            })*/
    }
}

function start() {
    return {
        type: getAction(CREATE_TICKET_ACTION, ACTION_STATUS_START)
    }
}

// function success(payload) {
//     /*showFlipNotification("Ticket created successfully");*/
//     return {
//         type: getAction(CREATE_TICKET_ACTION, ACTION_STATUS_SUCCESS),
//         payload,
//     }
// }
//
// function failed(error) {
//    /* showFlipNotification(error ? error.toString() : "Failed to create ticket", "danger");*/
//     return {
//         type: getAction(CREATE_TICKET_ACTION, ACTION_STATUS_FAILED),
//         error
//     }
// }