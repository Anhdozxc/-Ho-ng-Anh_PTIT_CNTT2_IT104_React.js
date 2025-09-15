import { useEffect } from "react";

function Exercise05() {
  function checkCondition(
    condition: boolean,
    callback: (result: boolean) => void
  ): void {
    setTimeout(() => {
      callback(condition);
    }, 1000);
  }

  function display(result: boolean) {
    console.log("Điều kiện trả về:", result);
  }

  useEffect(() => {
    checkCondition(true, display);
    checkCondition(false, display);
  }, []);

  return (
    <div>
      <h2>Bài 5</h2>
    </div>
  );
}

export default Exercise05;
