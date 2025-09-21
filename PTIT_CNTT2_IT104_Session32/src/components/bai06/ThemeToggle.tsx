import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import type { RootState } from "../../store";

export default function ThemeToggle() {
  const dark = useSelector((s: RootState) => s.themeState.dark);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("theme_dark", dark ? "1" : "0");
  }, [dark]);

  const box = {
    background: dark ? "#000" : "#fff",
    color: dark ? "#fff" : "#000",
    borderRadius: 8,
    padding: 16,
    minHeight: 150,
  } as const;

  return (
    <div style={box}>
      <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <input
          type="checkbox"
          checked={dark}
          onChange={(e) =>
            dispatch({ type: "THEME_SET", payload: e.target.checked })
          }
        />
        {dark ? "Tối" : "Sáng"}
      </label>
    </div>
  );
}
