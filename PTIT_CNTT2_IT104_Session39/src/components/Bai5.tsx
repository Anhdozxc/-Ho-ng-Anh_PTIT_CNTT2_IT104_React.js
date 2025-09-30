import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

export default function Bai5() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Quần đùi",
      price: 5000,
      description: "Mô tả quần đùi",
      imageUrl:
        "https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2024/06/quan-short-nam-lacoste-men-s-slim-fit-stretch-cotton-bermuda-shorts-fh2647-00-02s-mau-beige-size-38-30-665fc181732b2-05062024083809.jpg",
    },
    {
      id: 2,
      name: "Áo hoa",
      price: 3000,
      description: "Mô tả áo hoa",
      imageUrl:
        "https://vn-live-01.slatic.net/p/e940f25326e485902cdc663171fabb03.jpg",
    },
    {
      id: 3,
      name: "Mũ hoa",
      price: 7000,
      description: "Mô tả mũ hoa",
      imageUrl:
        "https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/11/mu-nike-legacy-91-triple-ba4534-021-mau-xam-654b3a0d3dd39-08112023143437.jpg",
    },
  ]);

  const removeProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Danh sách sản phẩm</h2>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
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
              onClick={() => removeProduct(p.id)}
              style={{ color: "red" }}
            >
              Xóa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
