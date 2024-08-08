import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  files: [],
  currentDir: null,
  appModalDisplay: "none",
  dirStack: [],
};

const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    setFiles: (state, action) => {
      state.files = action.payload;
    },
    setCurrentDir: (state, action) => {
      state.currentDir = action.payload;
    },
    addFile: (state, action) => {
      state.files = [...state.files, action.payload];
    },
    setAppModalDisplay: (state, action) => {
      state.appModalDisplay = action.payload;
    },
    pushToStack: (state, action) => {
      state.dirStack = [...state.dirStack, action.payload];
    },
    popFromStack: (state) => {
      state.dirStack = state.dirStack.slice(0, -1);
    },
  },
});

export const {
  setFiles,
  setCurrentDir,
  addFile,
  setAppModalDisplay,
  pushToStack,
  popFromStack,
} = fileSlice.actions;

export default fileSlice.reducer;
