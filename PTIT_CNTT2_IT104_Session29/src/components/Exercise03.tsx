import { useEffect } from "react";
import axios from "axios";

export default function Exercise03() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/student")
      .then((res) => console.log("Danh sách sinh viên:", res.data))
      .catch(console.error);
    axios
      .get("http://localhost:3000/student/1")
      .then((res) => console.log("SV id=1:", res.data))
      .catch(console.error);
  }, []);

  return <h2>Bài 3</h2>;
}
