import { useParams, Link } from "react-router-dom";
import { products } from "./ProductList";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div>
        <h2>Chi tiết sản phẩm</h2>
        <p style={{ color: "red" }}>Sản phẩm không tồn tại.</p>
        <Link to="/products">Quay lại danh sách sản phẩm</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Chi tiết sản phẩm</h2>
      <h3>{product.name}</h3>
      <p>Giá: {product.price.toLocaleString("vi-VN")} VND</p>
      <p>Mô tả: {product.description}</p>
      <Link to="/products">Quay lại danh sách sản phẩm</Link>
    </div>
  );
}
