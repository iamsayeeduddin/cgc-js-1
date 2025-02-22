// var mobile = new Object({
//   brand: "Apple",
// });
// console.log(mobile);

var mobile1 = {
  width: "10",
};

var mobile = Object.create(mobile1, {
  brand: { value: "Apple", enumerable: true, writable: true, configurable: false },
});

Object.defineProperty(mobile, "brand", {
  value: "Samsung",
  enumerable: false,
});

Object.defineProperty(mobile, "model", {
  value: "S25",
  enumerable: true,
});

// mobile.width = 9;
// mobile.brand = "Samsung";
console.log(mobile.width);
