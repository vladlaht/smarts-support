import {
    CREATE_PAYMENTS_TICKET_DEMO_ACTION,
    CREATE_TICKET_ACTION
} from "../../constants/ReducerConstants";
import {ACTION_STATUS_START, getAction} from "../../../../global/constants/action-types";


export function createPaymentTicketDemo() {
    return (dispatch, getState) => {
        const form = getState().createPaymentTicketForm;
        const type = getState().createTicket.ticketType;

        const payload = {
            id: form.id ,
            type: type,
            assignee: form.assignee,
            priority: form.priority,
            ticketName: form.ticketName,
            clientName: form.clientName,
            invoiceNumber: form.invoiceNumber,
            description: form.description,
            createdBy: form.createdBy,
            createdAt: form.createdAt,
            status: form.status,
            ticketNumber: form.ticketNumber,
        };
        dispatch(start());
        dispatch(createTicketDemo(payload))
    }
}


function start() {
    return {
        type: getAction(CREATE_TICKET_ACTION, ACTION_STATUS_START)
    }
}

function createTicketDemo(payload) {
    return {
        type: CREATE_PAYMENTS_TICKET_DEMO_ACTION,
        payload,
    }
}
