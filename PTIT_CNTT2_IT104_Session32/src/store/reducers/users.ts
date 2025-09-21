import type { User } from "../../types";

export type UsersState = { users: User[] };

const initialState: UsersState = {
  users: [
    {
      id: 1,
      userName: "Nguyễn Văn A",
      gender: "Nam",
      dateBirth: "20/11/2023",
      address: "Thanh Xuân, Hà Nội",
    },
    {
      id: 2,
      userName: "Nguyễn Thị B",
      gender: "Nữ",
      dateBirth: "20/11/2023",
      address: "Cầu Giấy, Hà Nội",
    },
  ],
};

export function usersReducer(state: UsersState = initialState): UsersState {
  return state;
}
