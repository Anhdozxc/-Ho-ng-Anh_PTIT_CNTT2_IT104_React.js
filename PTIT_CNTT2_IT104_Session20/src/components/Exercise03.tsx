import { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    console.log("Component đã được render lần đầu!");
  }, []);

  return <h2>Chào mừng bạn đến với ứng dụng của chúng tôi!</h2>;
}
