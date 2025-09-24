import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../app/store";
import { toggle } from "./viewSlice";

const data = [1, 2, 3, 4];

export default function ViewMode() {
  const mode = useSelector((s: RootState) => s.view.mode);
  const dispatch = useDispatch<AppDispatch>();
  const isList = mode === "list";

  return (
    <div style={{ padding: 16 }}>
      <button onClick={() => dispatch(toggle())}>
        {isList ? "List mode" : "Grid mode"}
      </button>

      <div
        style={{
          marginTop: 16,
          display: "flex",
          width: isList ? 340 : "100%",
          flexDirection: isList ? "column" : "row",
          gap: isList ? 16 : 32,
          alignItems: "center",
        }}
      >
        {data.map((n) => (
          <div
            key={n}
            style={{
              background: "#e74c3c",
              color: "#111",
              textAlign: "center",
              width: isList ? "100%" : 110,
              height: 48,
              lineHeight: "48px",
            }}
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}
