import { Alert } from "antd";

export default function Exercise05() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Alert
        message="Thêm tài khoản thành công."
        type="success"
        showIcon={false}
        closable
      />
      <Alert
        message="Thêm mới tài khoản thất bại."
        type="error"
        showIcon={false}
        closable
      />
      <Alert
        message="Tên không được để trống."
        type="warning"
        showIcon={false}
        closable
      />
    </div>
  );
}
