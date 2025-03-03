// console.log(document.getElementsByTagName("p")[0].innerText);

// document.getElementsByTagName("p")[0].innerText = "MANIPULATED BY SAYEED";

// const pEl = document.getElementsByTagName("p");
// for (var i = 0; i < pEl.length; i++) {
//   let txt = pEl[i].innerText;

//   pEl[i].innerText = txt.replace(" ", "@");
// }

const btn = document.getElementById("btn");
setTimeout(() => {
  btn.style.width = "500px";
  btn.style.color = "red";
  btn.style.backgroundColor = "green";
}, 3000);

btn.addEventListener("mouseleave", (ev) => {
  //   alert("Hey YOU CLICKED!!!!")]
  console.log(ev.target.name);
  const res = confirm("Are you sure to proceed?");
  console.log(res);
});
