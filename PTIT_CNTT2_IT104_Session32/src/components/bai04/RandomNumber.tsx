import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";

export default function RandomNumber() {
  const nums = useSelector((s: RootState) => s.randomState.list);
  const dispatch = useDispatch();

  const gen = () => {
    const n = Math.floor(Math.random() * 100) + 1; // 1..100
    dispatch({ type: "ADD_RANDOM", payload: n });
  };

  return (
    <div>
      <div style={{ fontWeight: 600 }}>[{nums.join(",")}]</div>
      <button onClick={gen}>Generate Random Number</button>
    </div>
  );
}
