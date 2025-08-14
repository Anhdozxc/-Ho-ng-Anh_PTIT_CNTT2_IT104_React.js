// generic nhận mảng
function findFirstMatch<T>(
  arr: T[],
  predicate: (item: T) => boolean
): T | undefined {
  return arr.find(predicate);
}
const isDivisibleByTwo = (num: number) => num % 2 === 0;
console.log(findFirstMatch([1, 3, 5, 8, 10], isDivisibleByTwo));
console.log(findFirstMatch([1, 3, 5], isDivisibleByTwo));
