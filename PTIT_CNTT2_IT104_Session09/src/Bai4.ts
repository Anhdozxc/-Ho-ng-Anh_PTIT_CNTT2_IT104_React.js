// default type = string
function withDefault<T = string>(value?: T): T {
  if (value === undefined) {
    return "default" as T; // ép kiểu vì ts ko biết có thuộc T ko
  }
  return value;
}
console.log(withDefault());
console.log(withDefault(48));
console.log(withDefault(true));
console.log(withDefault("Hi"));
