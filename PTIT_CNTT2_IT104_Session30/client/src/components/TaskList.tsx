import TaskItem from "./TaskItem";
import type { Task } from "../types";

export default function TaskList({
  tasks,
  onToggle,
  onUpdate,
  onDelete,
}: {
  tasks: Task[];
  onToggle: (t: Task) => void;
  onUpdate: (id: number, title: string) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <>
      {tasks.map((t) => (
        <TaskItem
          key={t.id}
          task={t}
          onToggle={() => onToggle(t)}
          onUpdate={(title) => onUpdate(t.id, title)}
          onDelete={() => onDelete(t.id)}
        />
      ))}
    </>
  );
}
