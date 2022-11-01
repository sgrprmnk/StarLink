let form = document.querySelector("form");
form.addEventListener("submit", displayData);
let container = document.querySelector(".container");

let starData = JSON.parse(localStorage.getItem("stars")) || [];

function displayData(data) {
  container.innerHTML = null;

  let h1 = document.createElement("h1");
  h1.innerText = data[0];

  let div = document.createElement("div");
  div.setAttribute("id", "parentdiv");

  let div1 = document.createElement("div");
  let h2 = document.createElement("h2");
  h2.innerText = "Personal Info";

  let para = document.createElement("p");
  para.innerText = `Birth Year:${data[1]}`;

  let para1 = document.createElement("p");
  para1.innerText = `Gender:${data[2]}`;

  let para2 = document.createElement("p");
  para2.innerText = `Height:${data[3]}`;

  let div2 = document.createElement("div");
  let h21 = document.createElement("h2");
  h21.innerText = "Anatomy";
  let para3 = document.createElement("p");
  para3.innerText = `Eye Color:${data[4]}`;

  let para4 = document.createElement("p");
  para4.innerText = `Mass:${data[5]}`;

  let para5 = document.createElement("p");
  para5.innerText = `Hair Color:${data[6]}`;

  container.append(h1, div);
  div.append(div1, div2);
  div1.append(h2, para, para1, para2);
  div2.append(h21, para3, para4, para5);
}
displayData(starData);
localStorage.clear();
