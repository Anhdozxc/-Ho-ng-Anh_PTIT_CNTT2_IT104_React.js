import { useState } from "react";
import ChildrenProduct from "./ChildrenProduct";

function ParentProduct() {
  const [product] = useState({
    id: 1,
    name: "Bưởi ba roi",
    price: "12.000 đ",
    quantity: 6,
  });
  return (
    <div>
      <ChildrenProduct product={product} />
    </div>
  );
}
export default ParentProduct;
