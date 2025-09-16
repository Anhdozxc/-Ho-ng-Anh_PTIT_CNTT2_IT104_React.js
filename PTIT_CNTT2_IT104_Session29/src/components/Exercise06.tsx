import { useEffect } from "react";
import { createStudent } from "../api/student";

export default function Exercise06() {
  useEffect(() => {
    createStudent();
  }, []);

  return <h2>Bài 6</h2>;
}
