// Bài 2
// import { useParams } from "react-router-dom";

// export default function Student() {
//   const { name } = useParams();
//   return <p>name = {name}</p>;
// }

// Bài 3
// import { useState } from "react";
// import { useSearchParams } from "react-router-dom";

// export default function Student() {
//   const [keyword, setKeyword] = useState("");
//   const [searchParams, setSearchParams] = useSearchParams();

//   const handleSearch = () => {
//     if (keyword) {
//       setSearchParams({ studentName: keyword });
//     }
//   };

//   return (
//     <div style={{ padding: 16 }}>
//       <input
//         type="text"
//         placeholder="Nhập từ khóa tìm kiếm"
//         value={keyword}
//         onChange={(e) => setKeyword(e.target.value)}
//       />
//       <button onClick={handleSearch}>Tìm kiếm</button>
//       <p>URL studentName = {searchParams.get("studentName")}</p>
//     </div>
//   );
// }

// Bài 4
import { useSearchParams } from "react-router-dom";

export default function Student() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("studentName");

  return <p>{name} bài 4</p>;
}
