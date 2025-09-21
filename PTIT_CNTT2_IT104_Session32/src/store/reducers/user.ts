import type { User } from "../../types";

export type UserState = { user: User };

const initialState: UserState = {
  user: {
    id: 1,
    userName: "Nguyễn Văn Nam",
    gender: "Nam",
    dateBirth: "20/03/2023",
    address: "Thanh Xuân, Hà Nội",
  },
};

export function userReducer(state: UserState = initialState): UserState {
  return state;
}
