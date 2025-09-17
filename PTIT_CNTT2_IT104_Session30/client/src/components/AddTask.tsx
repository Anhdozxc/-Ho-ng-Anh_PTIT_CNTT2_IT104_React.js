import { useState } from "react";

type Props = {
  onAdd: (title: string) => void;
  titles: string[];
};

export default function AddTask({ onAdd, titles }: Props) {
  const [text, setText] = useState("");
  const [err, setErr] = useState("");

  const handleAdd = () => {
    const value = text.trim();

    if (!value) {
      setErr("Tên công việc không được để trống.");
      return;
    }
    if (titles.includes(value)) {
      setErr("Tên công việc đã tồn tại.");
      return;
    }

    onAdd(value);
    setText("");
    setErr("");
  };

  return (
    <div className="card">
      <input
        className={`input ${err ? "error" : ""}`}
        placeholder="Nhập tên công việc"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          if (err) setErr("");
        }}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      {err && <div className="error-text">{err}</div>}

      <button className="btn primary" onClick={handleAdd}>
        Thêm công việc
      </button>
    </div>
  );
}
