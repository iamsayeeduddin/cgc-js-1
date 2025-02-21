class Mobile {
  constructor(mdl, brnd, clr, h, w) {
    this.model = mdl;
    this.brand = "Apple";
    this.color = clr;
    this.height = h;
    this.width = w;
    this.call2 = function () {
      console.log("Calling 2");
    };
  }

  call() {
    console.log("Calling");
  }
}

// var m1 = new Mobile();
// var m2 = new Mobile();
// m1.call();
// m1.call2();
// console.log(m1);
// console.log(m1, m2, m1 === m2);

// class ModernMobile extends Mobile {
//   constructor(mdl, brnd, clr, h, w, fiveG) {
//     super(mdl, brnd, clr, h, w);
//     this.is5G = fiveG;
//   }
// }

// var m1 = new ModernMobile("Iphone 14", "Apple", "Red", 5, 7);

module.exports = { Mobile };

var m2 = new Mobile("Iphone 13", "APple", "Rose Gold", 5, 7);

// console.log(m1, m2);
