import { legacy_createStore as createStore, combineReducers } from "redux";
import { userReducer } from "./reducers/user";
import { usersReducer } from "./reducers/users";
import { counterReducer } from "./reducers/counter";
import { randomReducer } from "./reducers/random";
import { companyReducer } from "./reducers/company";
import { themeReducer } from "./reducers/theme";

const rootReducer = combineReducers({
  userState: userReducer,
  usersState: usersReducer,
  counterState: counterReducer,
  randomState: randomReducer,
  companyState: companyReducer,
  themeState: themeReducer,
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;
