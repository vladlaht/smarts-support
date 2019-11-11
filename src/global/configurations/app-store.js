import {applyMiddleware, createStore} from "redux";
import logger  from "redux-logger";
import thunk from "redux-thunk";
import CombinedReducers from "../reducers/index";

let middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
    middleware=[...middleware, logger];
}

export const appStore = createStore(CombinedReducers, applyMiddleware(...middleware));