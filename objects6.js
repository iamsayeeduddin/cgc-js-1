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

class ModernMobile extends Mobile {
  constructor(mdl, brnd, h, w, fiveG) {
    super(mdl, brnd, null, h, w);
    this.is5G = fiveG;
    delete this.color;
  }
}

var m1 = new ModernMobile("S24", "Samsung", null, "5", "6", true);
delete m1.brand;
console.log(m1);
