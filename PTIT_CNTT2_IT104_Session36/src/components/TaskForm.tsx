import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import { addTask } from "../features/tasks/tasksSlice";

type UIPrio = "low" | "medium" | "high";

interface TaskFormProps {
  onAdd?: (title: string, priority: UIPrio) => void;
}

const TaskForm: React.FC<TaskFormProps> = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<UIPrio>("medium");
  const [error, setError] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const tasks = useSelector((s: RootState) => s.tasks.list);
  const dispatch = useDispatch<AppDispatch>();

  const toServerPrio = {
    low: "LOW",
    medium: "MEDIUM",
    high: "HIGH",
  } as const;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = title.trim();

    if (!name) {
      setError("Công việc không được bỏ trống");
      inputRef.current?.focus();
      return;
    }
    const duplicated = tasks.some(
      (t) => t.taskName.trim().toLowerCase() === name.toLowerCase()
    );
    if (duplicated) {
      setError("Tên công việc không được trùng");
      inputRef.current?.focus();
      return;
    }
    if (!priority) {
      setError("Phải chọn độ ưu tiên");
      return;
    }

    await dispatch(
      addTask({ taskName: name, priority: toServerPrio[priority] })
    ).unwrap();

    setTitle("");
    setPriority("medium");
    setError("");
    inputRef.current?.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-md"
    >
      <TextField
        inputRef={inputRef}
        label={error ? "Công việc không được bỏ trống" : "Công việc mới"}
        error={Boolean(error)}
        variant="outlined"
        size="small"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          if (error) setError("");
        }}
        className="flex-1"
      />
      <FormControl size="small" className="w-36">
        <InputLabel>Ưu tiên</InputLabel>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value as UIPrio)}
          label="Ưu tiên"
        >
          <MenuItem value="low">Thấp</MenuItem>
          <MenuItem value="medium">Trung bình</MenuItem>
          <MenuItem value="high">Cao</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Thêm
      </Button>
    </form>
  );
};

export default TaskForm;
