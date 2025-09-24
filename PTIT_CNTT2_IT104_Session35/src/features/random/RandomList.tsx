import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../app/store";
import { addRandom } from "./randomSlice";

export default function RandomList() {
  const list = useSelector((s: RootState) => s.random.list);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ padding: 16 }}>
      <h1>List number: [{list.join(",")}]</h1>
      <button onClick={() => dispatch(addRandom())}>Random number</button>
    </div>
  );
}
