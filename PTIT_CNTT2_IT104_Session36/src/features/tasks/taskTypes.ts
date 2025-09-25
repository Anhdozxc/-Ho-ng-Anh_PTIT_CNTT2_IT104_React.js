export type Priority = "LOW" | "MEDIUM" | "HIGH";

export type Task = {
  id: string | number;
  taskName: string;
  completed: boolean;
  priority: Priority;
};
