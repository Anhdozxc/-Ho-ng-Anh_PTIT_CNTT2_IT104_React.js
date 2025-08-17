"use strict";
function firstMatch(array, predicate) {
    for (let item of array) {
        if (predicate(item)) {
            return item; // phần tử đầu tiên thỏa mãn
        }
    }
    return undefined; // Không có thỏa mãn
}
console.log(firstMatch([1, 2, 4, 6], (n) => n % 2 === 0));
console.log(firstMatch(["cat", "house", "car"], (word) => word.length > 4));
