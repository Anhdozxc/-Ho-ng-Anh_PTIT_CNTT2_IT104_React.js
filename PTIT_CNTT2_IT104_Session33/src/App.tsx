import Container from "./components/baitap/Container";
import Cart from "./components/baitap/Cart";
import "./index.css";
import ProductListFromStore from "./components/bai04/ProductListFromStore";

export default function App() {
  return (
    <Container>
      <h1>Shopping Cart</h1>
      <div className="grid">
        <div className="col">
          <ProductListFromStore />
        </div>
        <div className="col">
          <Cart />
        </div>
      </div>
    </Container>
  );
}
