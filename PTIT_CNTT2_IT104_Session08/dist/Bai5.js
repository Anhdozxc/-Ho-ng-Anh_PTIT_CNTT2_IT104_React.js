"use strict";
// generic nhận mảng
function findFirstMatch(arr, predicate) {
    return arr.find(predicate);
}
const isDivisibleByTwo = (num) => num % 2 === 0;
console.log(findFirstMatch([1, 3, 5, 8, 10], isDivisibleByTwo));
console.log(findFirstMatch([1, 3, 5], isDivisibleByTwo));
