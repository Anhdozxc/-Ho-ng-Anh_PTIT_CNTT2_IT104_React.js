"use strict";
// default type = string
function withDefault(value) {
    if (value === undefined) {
        return "default"; // ép kiểu vì ts ko biết có thuộc T ko
    }
    return value;
}
console.log(withDefault());
console.log(withDefault(48));
console.log(withDefault(true));
console.log(withDefault("Hi"));
