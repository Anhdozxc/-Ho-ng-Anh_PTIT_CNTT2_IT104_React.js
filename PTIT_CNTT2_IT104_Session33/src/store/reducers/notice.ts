export type NoticeState = { message: string | null };
const initialState: NoticeState = { message: null };

export function noticeReducer(state: NoticeState = initialState) {
  return state;
}
