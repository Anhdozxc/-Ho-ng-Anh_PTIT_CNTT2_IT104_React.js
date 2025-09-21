import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export default function Profile() {
  const user = useSelector((s: RootState) => s.userState.user);
  return (
    <div style={{ lineHeight: 1.6 }}>
      <h3>Thông tin cá nhân</h3>
      <div>Id: {user.id}</div>
      <div>Họ và tên: {user.userName}</div>
      <div>Giới tính: {user.gender}</div>
      <div>Ngày sinh: {user.dateBirth}</div>
      <div>Địa chỉ: {user.address}</div>
    </div>
  );
}
