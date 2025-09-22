import type { Product } from "../../types";
import Badge from "./Badge";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";

export default function ProductItem({ p }: { p: Product }) {
  const dispatch = useDispatch();
  const items = useSelector((s: RootState) => s.cart.items);

  const add = () => {
    const currentQty = items.find((it) => it.id === p.id)?.qty ?? 0;
    if (currentQty + 1 > p.stock) {
      window.alert("Số lượng sản phẩm vượt quá số lượng trong kho");
      return;
    }
    dispatch({
      type: "CART_ADD",
      payload: { id: p.id, name: p.name, price: p.price },
    });
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        padding: 16,
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <img
        src={p.image}
        width={120}
        height={80}
        style={{ objectFit: "cover", borderRadius: 2 }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 20, fontWeight: 700 }}>{p.name}</div>
        <p style={{ margin: "6px 0 0 0", color: "#555" }}>{p.desc}</p>
      </div>
      <div style={{ display: "grid", justifyItems: "end", gap: 8 }}>
        <span>
          <Badge>{`${p.price} USD`}</Badge>
        </span>
        <button onClick={add}>Add</button>
      </div>
    </div>
  );
}
