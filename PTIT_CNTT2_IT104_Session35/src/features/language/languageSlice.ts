import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export type Lang = "en" | "vi";

type LanguageState = { current: Lang };

const initialState: LanguageState = { current: "en" };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<Lang>) {
      state.current = action.payload;
    },
    toggleLanguage(state) {
      state.current = state.current === "en" ? "vi" : "en";
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
