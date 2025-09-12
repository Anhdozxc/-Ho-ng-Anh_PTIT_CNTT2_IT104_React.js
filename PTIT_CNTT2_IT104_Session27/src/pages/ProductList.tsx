import { Link } from "react-router-dom";

const products = [
  {
    id: "1",
    name: "Laptop Dell XPS 13",
    price: 35000000,
    description: "Laptop cao cấp với thiết kế mỏng nhẹ.",
  },
  {
    id: "2",
    name: "iPhone 14 Pro",
    price: 30000000,
    description: "Hiệu năng mạnh mẽ và camera sắc nét.",
  },
  {
    id: "3",
    name: "Samsung Galaxy S22",
    price: 25000000,
    description: "Thiết kế đẹp, màn hình AMOLED sống động.",
  },
  {
    id: "4",
    name: "Tai nghe Sony WH-1000XM4",
    price: 7000000,
    description: "Chống ồn chủ động, pin lâu.",
  },
  {
    id: "5",
    name: "Apple Watch Series 8",
    price: 12000000,
    description: "Theo dõi sức khỏe thông minh.",
  },
];

export default function ProductList() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
      <h2>Danh sách sản phẩm</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8 }}
          >
            <h3>{p.name}</h3>
            <p>Giá: {p.price.toLocaleString("vi-VN")} VND</p>
            <Link to={`/products/${p.id}`}>Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export { products };
