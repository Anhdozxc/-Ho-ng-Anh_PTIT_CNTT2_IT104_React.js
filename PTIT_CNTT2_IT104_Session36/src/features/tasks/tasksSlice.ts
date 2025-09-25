import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Task, Priority } from "./taskTypes";
import { http } from "../../api/http";

export const fetchTasks = createAsyncThunk<Task[]>("tasks/fetch", async () => {
  const res = await http.get<Task[]>("/tasks");
  return res.data;
});

export const addTask = createAsyncThunk<
  Task,
  { taskName: string; priority: Priority }
>("tasks/add", async (payload) => {
  const res = await http.post<Task>("/tasks", {
    taskName: payload.taskName,
    priority: payload.priority,
    completed: false,
  });
  return res.data;
});

export const deleteTask = createAsyncThunk<string | number, string | number>(
  "tasks/delete",
  async (id) => {
    await http.delete(`/tasks/${id}`);
    return id;
  }
);

type TasksState = {
  list: Task[];
  loading: boolean;
  error: string | null;
};

const initialState: TasksState = { list: [], loading: false, error: null };

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchTasks.pending, (s) => {
      s.loading = true;
      s.error = null;
    });
    b.addCase(fetchTasks.fulfilled, (s, a) => {
      s.loading = false;
      s.list = a.payload;
    });
    b.addCase(fetchTasks.rejected, (s, a) => {
      s.loading = false;
      s.error = a.error.message || "Fetch failed";
    });

    b.addCase(addTask.pending, (s) => {
      s.loading = true;
    });
    b.addCase(addTask.fulfilled, (s, a) => {
      s.loading = false;
      s.list.push(a.payload);
    });
    b.addCase(addTask.rejected, (s, a) => {
      s.loading = false;
      s.error = a.error.message || "Add failed";
    });

    b.addCase(deleteTask.pending, (s) => {
      s.loading = true;
    });
    b.addCase(deleteTask.fulfilled, (s, a) => {
      s.loading = false;
      s.list = s.list.filter((t) => String(t.id) !== String(a.payload));
    });
    b.addCase(deleteTask.rejected, (s, a) => {
      s.loading = false;
      s.error = a.error.message || "Delete failed";
    });
  },
});

export default tasksSlice.reducer;
