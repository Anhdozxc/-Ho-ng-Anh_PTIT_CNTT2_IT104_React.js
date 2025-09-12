import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 16 }}>
      <h1>Trang chủ</h1>
      <p>
        Đây là trang chủ. Thử gõ một đường dẫn không tồn tại ví dụ /abcxyz để
        xem trang 404.
      </p>
      <Link to="/about">
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "blue",
            color: "white",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          About
        </button>
      </Link>
    </div>
  );
}
