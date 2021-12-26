import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import reducer from "./Counter/counter-reducer";
import authReducer from "./auth/auth-slice";

const authPersistConfig = {
  key: 'auth',
  storage,
   whitelist: ['token'],
}

export const store = configureStore({
 reducer: {
    contacts: reducer,
    auth: persistReducer(authPersistConfig, authReducer),
},
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
