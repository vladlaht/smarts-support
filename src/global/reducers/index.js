import { combineReducers } from "redux";
import ticketReducers from "../../modules/tickets/reducers";
import detailsReducers from "../../modules/ticketDetails/reducers";
import accountReducers from "../../modules/account/reducers";

export default combineReducers({
   ...ticketReducers,
   ...detailsReducers,
   ...accountReducers
});
