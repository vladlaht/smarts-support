import CreateTicketReducer from "./CreateTicketReducer";
import CreatePaymentsTicketReducer from "./CreatePaymentsTicketReducer";
import TicketDetailsReducer from "./TicketDetailsReducer";
import AccountCardReducer from "../../account/reducers/AccountCardReducer";

export default {
    createTicket: CreateTicketReducer,
    createPaymentsTicketForm: CreatePaymentsTicketReducer,
    ticketDetails: TicketDetailsReducer,
    accountCard : AccountCardReducer
};
