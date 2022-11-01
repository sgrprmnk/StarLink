//https://swapi.dev/api/people/?search={your_search_term}

let id;
let starData = JSON.parse(localStorage.getItem("stars")) || [];

async function getData() {
  let query = document.getElementById("query").value;

  let URL = `https://swapi.dev/api/people/?search=${query}`;

  let res = await fetch(URL);
  let data = await res.json();

  //  console.log(query);
  console.log(data);
  return data.results;
  //displayData(data.results);
}

function displayData(data) {
  let container = document.querySelector("#results");
  container.innerHTML = null;
  data.forEach(function (el) {
    let div0 = document.createElement("div");
    div0.style.cursor = "pointer";

    let p = document.createElement("p");
    p.innerText = el.name;

    let p0 = document.createElement("p");
    p0.innerText = el.birth_year;
    // let obj = {
    //   name: el.name,
    // };
    starData.push(
      el.name,
      el.birth_year,
      el.gender,
      el.height,
      el.eye_color,
      el.mass,
      el.hair_color
    );

    localStorage.setItem("stars", JSON.stringify(starData));

    p.addEventListener("click", function (e) {
      window.location.href = "./star1.html";
      //   storeData(e);
    });

    div0.append(p, p0);
    container.append(div0);
  });
}

async function main() {
  let data = await getData();

  displayData(data);
}

function debouncing(func, delay) {
  if (id) {
    clearInterval(id);
  }

  id = setTimeout(function () {
    func();
  }, delay);
}

// function storeData(e) {
//   e.preventDefault();

//   let obj = {
//     name: e.name,
//   };
//   starData.push(obj);
//   localStorage.setItem("stars", JSON.stringify(starData));
// }
