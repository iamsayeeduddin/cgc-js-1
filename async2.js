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

const multiply = (a, b) => {
  let prm = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a === 0) {
        reject("0 is not accepted");
      }
      var c = a * b;
      resolve(c);
    }, 3000);
  });

  return prm;
};

const init = async () => {
  try {
    const addRes = await add(-20, 20);
    console.log(addRes);
    const subRes = await subtract(addRes, 5);
    const mulRes = await multiply(subRes, 5);
    console.log(addRes, subRes, mulRes);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("FINALLLAYY!!");
  }
};

init();

// const fun = () => {
//   try {

//   } catch (error) {
//     console.log(error);
//   }
// };

/// CHAINED PROMISES
// fun();
