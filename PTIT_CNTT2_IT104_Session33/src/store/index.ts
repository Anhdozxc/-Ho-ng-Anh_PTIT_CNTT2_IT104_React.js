import { legacy_createStore as createStore, combineReducers } from "redux";
import { productsReducer } from "./reducers/products";
import { cartReducer } from "./reducers/cart";
import { noticeReducer } from "./reducers/notice";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  notice: noticeReducer || (((s = {}) => s) as unknown),
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;

// Lưu giỏ hàng vào localStorage
store.subscribe(() => {
  const items = (store.getState() as RootState).cart.items;
  localStorage.setItem("cart_items", JSON.stringify(items));
});
