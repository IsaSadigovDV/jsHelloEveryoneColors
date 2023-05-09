document.body.style.height = "100vh";
const h1 = document.createElement("h1");

h1.textContent = "Hello Everyone";

h1.style.textAlign = "center";
h1.style.margin = "0";

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

document.body.appendChild(h1);

let colors = new Array(
  "red",
  "orange",
  "green",
  "blue",
  "brown",
  "purple",
  "gray",
  "white"
);

let colorIndex = 0;

function changeColor() {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeColor, 1000);
