import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductList() {
  const [params, setParams] = useSearchParams();
  const urlValue = params.get("search") || "";

  const [keyword, setKeyword] = useState(urlValue);

  useEffect(() => {
    setKeyword(urlValue);
  }, [urlValue]);

  const handleSearch = () => {
    const value = keyword.trim();
    if (value === "") setParams({});
    else setParams({ search: value }); // Cập nhật search
  };

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>

      <div>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Nhập từ khóa..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <b>{p.name}</b> — {p.price.toLocaleString("vi-VN")} VND
            <div>{p.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
