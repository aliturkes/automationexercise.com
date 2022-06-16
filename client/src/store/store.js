import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'
import adminReducer from "./admin.reducers";
import dealerReducer from "./dealer.reducer";



const reducer = combineReducers({ adminReducer, dealerReducer });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, promise, logger)));

export default store;