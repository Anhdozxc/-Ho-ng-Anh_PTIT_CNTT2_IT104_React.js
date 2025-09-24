import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../app/store";
import { increase, decrease, reset } from "./counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ padding: 16 }}>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increase())}>Increase</button>{" "}
      <button onClick={() => dispatch(decrease())}>Decrease</button>{" "}
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
