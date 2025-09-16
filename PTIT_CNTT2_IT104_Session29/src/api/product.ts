export async function getAllProduct() {
  const res = await fetch("http://localhost:3000/product");
  const data = await res.json();
  return data;
}
