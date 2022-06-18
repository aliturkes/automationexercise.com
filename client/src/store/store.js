import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'
import adminReducer from "./admin.reducers";
import companyReducer from "./company.reducer";
import authReducer from "./auth.reducer";


const reducer = combineReducers({ authReducer, adminReducer, companyReducer });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, promise, logger)));

export default store;