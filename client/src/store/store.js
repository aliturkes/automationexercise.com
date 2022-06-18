import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'
import adminReducer from "./admin.reducers";
import companyReducer from "./company.reducer";
import authReducer from "./auth.reducer";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
   key: 'root',
   storage,
   whitelist: ["adminReducer","companyReducer","authReducer"],
   blacklist: [],
};



const reducer = combineReducers({ authReducer, adminReducer, companyReducer });

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk, promise, logger)));

export let persistor = persistStore(store);

export default store;