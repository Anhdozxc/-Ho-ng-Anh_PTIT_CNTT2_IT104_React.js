import type { Filter } from "../types";

export default function FilterTabs({
  value,
  onChange,
}: {
  value: Filter;
  onChange: (f: Filter) => void;
}) {
  return (
    <div className="card tabs">
      <button
        className={`tab ${value === "all" ? "active" : ""}`}
        onClick={() => onChange("all")}
      >
        Tất cả
      </button>
      <button
        className={`tab ${value === "done" ? "active" : ""}`}
        onClick={() => onChange("done")}
      >
        Hoàn thành
      </button>
      <button
        className={`tab ${value === "doing" ? "active" : ""}`}
        onClick={() => onChange("doing")}
      >
        Đang thực hiện
      </button>
    </div>
  );
}
