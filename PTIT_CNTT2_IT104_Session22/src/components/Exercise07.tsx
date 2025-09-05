import { Alert } from "antd";

export default function Exercise07() {
  return (
    <div style={{ width: 450 }}>
      <Alert
        message="Cảnh báo"
        description="Lỗi kết nối máy chủ."
        closable
        showIcon={false}
        style={{
          backgroundColor: "#fff",
          border: "1px solid #d9d9d9",
          borderRadius: 6,
          color: "#000",
        }}
      />
    </div>
  );
}
