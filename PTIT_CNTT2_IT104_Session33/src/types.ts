export type Product = {
  id: number;
  name: string;
  price: number;
  desc: string;
  image: string;
  stock: number;
};
export type CartItem = { id: number; name: string; price: number; qty: number };
export type Notice = { message: string; type?: "success" | "error" | "info" };
