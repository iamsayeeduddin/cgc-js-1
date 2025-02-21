var importedClass = require("./objects3");

var Mobile = importedClass.Mobile;

class ModernMobile extends Mobile {
  constructor(mdl, brnd, clr, h, w, fiveG) {
    super(mdl, brnd, clr, h, w);
    this.brand = "Tim Cook's Apple";
    if (fiveG) {
      this.is5G = fiveG;
    } else {
      throw new Error("value must be true");
      //   console.log("value must be true");
    }
  }

  call() {
    console.log("Call from this file", this.brand);
  }
}

// var m1 = new ModernMobile("Iphone 14", "sdjna,sdas,", "Red", 5, 7, false);

// console.log(m1);
// m1.call();

function createAcc() {
  //   .
  //   .
  //   .
  //   .
  try {
    var m3 = new ModernMobile("Iphone 14", "sdjna,sdas,", "Red", 5, 7, false);
  } catch (e) {
    console.log(e);
  }
}

createAcc();
