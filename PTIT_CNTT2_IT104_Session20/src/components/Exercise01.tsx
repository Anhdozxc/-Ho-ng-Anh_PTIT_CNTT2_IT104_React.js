import { useState } from "react";

export default function Exercise01() {
  const [value, setValue] = useState("");

  return (
    <div>
      <h2>Kiểm tra độ dài chuỗi nhập vào</h2>
      <input
        type="text"
        placeholder="Nhập vào đây"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value.length > 5 && (
        <p style={{ color: "red" }}>Chuỗi nhập vào dài hơn 5 ký tự!</p>
      )}
    </div>
  );
}
