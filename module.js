const PI = 3.14;
const minVal = 1000;
const age = 10;

let exposeObj = {
  PI,
  minVal,
};

// console.log(this.module);
module.exports = exposeObj;
// {
//     PI: PI,
//     minVal: minVal,
//   };
// console.log(module);
