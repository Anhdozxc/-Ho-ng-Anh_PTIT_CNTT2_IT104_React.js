function Exercise03() {
  function processArray(
    arr: number[],
    callback: (value: number) => void
  ): void {
    arr.forEach((item, index) => {
      setTimeout(() => {
        callback(item);
      }, (index + 1) * 1000);
    });
  }

  // Callback in kết quả
  function printElement(value: number) {
    console.log("Phần tử thứ:", value);
  }
  processArray([1, 2, 3, 4, 5], printElement);

  return (
    <div>
      <h2>Bài 3</h2>
    </div>
  );
}

export default Exercise03;
