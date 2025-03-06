const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

filter.addEventListener("input", (e) => filterData(e.target.value));

const getData = async () => {
  try {
    const res = await fetch("https://randomuser.me/api?results=50");
    const { results } = await res.json();

    result.innerHTML = "";

    results.forEach((user) => {
      const li = document.createElement("li");
      listItems.push(li);
      li.innerHTML = `
        <img height="50" src="${user.picture.large}" alt="User"/>
        <div>
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
      `;

      result.appendChild(li);
    });
  } catch (e) {
    console.log(e);
  }
};

getData();

function filterData(search) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
