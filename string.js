var nam = "Syed";
var txt = nam.slice(0);
// console.log(txt);

// Array Methods
var arr = [1, 2, 3, 4, 5, 6];
// arr.length
// arr.join(" | )
//arr.push(7)
// arr.pop();
// arr.unshift(0);
var ar = [];

var add = 0;
var func = function (val, index) {
  // ar.push(arr[index] % 2 === 0);
  add += val;
};

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// console.log(arr.findIndex(func));
// console.log(arr.includes("4"));
arr.forEach(function (val, index) {
  // ar.push(arr[index] % 2 === 0);
  add += val;
});
console.log(add);
