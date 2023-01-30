const body = document.querySelector("body");
const imgcontainer = document.createElement("div");

const img = document.createElement("img");

const box = document.createElement("div");
const buttonOn = document.createElement("button");
const buttonOf = document.createElement("button");

body.appendChild(imgcontainer);
imgcontainer.appendChild(img);
body.appendChild(box);

box.appendChild(buttonOn);
box.appendChild(buttonOf);

body.style.backgroundColor = "#fb7b73";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.flexDirection = "column";
imgcontainer.style.width = "480px";
imgcontainer.style.height = "400px";
imgcontainer.style.border = "1px solid yellow";
body.style.height = "100vh";

imgcontainer.style.display = "flex";
imgcontainer.style.justifyContent = "center";

img.src =
  "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png ";

buttonOn.innerText = "turn on";
buttonOf.innerText = "turn of";

buttonOn.style.padding = "5px 10px";
buttonOf.style.padding = "5px 10px";
box.style.marginTop = "20px";
imgcontainer.style.background = "black";
buttonOn.addEventListener("click", function () {
  img.src =
    "https://media0.giphy.com/media/XZcwMvQLRf9aXRa3qW/giphy.gif?cid=ecf05e47gd5zobw3zbarrgykwg6h3j9i09excdoda9jmzxv4&rid=giphy.gif&ct=g";
  buttonOn.innerText = "light on";
  buttonOf.innerText = "turn off";
});

buttonOf.addEventListener("click", function () {
  img.src =
    "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png";
  buttonOf.innerText = "light of";
  buttonOn.innerText = "turn on";
});

imgcontainer.addEventListener("mouseover", function () {
  imgcontainer.style.border = "7px solid yellow";
});

imgcontainer.addEventListener("mouseout", function () {
  imgcontainer.style.border = "1px solid yellow";
});
