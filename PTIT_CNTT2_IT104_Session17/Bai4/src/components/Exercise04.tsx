import { useState } from "react";
function Toggle() {
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <button onClick={handleToggle}>{isVisible ? "Ẩn" : "Hiện"}</button>

      {isVisible && <h3>Tiêu đề văn bản</h3>}
    </div>
  );
}
export default Toggle;
