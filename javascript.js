

let rootEl = document.getElementById("root");
let container = document.createElement("div");
container.className = "container"
console.log(rootEl);
function setUp() {
    
    fetch("http://hp-api.herokuapp.com/api/characters")
    .then((res) => res.json())
    .then((data) => displayData(data));
    
}
function displayData(data) {
 
  data.forEach((element) => {
      console.log(element.name);
    let mainDiv = document.createElement("div");
    let titleAndDesDiv = document.createElement("div")
    let title = document.createElement("h2");
    let description = document.createElement("p");
    let alive = document.createElement("p");
    let image = document.createElement("img");
    title.innerText = `${element.name}`
   description.innerText = `House: ${element.house? element.house: "Not available"}`
   alive.innerText = `Still alive: ${element.alive? "Yes": "No"}`
    image.src= element.image
    mainDiv.className = "main-div"
    title.className = "title"
    image.className = "image"
    alive.className = "alive"
    titleAndDesDiv.appendChild(title)
    titleAndDesDiv.appendChild(description)
    titleAndDesDiv.appendChild(alive)
    mainDiv.appendChild(titleAndDesDiv)
    mainDiv.appendChild(image)
    container.appendChild(mainDiv)
    rootEl.appendChild(container)
  });
}
window.onload = setUp();
