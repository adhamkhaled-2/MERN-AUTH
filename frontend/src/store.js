import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.js";
import { apiSlice } from "../src/slices/apiSlice.js";
const store = configureStore({
  reducer: {
    auth: authReducer, // add your slice here
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(apiSlice.middleware),
  devTools: true,
});
export default store;
