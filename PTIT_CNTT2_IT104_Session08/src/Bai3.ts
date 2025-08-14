function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}
console.log(reverseArray<number>([1, 2, 3, 4]));
console.log(reverseArray<string>(["a", "b", "c"]));
console.log(reverseArray<boolean>([true, false, true]));
