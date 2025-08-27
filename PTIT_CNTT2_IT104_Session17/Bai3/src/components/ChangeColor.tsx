import { useState } from "react";
function ChangeColor() {
  const [color, setColor] = useState("black");
  const handleChangeColor = () => {
    setColor(color === "black" ? "red" : "black");
  };
  return (
    <div>
      <h2 style={{ color: color }}>Tiêu đề văn bản</h2>
      <button onClick={handleChangeColor}>Thay đổi màu</button>
    </div>
  );
}
export default ChangeColor;
