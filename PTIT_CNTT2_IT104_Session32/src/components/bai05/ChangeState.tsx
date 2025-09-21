import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";

export default function ChangeState() {
  const company = useSelector((s: RootState) => s.companyState.name);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{company}</h2>
      <button onClick={() => dispatch({ type: "CHANGE_COMPANY" })}>
        Change state
      </button>
    </div>
  );
}
