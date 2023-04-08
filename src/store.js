import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Global/Auth/authSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
