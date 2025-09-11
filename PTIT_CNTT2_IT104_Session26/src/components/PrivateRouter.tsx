import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRouter() {
  const [isAuth] = useState<boolean>(true); // mở khóa

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}
