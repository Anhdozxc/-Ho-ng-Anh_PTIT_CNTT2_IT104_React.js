import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const products = useSelector((s: RootState) => s.products.list);

  return (
    <div style={{ border: "1px solid #cbd5e1", borderRadius: 4 }}>
      <div
        style={{
          background: "#1e5aa0",
          color: "#fff",
          padding: "10px 12px",
          fontWeight: 700,
        }}
      >
        List Products
      </div>
      {products.map((p) => (
        <ProductItem key={p.id} p={p} />
      ))}
    </div>
  );
}
