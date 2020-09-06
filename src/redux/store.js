import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers";
import reduxThunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["authState"],
};

const persistedReducer = persistReducer(persistConfig, allReducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = applyMiddleware(reduxThunk);

//const store = createStore(persistedReducer, composeEnhancers(enhancers));
const store = createStore(persistedReducer, composeEnhancers(enhancers));

const persistor = persistStore(store);

export { store, persistor };
