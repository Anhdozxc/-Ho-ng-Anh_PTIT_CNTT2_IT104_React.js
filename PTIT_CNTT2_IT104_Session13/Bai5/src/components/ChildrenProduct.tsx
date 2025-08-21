interface Product {
  id: number;
  name: string;
  price: string;
  quantity: number;
}
interface Props {
  product: Product;
}
function ChildrenProduct({ product }: Props) {
  return (
    <div>
      <h2>Dữ liệu trong component con</h2>
      <p>
        <b>Id:</b> {product.id}
      </p>
      <p>
        <b>Product name:</b> {product.name}
      </p>
      <p>
        <b>Price:</b> {product.price}
      </p>
      <p>
        <b>Quantity:</b> {product.quantity}
      </p>
    </div>
  );
}
export default ChildrenProduct;
