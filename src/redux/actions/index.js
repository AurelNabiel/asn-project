// actions.js

import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  activeHash: "#",
};

export const activeHash = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    changeState: (state, action) => {
      const data = action.payload;
      state.activeHash = data.activeHash;
      
    },
  },
});

export const { changeState, resetData } = activeHash.actions;
export default activeHash.reducer;