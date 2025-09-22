import type { CartItem } from "../../types";

export default function CartRow({ i, item }: { i: number; item: CartItem }) {
  const cell = { padding: "10px 8px", borderBottom: "1px solid #eee" };
  return (
    <tr>
      <td style={cell}>{i}</td>
      <td style={cell}>{item.name}</td>
      <td style={cell}>{item.price} USD</td>
      <td style={cell}>
        <input
          type="number"
          defaultValue={item.qty}
          min={1}
          style={{ width: 56, padding: 6 }}
          onInput={(e) => {
            const t = e.currentTarget;
            if (t.value === "" || Number(t.value) < 1) t.value = "1";
          }}
        />
      </td>
      <td style={cell}>
        <button style={{ marginRight: 6 }}>Update</button>
        <button>Delete</button>
      </td>
    </tr>
  );
}
