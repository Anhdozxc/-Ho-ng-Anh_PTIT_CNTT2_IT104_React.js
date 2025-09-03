import { useState, useEffect } from "react";
export default function Exercise05() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    // unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Timer: {count}</h2>
    </div>
  );
}
