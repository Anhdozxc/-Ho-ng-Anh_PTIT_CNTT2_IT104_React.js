import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 16 }}>
      <h2>Trang bạn tìm không tồn tại.</h2>
      <p>Có thể đường dẫn nhập sai hoặc trang đã được di chuyển.</p>

      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <Link to="/">
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
            Quay về trang chủ
          </button>
        </Link>
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: "8px 16px",
            backgroundColor: "blue",
            color: "white",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Quay lại
        </button>
      </div>
    </div>
  );
}
