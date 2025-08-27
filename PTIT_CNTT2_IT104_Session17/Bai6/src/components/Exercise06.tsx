import { useState } from "react";
function CountText() {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        placeholder="Nhập nội dung"
        value={text}
        onChange={handleChange}
      />
      <p>Số ký tự: {text.length}</p>
    </div>
  );
}
export default CountText;
