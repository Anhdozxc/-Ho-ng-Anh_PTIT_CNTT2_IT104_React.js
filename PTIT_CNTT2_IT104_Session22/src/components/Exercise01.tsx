import { Button } from "antd";

export default function Exercise01() {
  return (
    <div>
      <Button type="primary">Lưu</Button>
      <Button
        danger
        ghost={false}
        style={{
          backgroundColor: "#6b7280",
          borderColor: "#6b7280",
          color: "#fff",
        }}
      >
        Hủy
      </Button>
      <Button
        type="primary"
        style={{ backgroundColor: "#16a34a", borderColor: "#16a34a" }}
      >
        Thành công
      </Button>
      <Button
        type="primary"
        style={{
          backgroundColor: "#facc15",
          borderColor: "#facc15",
          color: "#000",
        }}
      >
        Cảnh báo
      </Button>
      <Button type="primary" danger>
        Báo lỗi
      </Button>
      <Button
        type="primary"
        style={{ backgroundColor: "#06b6d4", borderColor: "#06b6d4" }}
      >
        Thông tin
      </Button>
      <a href="" className="text-blue-600 underline">
        Đường dẫn
      </a>
    </div>
  );
}
