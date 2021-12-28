import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async credentials => {
    try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;;
  } catch (error) {
    return alert('Such a user already exists')
  }
});

const login = createAsyncThunk("auth/login", async credentials => {
    try {
        const { data } = await axios.post("/users/login", credentials);
        token.set(data.token);
    return data;;
  } catch (error) {
    return alert('Incorrect login or password')
  }
});

const logOut = createAsyncThunk("auth/logOut", async () => {
    try {
        const { data } = await axios.post("/users/logout");
        token.unset(data.token);
    return data;;
  } catch (error) {
  }
});

const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistToken = state.auth.token
    if (persistToken === null) {
        return thunkAPI.rejectWithValue()
    }
    token.set(persistToken)
    const { data } = await axios.get('/users/current')
    return data
})

const authOperation = {
    register,
    login,
    logOut,
    fetchCurrentUser
};

export default authOperation;
