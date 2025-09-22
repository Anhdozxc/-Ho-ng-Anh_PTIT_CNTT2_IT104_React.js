import type { CartItem } from "../../types";
export type CartState = { items: CartItem[] };
const load = (): CartItem[] => {
  try {
    const s = localStorage.getItem("cart_items");
    return s ? JSON.parse(s) : [];
  } catch {
    return [];
  }
};
const initialState: CartState = { items: load() };

type Action = {
  type: "CART_ADD";
  payload: { id: number; name: string; price: number };
};

export function cartReducer(
  state: CartState = initialState,
  action?: Action
): CartState {
  if (!action) return state;
  switch (action.type) {
    case "CART_ADD": {
      const idx = state.items.findIndex((it) => it.id === action.payload.id);
      if (idx >= 0) {
        const items = state.items.slice();
        items[idx] = { ...items[idx], qty: items[idx].qty + 1 };
        return { items };
      }
      return { items: [...state.items, { ...action.payload, qty: 1 }] };
    }
    default:
      return state;
  }
}
