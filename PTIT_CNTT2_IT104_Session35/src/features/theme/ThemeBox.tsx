import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../app/store";
import { toggle } from "./themeSlice";

export default function ThemeBox() {
  const mode = useSelector((s: RootState) => s.theme.mode);
  const dispatch = useDispatch<AppDispatch>();

  const isDark = mode === "dark";

  return (
    <div
      style={{
        padding: 36,
        border: "1px solid #ccc",
        display: "flex",
        background: isDark ? "#333" : "#fff",
        color: isDark ? "#fff" : "#333",
      }}
    >
      <button onClick={() => dispatch(toggle())}>
        {isDark ? "Dark" : "Light"}
      </button>
    </div>
  );
}
