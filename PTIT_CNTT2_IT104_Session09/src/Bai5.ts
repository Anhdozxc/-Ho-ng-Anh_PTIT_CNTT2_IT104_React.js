class DataStore<T> {
  private data: T[] = [];
  // Thêm một phần tử vào danh sách
  add(item: T): void {
    this.data.push(item);
  }
  getAll(): T[] {
    return this.data;
  }
  remove(index: number): void {
    if (index >= 0 && index < this.data.length) {
      this.data.splice(index, 1);
    } else {
      console.log("Index không hợp lệ");
    }
  }
}
// number
let numberStore = new DataStore<number>();
numberStore.add(10);
numberStore.add(20);
console.log(numberStore.getAll());
numberStore.remove(0);
console.log(numberStore.getAll());

// string
let stringStore = new DataStore<string>();
stringStore.add("hello");
stringStore.add("world");
console.log(stringStore.getAll());
