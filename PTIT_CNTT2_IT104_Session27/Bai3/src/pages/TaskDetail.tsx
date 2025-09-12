import { useParams, useNavigate } from "react-router-dom";
import { tasks } from "../data/tasks";

export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks.find((t) => String(t.id) === id);

  if (!task) {
    return (
      <div>
        <h2>Không tìm thấy công việc</h2>
        <button onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    );
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
}
