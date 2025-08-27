import { useState } from "react";
function Select() {
  const [city, setCity] = useState("");
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <div>
      <label>Thành phố: </label>
      <select value={city} onChange={handleChange}>
        <option value="">-- Chọn thành phố --</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hà Nam">Hà Nam</option>
        <option value="Ninh Bình">Ninh Bình</option>
        <option value="Thanh Hóa">Thanh Hóa</option>
        <option value="Nghệ An">Nghệ An</option>
      </select>
      {city && <p>Thành phố: {city}</p>}
    </div>
  );
}
export default Select;
