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

var func = function (val, index) {
  return val === 4;
};

console.log(arr.findIndex(func));
