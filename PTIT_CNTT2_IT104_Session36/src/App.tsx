import FilterControls from "./components/FilterControls";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./app/store";
import { fetchTasks } from "./features/tasks/tasksSlice";
import { deleteTask } from "./features/tasks/tasksSlice";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

type UITaskPriority = "low" | "medium" | "high";
type UITask = {
  id: string;
  title: string;
  completed: boolean;
  priority: UITaskPriority;
};

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, loading, error } = useSelector((s: RootState) => s.tasks);

  const [confirm, setConfirm] = useState<{
    open: boolean;
    id?: string | number;
    name?: string;
  }>({ open: false });

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const uiTasks: UITask[] = list.map((t) => ({
    id: String(t.id),
    title: t.taskName,
    completed: t.completed,
    priority: t.priority.toLowerCase() as UITaskPriority,
  }));

  const askDelete = (idStr: string, name: string) => {
    setConfirm({ open: true, id: idStr, name });
  };

  const handleConfirmDelete = async () => {
    if (confirm.id == null) return;
    await dispatch(deleteTask(confirm.id)).unwrap();
    setConfirm({ open: false });
  };
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">📝 Task Manager</h1>

      <TaskForm onAdd={() => {}} />
      <FilterControls
        status="all"
        priority="all"
        search=""
        onStatusChange={() => {}}
        onPriorityChange={() => {}}
        onSearchChange={() => {}}
      />

      {error && <div className="p-3 text-red-600">Lỗi: {error}</div>}

      <div>
        {uiTasks.map((t) => (
          <TaskItem
            key={t.id}
            {...t}
            onToggle={() => {}}
            onDelete={() => askDelete(t.id, t.title)}
          />
        ))}
      </div>

      <div
        style={{
          display: loading ? "flex" : "none",
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1300,
        }}
      >
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent" />
      </div>

      <Dialog open={confirm.open} onClose={() => setConfirm({ open: false })}>
        <DialogTitle>Xác nhận</DialogTitle>
        <DialogContent>
          Bạn có chắc chắn muốn xóa công việc <b>&lt;{confirm.name}&gt;</b>{" "}
          không?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirm({ open: false })}>Hủy</Button>
          <Button
            color="error"
            variant="contained"
            onClick={handleConfirmDelete}
          >
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
