function Exercise01() {
  function calculate(a: number, b: number, callback: (result: number) => void) {
    const sum = a + b;
    callback(sum);
  }
  function printResult(result: number) {
    console.log("Kết quả:", result);
  }

  calculate(5, 10, printResult);

  return (
    <div>
      <h2>Bài 1</h2>
    </div>
  );
}

export default Exercise01;
