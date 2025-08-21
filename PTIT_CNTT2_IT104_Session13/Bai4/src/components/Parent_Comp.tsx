import { useState } from "react";
import Children_Comp from "./Children_Comp";
function Parent_Comp() {
  const [name] = useState("Nguyễn Văn Nam");

  return (
    <div>
      <h3>Họ và tên bên component cha: {name}</h3>
      <Children_Comp name={name} />
    </div>
  );
}

export default Parent_Comp;
