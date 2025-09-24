import { createSlice } from "@reduxjs/toolkit";

type RandomState = {
  list: number[];
};

const initialState: RandomState = { list: [] };

const randomSlice = createSlice({
  name: "random",
  initialState,
  reducers: {
    addRandom(state) {
      const n = Math.floor(Math.random() * 11);
      state.list.push(n);
    },
  },
});

export const { addRandom } = randomSlice.actions;
export default randomSlice.reducer;
