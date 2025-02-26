// var age = 10;
// var, let and const
// console.log(age);

// {
//   var age = 19;
//   console.log(age);
// }
// console.log(age);
// const age = 12;

// Arrow Functions
// function calculate () {

//
// var add = function () {};

// const add = () => {
// var a = 9;
// var b = 1;
//   return a + b;
// };
// const add = a => a + 1;
// console.log(add());

// Hoisting
// x = 10;
// console.log(x);
// var age = 10;
// const x;

// Object Destructuring
// let obj = {
//   name: "Syed Sayeeduddin",
//   course: "MERN",
//   timings: 7,
//   rating: 4,
//   mode: "Hybrid",
// };

// const { rating: courseRating, course } = obj;
// const rating = obj.rating;
// const course = obj.course;

// console.log(course, courseRating);

// Array Destructuring
// const arr = [1, 2, 3, 4, 5];
// const [b] = arr;
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(b);

/// Spread Operator
let a = {
  name: "Syed Sayeeduddin",
  timing: 5,
  obj: {
    a: 1,
  },
};

// let b = {
//   course: "FSD MERN",
// };

// let c = {
//   ...a,
//   ...b,
//   timing: 7,
// };

// let d = { ...a };
let d = structuredClone(a);
d.name = "Syed";
// console.log(d, a, d.obj === a.obj);
// console.log(a, b, c);
const arr = [1, 2, 3, 4, 5, 6];
const arr1 = [...arr, 1, 2, 3];
// console.log(arr1);

const obj = {
  name: "syed",
};

const obj1 = {
  ...obj,
  name: "Umair",
};

// console.log(obj1);

const add = (a = 1, b = 0, ...d) => {
  console.log(d);
  let c = a + b;
  if (d.length > 0) {
    d.forEach((ele) => (c += ele));
  }
  return c;
};

// console.log(add(undefined, 10, 5, 6, 7, -8));
const str = "piece of Cadbury choco!";
// console.log(str.endsWith("o!", 5));

// MAP, FILTER and REDUCE

// const res = arr.map((val, idx) => val * 2);
const stdList = [
  { name: "Sayeed", status: "PASS", amount: 100 },
  { name: "Amer", status: "PASS", amount: 23 },
  { name: "Waheed", status: "FAIL", amount: 8743 },
  { name: "Salman", status: "FAIL", amount: 25 },
  { name: "Sufiyaan", status: "PASS", amount: 50 },
  { name: "Ahmed", status: "ONHOLD", amount: 100 },
];
// const res = arr.map((val, idx) => val % 2 === 0);
// const passedStd = stdList.filter((val) => val.status !== "PASS");
// console.log(passedStd);

const arrrr = ["a", "a", "a", "b", "b", "c", "c", "c", "d"];
const callBackFn = (acc, val) => {
  // if (acc[val.status]) {
  //   acc[val.status] += 1;
  // } else {
  //   acc[val.status] = 1;
  // }
  acc += val.amount;
  return acc;
};

const stdCount = stdList.reduce(callBackFn, 0);
// console.log(stdCount);

let obbbbbb = {
  a: 3,
  b: 2,
  c: 3,
  d: 1,
};

const res = arrrr.reduce((acc, val) => {
  if (!acc[val]) {
    acc[val] = 1;
  } else {
    acc[val] += 1;
  }
  return acc;
}, {});
console.log(res);
