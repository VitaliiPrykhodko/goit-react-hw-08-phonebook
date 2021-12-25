import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import {items, filter, loading, error} from "./Counter/counter-reducer";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  items,
  filter,
  loading,
  error
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk, logger],
});
