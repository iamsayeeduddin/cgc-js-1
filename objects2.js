function Mobile(clr) {
  this.model = "iphone 16";
  this.brand = "Apple";
  this.color = clr || "NA";
  this.height = 7;
  this.width = 5;
}

var m1 = new Mobile("Red");
var m2 = new Mobile("Rose Gold");
var m3 = new Mobile();
// var dt = new Date();
m2.ram = "8 GB";

Mobile.prototype.storage = "124";
console.log(m1.storage, m2.storage, m3.storage);
