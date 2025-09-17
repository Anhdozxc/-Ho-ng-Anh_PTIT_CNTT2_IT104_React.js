import { useEffect, useState, useMemo } from "react";
import { api } from "../api";
import type { Task, Filter } from "../types";
import AddTask from "../components/AddTask";
import FilterTabs from "../components/FilterTabs";
import TaskList from "../components/TaskList";
import ConfirmModal from "../components/ConfirmModal";
import "../styles.css";

export default function Baitap() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  // Bài 4
  const [pendingDelete, setPendingDelete] = useState<Task | null>(null);

  useEffect(() => {
    api.get<Task[]>("/tasks").then((r) => setTasks(r.data));
  }, []);

  const filtered = useMemo(() => {
    if (filter === "done") return tasks.filter((t) => t.completed);
    if (filter === "doing") return tasks.filter((t) => !t.completed);
    return tasks;
  }, [tasks, filter]);

  const addTask = async (title: string) => {
    const { data } = await api.post<Task>("/tasks", {
      title,
      completed: false,
    });
    setTasks((prev) => [...prev, data]);
  };

  const toggleTask = async (t: Task) => {
    const { data } = await api.patch<Task>(`/tasks/${t.id}`, {
      completed: !t.completed,
    });
    setTasks((prev) => prev.map((x) => (x.id === t.id ? data : x)));
  };

  const updateTask = async (id: number, title: string) => {
    const { data } = await api.patch<Task>(`/tasks/${id}`, { title });
    setTasks((prev) => prev.map((x) => (x.id === id ? data : x)));
  };

  // modal
  const askDelete = (id: number) => {
    const t = tasks.find((x) => x.id === id) || null;
    setPendingDelete(t);
  };

  // nhấn xóa
  const confirmDelete = async () => {
    if (!pendingDelete) return;
    await api.delete(`/tasks/${pendingDelete.id}`);
    setTasks((prev) => prev.filter((t) => t.id !== pendingDelete.id));
    setPendingDelete(null);
  };

  // nhấn hủy
  const cancelDelete = () => setPendingDelete(null);

  const clearDone = async () => {
    const done = tasks.filter((t) => t.completed);
    await Promise.all(done.map((t) => api.delete(`/tasks/${t.id}`)));
    setTasks((prev) => prev.filter((t) => !t.completed));
  };

  const clearAll = async () => {
    await Promise.all(tasks.map((t) => api.delete(`/tasks/${t.id}`)));
    setTasks([]);
  };

  return (
    <div className="wrap">
      <h1>Quản lý công việc</h1>

      <AddTask onAdd={addTask} titles={tasks.map((t) => t.title)} />
      <FilterTabs value={filter} onChange={setFilter} />

      <div className="list-scroll">
        <TaskList
          tasks={filtered}
          onToggle={toggleTask}
          onUpdate={updateTask}
          onDelete={askDelete}
        />
      </div>

      <div className="row">
        <button className="btn danger" onClick={clearDone}>
          Xóa công việc hoàn thành
        </button>
        <button className="btn danger" onClick={clearAll}>
          Xóa tất cả công việc
        </button>
      </div>

      {/* Xác nhận delete */}
      <ConfirmModal
        open={!!pendingDelete}
        title="Xác nhận"
        message={
          <>
            Bạn có chắc chắn muốn xóa công việc{" "}
            <b>&lt;{pendingDelete?.title}&gt;</b> không?
          </>
        }
        onCancel={cancelDelete}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
