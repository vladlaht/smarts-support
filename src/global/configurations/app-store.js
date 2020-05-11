import {applyMiddleware, createStore} from "redux";
import logger  from "redux-logger";
import thunk from "redux-thunk";
import combinedReducers from "../reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';

let middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
    middleware=[...middleware, logger];
}

export const appStore = createStore(combinedReducers, composeWithDevTools(applyMiddleware(...middleware)) );