export type RandomState = { list: number[] };
const initialState: RandomState = { list: [] };
type Action = { type: "ADD_RANDOM"; payload: number };

export function randomReducer(
  state: RandomState = initialState,
  action: Action
): RandomState {
  switch (action.type) {
    case "ADD_RANDOM":
      return { list: [...state.list, action.payload] };
    default:
      return state;
  }
}
