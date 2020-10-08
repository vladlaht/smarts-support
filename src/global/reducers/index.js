import { combineReducers } from "redux";
import ticketReducers from "../../modules/tickets/reducers";
import ticketDetailsReducers from "../../modules/ticketDetails/reducers";
import accountReducers from "../../modules/account/reducers";
import accountDetailsReducers from "../../modules/accountDetails/reducers";

export default combineReducers({
   ...ticketReducers,
   ...ticketDetailsReducers,
   ...accountReducers,
   ...accountDetailsReducers
});
