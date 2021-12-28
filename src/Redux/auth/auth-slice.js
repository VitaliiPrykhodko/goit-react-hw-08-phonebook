import { createSlice } from "@reduxjs/toolkit";
import authOperation from "./auth-operation";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchCurrentUser: false
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperation.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperation.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperation.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperation.fetchCurrentUser.pending](state) {
      state.isFetchCurrentUser = true
    },
    [authOperation.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchCurrentUser = false
    },
    [authOperation.fetchCurrentUser.rejected](state) {
      state.isFetchCurrentUser = false
    },
  },
});

export default authSlice.reducer;