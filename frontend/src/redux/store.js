import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import fileReducer from "./slices/fileSlice";
import modalReducer from "./slices/modalSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    file: fileReducer,
    modal: modalReducer,
  },
});

export default store;
