import { Link } from "react-router-dom";
import { tasks } from "../data/tasks";

export default function TaskList() {
  return (
    <div style={{ padding: 24 }}>
      <h2>Danh sách công việc</h2>
      <ul>
        {tasks.map((t) => (
          <li key={t.id} style={{ marginBottom: 12 }}>
            <strong>{t.title}</strong>
            <div>{t.description}</div>
            <Link to={`/task/${t.id}`}>Xem chi tiết</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
