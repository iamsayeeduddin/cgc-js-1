var a = 10;
// console.log(a);
let handler = () => {
  //   console.log("I am an ASYNC operation");
};
setTimeout(handler, 1000);

// console.log("After Async operation");

const add = (a, b, cb) => {
  setTimeout(() => {
    var c = a + b;
    // console.log(c);
    cb(c, "add");
    // return c;
  }, 3000);
};

const subtract = (a, b, cb) => {
  setTimeout(() => {
    var c = a - b;
    // console.log(c);
    cb(c, "subtract");
    // return c;
  }, 3000);
};

let resAdd,
  resSub = 0;

let callBackFn = (result, type) => {
  //   console.log(result);
  //   res = result;
  //   console.log(res);
  if (type === "add") {
    resAdd = result;
    console.log(resAdd, "RES ADD");
  } else {
    resSub = result;
    console.log(resSub, "RES SUB");
  }
};

// const res = add(10, 20);
// add(10, 20, callBackFn);
// subtract(10, 20, callBackFn);
// console.log(res);

add(10, 50, (result) => {
  subtract(result, 20, callBackFn);
});
