"use strict";
class DataStore {
    constructor() {
        this.data = [];
    }
    // Thêm một phần tử vào danh sách
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
    remove(index) {
        if (index >= 0 && index < this.data.length) {
            this.data.splice(index, 1);
        }
        else {
            console.log("Index không hợp lệ");
        }
    }
}
// number
let numberStore = new DataStore();
numberStore.add(10);
numberStore.add(20);
console.log(numberStore.getAll());
numberStore.remove(0);
console.log(numberStore.getAll());
// string
let stringStore = new DataStore();
stringStore.add("hello");
stringStore.add("world");
console.log(stringStore.getAll());
