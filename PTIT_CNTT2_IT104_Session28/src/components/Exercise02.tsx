function Exercise02() {
  function delayedCallback(callback: () => void, delay: number): void {
    setTimeout(() => {
      callback();
    }, delay);
  }
  function printMessage() {
    console.log("Callback đã được thực thi sau 2 giây!");
  }
  delayedCallback(printMessage, 2000);
  return (
    <div>
      <h2>Bài 2</h2>
    </div>
  );
}

export default Exercise02;
