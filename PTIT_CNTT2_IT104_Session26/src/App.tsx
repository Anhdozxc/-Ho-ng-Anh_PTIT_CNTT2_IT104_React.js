import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Student from "./components/Student";
import Login from "./components/Login";
import PrivateRouter from "./components/PrivateRouter";
import Account from "./components/Account";
import Teams from "./components/Teams";
import TeamsIndex from "./components/TeamsIndex";
import Team from "./components/Team";

const router = createBrowserRouter([
  { path: "/product/:id", element: <ProductDetail /> },
  { path: "/student/:name", element: <Student /> },
  { path: "/login", element: <Login /> },
  {
    element: <PrivateRouter />,
    children: [{ path: "/account", element: <Account /> }],
  },
  {
    path: "/teams",
    element: <Teams />,
    children: [
      { index: true, element: <TeamsIndex /> }, // /teams
      { path: ":teamId", element: <Team /> }, // /teams/:teamId
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
