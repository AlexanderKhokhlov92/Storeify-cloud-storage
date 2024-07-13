import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import fileReducer from "./slices/fileSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    file: fileReducer,
  },
});

export default store;
