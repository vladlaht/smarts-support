import createTicketReducer from "./createTicketReducer";
import createPaymentTicketReducer from "./createPaymentTicketReducer";
import ticketsTableReducer from "./ticketsTableReducer";
import fetchTicketsReducer from "./fetchTicketsReducer";


export default {
    createTicket: createTicketReducer,
    createPaymentTicketForm: createPaymentTicketReducer,
    ticketsTableData : ticketsTableReducer,
    tickets: fetchTicketsReducer
    
};
