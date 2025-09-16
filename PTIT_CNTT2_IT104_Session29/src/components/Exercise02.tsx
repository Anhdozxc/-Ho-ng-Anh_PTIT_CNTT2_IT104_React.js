import { useEffect } from "react";

export default function Exercise02() {
  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((res) => res.json())
      .then((data) => {
        console.log("Danh sách sản phẩm:", data);
      })
      .catch(console.error);
  }, []);

  return <h2>Bài 2</h2>;
}
