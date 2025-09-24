import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import randomReducer from "../features/random/randomSlice";
import themeReducer from "../features/theme/themeSlice";
import viewReducer from "../features/bai4/viewSlice";
import menuReducer from "../features/menu/menuSlice";
import languageReducer from "../features/language/languageSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    random: randomReducer,
    theme: themeReducer,
    view: viewReducer,
    menu: menuReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
