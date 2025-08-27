import { useState } from "react";
function UserName() {
  const [name] = useState("Nguyễn Văn A");
  return (
    <div>
      <h2>Họ và tên: {name}</h2>
    </div>
  );
}
export default UserName;
