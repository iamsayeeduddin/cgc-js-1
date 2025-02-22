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
// const add = () => 1 + 1;
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
console.log(d, a, d.obj === a.obj);
// console.log(a, b, c);
