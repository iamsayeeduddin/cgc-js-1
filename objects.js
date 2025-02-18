// var student = {
//   name: "Syed Sayeeduddin",
//   mobile: "9874563210",
//   isRegistered: true,
//   "courses name": ["FSD", "Cybersecurity", "SOC"],
//   call: function () {
//     console.log("Calling Sayeed");
//   },
// };

// console.log(student.call());

var contact1 = {
  name: {
    first: "Syed",
    middle: "Sayeed",
    last: "Uddin",
  },
  number: [
    {
      value: 987456321,
      isPrimary: false,
      type: "Personal",
    },
    {
      value: 9632587410,
      isPrimary: true,
      type: "Work",
    },
  ],
  isActive: true,
  call: function () {
    var numberToCall = this.number.find(function (val) {
      // return val.isPrimary === true;
      return val.isPrimary;
    });
    if (numberToCall !== undefined) {
      console.log("Calling " + numberToCall.value);
    } else {
      console.log("Primary Number not found!");
    }
  },
};

var selectedNumObj = contact1.number[1];
// console.log(selectedNumObj.value);

// function callPrimaryNumber() {
//   var numberToCall = contact1.number.find(function (val) {
//     // return val.isPrimary === true;
//     return val.isPrimary;
//   });
//   if (numberToCall !== undefined) {
//     console.log("Calling " + numberToCall.value);
//   } else {
//     console.log("Primary Number not found!");
//   }
// }

// callPrimaryNumber();

// console.log(contact1);
// contact1.email = [
//   { val: "iamsayeeduddin@gmail.com", isPrimary: true },
//   { val: "test@gmail.com", isPrimary: false },
// ];
// contact1.name.last = "Shaik";
// delete contact1.isActive;
// console.log(contact1);
contact1.call();
