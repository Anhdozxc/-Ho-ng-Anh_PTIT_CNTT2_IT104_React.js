import { useEffect } from "react";

function Exercise07() {
  function myForEach(
    arr: number[],
    callback: (element: number, i: number, array: number[]) => void
  ) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  }
  useEffect(() => {
    const numbers = [1, 2, 3, 4, 5, 6];
    myForEach(numbers, (element, i, arr) => {
      console.log("Vị trí:", i, "| Phần tử:", element, "| Mảng:", arr);
    });
  }, []);

  return (
    <div>
      <h2>Bài 7</h2>
    </div>
  );
}

export default Exercise07;
