function greet() {
  let name = "Sayeed";
  function displayName() {
    let a = "10";

    console.log(`Hi ${name}!`);
  }
  console.log(a);
  //   displayName();
  return displayName;
}

// greet("Sayeed");
// const g1 = greet("Sayeed");
const g1 = greet()();
// displayName();
console.log(g1);
// g1();

function aA(a) {
  return function bB(b) {
    return function cC(c) {
      return a + b + c;
    };
  };
}

console.log(aA(1)(2)(3));

/// Factorial
// 5 = 5*4*3*2*1
