import { createSlice } from "@reduxjs/toolkit";

type ViewState = { mode: "list" | "grid" };

const initialState: ViewState = { mode: "list" };

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    toggle(state) {
      state.mode = state.mode === "list" ? "grid" : "list";
    },
  },
});

export const { toggle } = viewSlice.actions;
export default viewSlice.reducer;
