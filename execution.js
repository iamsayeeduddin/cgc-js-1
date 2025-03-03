console.log("Start of Script");
let time = 10;

setTimeout(() => {
  console.log("Timeout");
}, time);

fetch("http://api.github.com/users/iamsayeeduddin")
  .then((res) => res.json())
  .then((res2) => console.log(res2))
  .catch((err) => console.error(err));

console.log("End of Script");
