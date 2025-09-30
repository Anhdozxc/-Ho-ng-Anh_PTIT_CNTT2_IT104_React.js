import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

export default function Bai3() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const addProduct = () => {
    if (!name || !price || !imageUrl) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    const newProduct: Product = {
      id: Date.now(),
      name,
      price: Number(price),
      description: desc,
      imageUrl,
    };
    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
    setDesc("");
    setImageUrl("");
  };

  const removeProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Quản lý sản phẩm</h2>

      <div
        style={{ display: "flex", flexDirection: "column", gap: 8, width: 400 }}
      >
        <input
          placeholder="Tên sản phẩm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Giá"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <textarea
          placeholder="Mô tả"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          placeholder="Ảnh URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button onClick={addProduct}>Thêm sản phẩm</button>
      </div>

      <div
        style={{ display: "flex", gap: 16, marginTop: 20, flexWrap: "wrap" }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 12,
              width: 220,
            }}
          >
            <img
              src={p.imageUrl}
              alt={p.name}
              width="100%"
              style={{ borderRadius: 4 }}
            />
            <h3>
              {p.name} - {p.price} đ
            </h3>
            <p>{p.description}</p>
            <button
              style={{ color: "red" }}
              onClick={() => removeProduct(p.id)}
            >
              Xóa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
