import CreateTicketReducer from "./CreateTicketReducer";
import CreatePaymentTicketReducer from "./CreatePaymentTicketReducer";
import TicketsTableReducer from "./TicketsTableReducer";
import FetchTicketsReducer from "./FetchTicketsReducer";


export default {
    createTicket: CreateTicketReducer,
    createPaymentTicketForm: CreatePaymentTicketReducer,
    ticketsTableData : TicketsTableReducer,
    tickets: FetchTicketsReducer
    
};
