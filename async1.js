const add = (a, b) => {
  let prm = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a === 0) {
        reject("0 is not accepted");
      }
      var c = a + b;
      resolve(c);
    }, 3000);
  });

  return prm;
};

const subtract = (a, b) => {
  let prm = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a === 0) {
        reject("0 is not accepted");
      }
      var c = a - b;
      resolve(c);
    }, 3000);
  });

  return prm;
};

// const res = add(10, 20);
// console.log(res);

// add(10, 20)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// subtract(20, 5)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// fetch("https://api.github.com/users")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// add(-20, 20)
//   .then((addRes) => {
//     console.log(addRes);
//     return subtract(addRes, 5);
//   })
//   .then((addRes) => {
//     console.log(addRes);
//     return subtract(addRes, 5);
//   })
//   .then((addRes) => {
//     console.log(addRes);
//     return subtract(addRes, 5);
//   })
//   .then((addRes) => {
//     console.log(addRes);
//     return subtract(addRes, 5);
//   })
//   .then((addRes) => {
//     console.log(addRes);
//     return subtract(addRes, 5);
//   })
//   .then((subRes) => console.log(subRes))
//   .catch((err) => console.log(err));

// Promise.all([add(20, 20), subtract(15, 5)])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("FINALLY EXECUTED"));

Promise.any([add(0, 20), subtract(0, 5), subtract(10, 5)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("FINALLY EXECUTED"));
