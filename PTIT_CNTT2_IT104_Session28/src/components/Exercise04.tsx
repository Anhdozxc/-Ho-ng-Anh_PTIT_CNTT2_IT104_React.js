import { useEffect, useState } from "react";

function Exercise04() {
  const [numbers, setNumbers] = useState<number[]>([]);

  function displayNumbers(
    callback: (value: number) => void,
    delay: number
  ): void {
    let current = 1;
    setInterval(() => {
      callback(current);
      current++;
    }, delay);
  }
  // Callback thêm số vào state để hiển thị
  function printNumber(value: number) {
    setNumbers((prev) => [...prev, value]);
  }
  useEffect(() => {
    displayNumbers(printNumber, 1000);
  }, []);

  return (
    <div>
      <h2>Bài 4</h2>
      {numbers.map((num, index) => (
        <p key={index}>Số thứ tự: {num}</p>
      ))}
    </div>
  );
}

export default Exercise04;
