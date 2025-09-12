import { Link } from "react-router-dom";

export default function About() {
  return (
    <div style={{ padding: 16 }}>
      <h2>About</h2>
      <p>Trang giới thiệu mẫu.</p>
      <Link to="/">Quay về trang chủ</Link>
    </div>
  );
}
