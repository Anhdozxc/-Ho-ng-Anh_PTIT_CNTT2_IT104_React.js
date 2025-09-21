import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export default function ListUser() {
  const list = useSelector((s: RootState) => s.usersState.users);

  const cell = { border: "1px solid #ccc", padding: "6px 10px" };
  return (
    <div>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={cell}>Id</th>
            <th style={cell}>Tên</th>
            <th style={cell}>Giới tính</th>
            <th style={cell}>Ngày sinh</th>
            <th style={cell}>Địa chỉ</th>
            <th style={cell}>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {list.map((u) => (
            <tr key={u.id}>
              <td style={cell}>{u.id}</td>
              <td style={cell}>{u.userName}</td>
              <td style={cell}>{u.gender}</td>
              <td style={cell}>{u.dateBirth}</td>
              <td style={cell}>{u.address}</td>
              <td style={cell}>
                <button style={{ marginRight: 8 }}>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
