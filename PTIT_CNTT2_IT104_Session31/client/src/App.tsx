import { Routes, Route, Navigate } from "react-router-dom";
import ListPost from "./pages/ListPost";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ListPost />} />
      <Route path="/list-post" element={<ListPost />} />
      <Route path="*" element={<Navigate to="/list-post" replace />} />
    </Routes>
  );
}
