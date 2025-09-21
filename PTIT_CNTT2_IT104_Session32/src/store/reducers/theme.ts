export type ThemeState = { dark: boolean };

const initialState: ThemeState = {
  dark: localStorage.getItem("theme_dark") === "1", // sáng
};

type Action = { type: "THEME_SET"; payload: boolean };

export function themeReducer(
  state: ThemeState = initialState,
  action: Action
): ThemeState {
  if (action.type === "THEME_SET") return { dark: action.payload };
  return state;
}
