import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";

export default function Counter() {
  const count = useSelector((s: RootState) => s.counterState.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Giá trị: {count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Tăng</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Giảm</button>
    </div>
  );
}
