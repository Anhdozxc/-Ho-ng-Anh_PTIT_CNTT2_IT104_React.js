import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import CartRow from "./CartRow";

export default function Cart() {
  const items = useSelector((s: RootState) => s.cart.items);
  const total = items.reduce((s, x) => s + x.price * x.qty, 0);

  const head = {
    padding: "10px 8px",
    borderBottom: "1px solid #e5e7eb",
    fontWeight: 700,
  };

  return (
    <div>
      <div style={{ border: "1px solid #e5e7eb", borderRadius: 4 }}>
        <div
          style={{
            background: "#f2dede",
            color: "#a94442",
            padding: "10px 12px",
            fontWeight: 700,
          }}
        >
          Your Cart
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={head}>STT</th>
              <th style={head}>Name</th>
              <th style={head}>Price</th>
              <th style={head}>Quantity</th>
              <th style={head}>Action</th>
            </tr>
          </thead>

          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ padding: "10px 8px" }}>
                  <b style={{ marginLeft: 16 }}>Empty product in your cart</b>
                </td>
              </tr>
            ) : (
              <>
                {items.map((it, idx) => (
                  <CartRow key={it.id} i={idx + 1} item={it} />
                ))}
                <tr>
                  <td
                    colSpan={5}
                    style={{ textAlign: "left", padding: "10px 8px" }}
                  >
                    There are <b>{items.length}</b> items in your shopping cart.
                    <span
                      style={{ marginLeft: 90, color: "red", fontWeight: 700 }}
                    >
                      {total} USD
                    </span>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
