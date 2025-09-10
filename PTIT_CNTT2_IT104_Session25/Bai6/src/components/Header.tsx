import { NavLink } from "react-router-dom";

export default function Header() {
  const linkStyle = {
    padding: "6px 12px",
    textDecoration: "none",
    color: "black",
  };
  return (
    <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive
            ? { ...linkStyle, background: "red", color: "white" }
            : linkStyle
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/product"
        style={({ isActive }) =>
          isActive
            ? { ...linkStyle, background: "red", color: "white" }
            : linkStyle
        }
      >
        Product
      </NavLink>
      <NavLink
        to="/detail"
        style={({ isActive }) =>
          isActive
            ? { ...linkStyle, background: "red", color: "white" }
            : linkStyle
        }
      >
        Detail
      </NavLink>
    </nav>
  );
}
