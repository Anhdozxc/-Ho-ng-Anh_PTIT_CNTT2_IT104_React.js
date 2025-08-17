"use strict";
function identity(value) {
    return value;
}
console.log(identity(5));
console.log(identity("hello"));
console.log(identity({ a: 1 }));
