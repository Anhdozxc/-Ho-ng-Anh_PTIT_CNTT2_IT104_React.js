import { useEffect } from "react";

function Exercise06() {
  function task1(callback: () => void): void {
    setTimeout(() => {
      console.log("Task 1 được thực thi");
      callback();
    }, 1000);
  }

  function task2(callback: () => void): void {
    setTimeout(() => {
      console.log("Task 2 được thực thi");
      callback();
    }, 1500);
  }

  function task3(): void {
    setTimeout(() => {
      console.log("Task 3 được thực thi! Hoàn thành");
    }, 2000);
  }

  useEffect(() => {
    task1(() => {
      task2(() => {
        task3();
      });
    });
  }, []);

  return (
    <div>
      <h2>Bài 6</h2>
    </div>
  );
}

export default Exercise06;
