import { useReducer, useEffect, useState } from "react";
interface Todo {
  id: number;
  title: string;
}
interface AddAction {
  type: "ADD";
  payload: string;
}
interface InitAction {
  type: "INIT";
  payload: Todo[];
}
interface RemoveAction {
  type: "REMOVE";
  payload: number;
}
type Action = AddAction | InitAction | RemoveAction;

function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "INIT":
      return action.payload;
    case "ADD": {
      const newTodo: Todo = { id: Date.now(), title: action.payload };
      const updated = [...state, newTodo];
      localStorage.setItem("todos", JSON.stringify(updated));
      return updated;
    }
    case "REMOVE": {
      const updated = state.filter((t) => t.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(updated));
      return updated;
    }
    default:
      return state;
  }
}

function useTodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      dispatch({ type: "INIT", payload: JSON.parse(saved) });
    }
  }, []);

  const addTodo = () => {
    if (!input.trim()) return;
    dispatch({ type: "ADD", payload: input });
    setInput("");
  };
  const removeTodo = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa công việc này?")) {
      dispatch({ type: "REMOVE", payload: id });
    }
  };

  return { todos, input, setInput, addTodo, removeTodo };
}

export default function Exercise08() {
  const { todos, input, setInput, addTodo, removeTodo } = useTodoApp();
  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <input
        type="text"
        placeholder="Nhập tên công việc"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <button
        onClick={addTodo}
        style={{
          marginBottom: "20px",
          width: "106%",
          padding: "8px",
        }}
      >
        Thêm
      </button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
              border: "1px solid #ddd",
              padding: "6px",
              borderRadius: "4px",
            }}
          >
            {todo.title}
            <button onClick={() => removeTodo(todo.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
