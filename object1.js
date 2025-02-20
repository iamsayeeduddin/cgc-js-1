var m1 = {
  brand: "Apple",
  model: "Iphone 16",
  color: "Silk Gold",
  width: 5,
  height: 7,
};

var age = 10;
var age1 = age;
age1 = 11;
var m2 = m1;
m2.color = "Red";
// console.log(age, age1);
// console.log(m1, m2);
var m3 = {};
for (var key in m1) {
  // console.log(key);
  m3[key] = m1[key];
}
// m3.color = "Black";
console.log(m3, m1);
console.log(m1 === m3);
