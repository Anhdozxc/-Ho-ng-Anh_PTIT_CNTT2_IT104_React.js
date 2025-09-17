import { useState } from "react";
import { EditOutlined, DeleteOutlined, SaveOutlined } from "@ant-design/icons";
import type { Task } from "../types";

export default function TaskItem({
  task,
  onToggle,
  onUpdate,
  onDelete,
}: {
  task: Task;
  onToggle: () => void;
  onUpdate: (title: string) => void;
  onDelete: () => void;
}) {
  const [edit, setEdit] = useState(false);
  const [txt, setTxt] = useState(task.title);
  const save = () => {
    const s = txt.trim();
    if (!s) return;
    onUpdate(s);
    setEdit(false);
  };
  return (
    <div className="card item">
      <label className="left">
        <input type="checkbox" checked={task.completed} onChange={onToggle} />
        {edit ? (
          <input
            className="editbox"
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && save()}
            autoFocus
          />
        ) : (
          <span className={task.completed ? "done" : ""}>{task.title}</span>
        )}
      </label>
      <div className="actions">
        {edit ? (
          <button className="icon" title="Lưu" onClick={save}>
            <SaveOutlined />
          </button>
        ) : (
          <button className="icon" title="Sửa" onClick={() => setEdit(true)}>
            <EditOutlined />
          </button>
        )}
        <button className="icon danger" title="Xóa" onClick={onDelete}>
          <DeleteOutlined />
        </button>
      </div>
    </div>
  );
}
