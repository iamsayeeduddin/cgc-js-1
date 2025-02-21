// var mobile = new Object({
//   brand: "Apple",
// });
// console.log(mobile);

var mobile1 = {
  width: "10",
};

var mobile = Object.create(mobile1, {
  brand: { value: "Apple", enumerable: true, writable: true },
});

Object.defineProperty(mobile, "brand", {
  value: "Samsung",
});

Object.defineProperty(mobile, "model", {
  value: "S25",
  enumerable: true,
});

// mobile.width = 9;
// mobile.brand = "Samsung";
console.log(mobile.width);
