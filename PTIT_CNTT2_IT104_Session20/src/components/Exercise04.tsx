import { useState, useEffect } from "react";

export default function Exercise04() {
  const [name, setName] = useState("");

  useEffect(() => {
    if (name) {
      document.title = `Chào, ${name}!`;
    } else {
      document.title = "Trang web của bạn";
    }
  }, [name]);
  return (
    <div>
      <h2>Chào mừng bạn đến với trang của chúng tôi!</h2>
      <input
        type="text"
        placeholder="Nhập tên của bạn"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Tiêu đề trang sẽ thay đổi khi bạn nhập tên vào trường trên.</p>
    </div>
  );
}
