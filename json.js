const obj = {
  name: "Sayeeduddin",
  class: "MERN",
};

/// SERIALIZATION
/// CLONING OF OBJECTS

let objStr = JSON.stringify(obj);
let newObj = JSON.parse(objStr);
let newStr = objStr.replaceAll(":", ";");

// console.log(obj === newObj);

// fetch

fetch(
  "https://api.github.com/users/iamsayeeduddin"
  // , {
  //   method: "POST",
  //   body: JSON.stringify(obj)
  // }
)
  .then((res) => res.json())
  .then((res2) => console.log(res2.name, "FROM PROMISE"))
  .catch((err) => console.log(err));

const init = async () => {
  try {
    var response = await fetch("https://api.github.com/users/iamsayeeduddin");
    var responseJSON = await response.json();
    console.log(responseJSON.name, "FROM ASYNC AWAIT");
  } catch (error) {
    console.log(error);
  }
};

init();
