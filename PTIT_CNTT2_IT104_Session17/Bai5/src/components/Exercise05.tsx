import { useState } from "react";
function Form() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Nhập nội dung"
        value={value}
        onChange={handleChange}
      />
      <h3>{value}</h3>
    </div>
  );
}
export default Form;
