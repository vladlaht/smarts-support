import {ACTION_STATUS_FAILED, ACTION_STATUS_START, ACTION_STATUS_SUCCESS, getAction} from "../../../../global/constants/action-types";
import {CREATE_PAYMENTS_TICKET} from "../../constants/ReducerConstants";
import {createTicketAction} from "../CreateTicketAction";

export function createPaymentTicket() {
    return (dispatch, getState) => {
        const form = getState().createPaymentTicketForm;
        const type = getState().createTicket.ticketType;

        const payload = {
            type: type,
            assignee: form.assignee,
            priority: form.priority,
            ticketName: form.ticketName,
            clientName: form.clientName,
            invoiceNumber: form.invoiceNumber,
            description: form.description,
            createdBy: form.createdBy
        };
        dispatch(start());
        dispatch(createTicketAction(payload))
            .then(res => dispatch(success(res)))
            .catch(err => "failed" + dispatch(failed(err)))
    }
}

function start() {
    return {
        type: getAction(CREATE_PAYMENTS_TICKET, ACTION_STATUS_START)
    }
}

function success(payload) {
    return {
        type: getAction(CREATE_PAYMENTS_TICKET, ACTION_STATUS_SUCCESS),
        payload,
    }
}

function failed(error) {
    return {
        type: getAction(CREATE_PAYMENTS_TICKET, ACTION_STATUS_FAILED),
        error
    }
}