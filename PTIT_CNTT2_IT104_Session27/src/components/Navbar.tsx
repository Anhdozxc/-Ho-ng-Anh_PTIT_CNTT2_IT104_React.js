import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "blue", padding: "10px", textAlign: "center" }}>
      <Link
        to="/"
        style={{ margin: "0 15px", color: "white", fontWeight: "bold" }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{ margin: "0 15px", color: "white", fontWeight: "bold" }}
      >
        About
      </Link>
      <Link
        to="/contact"
        style={{ margin: "0 15px", color: "white", fontWeight: "bold" }}
      >
        Contact
      </Link>
      <Link
        to="/products"
        style={{ margin: "0 15px", color: "white", fontWeight: "bold" }}
      >
        Products
      </Link>
    </nav>
  );
}

export default Navbar;
