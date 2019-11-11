import { combineReducers } from "redux";
import ticketModalReducers from "../../modules/tickets/reducers";

export default combineReducers({
   ...ticketModalReducers
});
