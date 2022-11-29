import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isReady: false,
};

const gleanSearchSlice = createSlice({
  name: "gleanSearch",
  initialState,
  reducers: {
    setIsReady: (state, action: PayloadAction<boolean>) => {
      console.log("setting");
      state.isReady = action.payload;
    },
  },
});

export const selectIsReady = (state) => state.gleanSearch.isReady;
export const { setIsReady } = gleanSearchSlice.actions;

export const gleanSearchReducer = gleanSearchSlice.reducer;
